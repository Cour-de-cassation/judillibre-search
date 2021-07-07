const taxon = {
  text: 'Texte entier',
  introduction: 'Chapeau',
  expose: 'Exposé du litige',
  moyens: 'Moyens',
  motivations: 'Motivation',
  dispositif: 'Dispositif',
  annexes: 'Moyens annexés',
  visa: 'Textes appliqués',
};

module.exports = {
  options: [''].concat(Object.keys(taxon)),
  keys: Object.keys(taxon),
  taxonomy: taxon,
};
