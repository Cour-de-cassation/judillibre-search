require('../modules/env');
const express = require('express');
const api = express.Router();
const { checkSchema, validationResult } = require('express-validator');
const Elastic = require('../modules/elastic');
const route = 'published';

api.get(
  `/${route}`,
  checkSchema({
    id: {
      in: 'query',
      isString: true,
      errorMessage: `Value of the id parameter must be a string.`,
      optional: false,
    },
  }),
  async (req, res) => {
    const t0 = new Date();
    if (process.env.APP_HOST_ALTER === undefined) {
      process.env.APP_HOST_ALTER = req.hostname;
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ route: `${req.method} ${req.path}`, errors: errors.array() });
    }
    try {
      const result = await Elastic.published(req.query);
      const t1 = new Date();
      if (result === null) {
        return res.status(404).json({
          route: `${req.method} ${req.path}`,
          errors: [{ msg: 'Not Found', error: `Decision '${req.query.id}' not found.` }],
          took: t1.getTime() - t0.getTime(),
        });
      } else if (result.errors) {
        return res.status(400).json({
          route: `${req.method} ${req.path}`,
          errors: result.errors,
          took: t1.getTime() - t0.getTime(),
        });
      }
      result.took = t1.getTime() - t0.getTime();
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({
        route: `${req.method} ${req.path}`,
        errors: [{ msg: 'Internal Server Error', error: JSON.stringify(e, e ? Object.getOwnPropertyNames(e) : null) }],
      });
    }
  },
);

module.exports = api;
