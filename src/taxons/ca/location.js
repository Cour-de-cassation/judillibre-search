const taxon = {
  ca_agen: "Cour d'appel d'Agen",
  ca_aix_provence: "Cour d'appel d'Aix-en-Provence",
  ca_amiens: "Cour d'appel d'Amiens",
  ca_angers: "Cour d'appel d'Angers",
  ca_basse_terre: "Cour d'appel de Basse-Terre",
  ca_bastia: "Cour d'appel de Bastia",
  ca_besancon: "Cour d'appel de Besançon",
  ca_bordeaux: "Cour d'appel de Bordeaux",
  ca_bourges: "Cour d'appel de Bourges",
  ca_caen: "Cour d'appel de Caen",
  ca_cayenne: "Cour d'appel de Cayenne",
  ca_chambery: "Cour d'appel de Chambéry",
  ca_colmar: "Cour d'appel de Colmar",
  ca_dijon: "Cour d'appel de Dijon",
  ca_douai: "Cour d'appel de Douai",
  ca_fort_de_france: "Cour d'appel de Fort-de-France",
  ca_grenoble: "Cour d'appel de Grenoble",
  ca_limoges: "Cour d'appel de Limoges",
  ca_lyon: "Cour d'appel de Lyon",
  ca_metz: "Cour d'appel de Metz",
  ca_montpellier: "Cour d'appel de Montpellier",
  ca_nancy: "Cour d'appel de Nancy",
  ca_nimes: "Cour d'appel de Nîmes",
  ca_noumea: "Cour d'appel de Nouméa",
  ca_orleans: "Cour d'appel d'Orléans",
  ca_papeete: "Cour d'appel de Papeete",
  ca_paris: "Cour d'appel de Paris",
  ca_pau: "Cour d'appel de Pau",
  ca_poitiers: "Cour d'appel de Poitiers",
  ca_reims: "Cour d'appel de Reims",
  ca_rennes: "Cour d'appel de Rennes",
  ca_riom: "Cour d'appel de Riom",
  ca_rouen: "Cour d'appel de Rouen",
  ca_st_denis_reunion: "Cour d'appel de Saint-Denis de la Réunion",
  ca_toulouse: "Cour d'appel de Toulouse",
  ca_versailles: "Cour d'appel de Versailles",
};

module.exports = {
  options: [''].concat(Object.keys(taxon)),
  keys: Object.keys(taxon),
  taxonomy: taxon,
};