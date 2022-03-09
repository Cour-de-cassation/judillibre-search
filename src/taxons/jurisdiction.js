const taxon = {
  cc: 'Cour de cassation',
  ca: "Cours d'appel",
  /*
  tc: 'Tribunal des conflits',
  tgi: 'Tribunal de grande instance de Paris',
  other: 'Autre',
  */
};

module.exports = {
  options: [''].concat(Object.keys(taxon)),
  keys: Object.keys(taxon),
  taxonomy: taxon,
};
