require('../modules/env');
const express = require('express');
const api = express.Router();
const Elastic = require('../modules/elastic');
const route = 'healthcheck';

api.get(`/${route}/:query`, async (req, res) => {
  try {
    const result = await getHealthcheck(req.params.query);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ route: route, message: 'Internal Server Error', error: e.message });
  }
});

async function getHealthcheck(query) {
  return {
    route: route,
    query: query,
  };
}

module.exports = api;
