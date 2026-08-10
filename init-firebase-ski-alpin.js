// ============================================================
// SCRIPT D'INITIALISATION FIREBASE — SKI ALPIN
// fan-club-eric-perrot — Ski Alpin
//
// Instructions :
// 1. Ouvre ski-alpin.html avec Live Server
// 2. Copie-colle ce script dans la console (F12)
// 3. Appuie sur Entrée
// ============================================================

const skiers = [
  "Aerni Luca", "Aicher Emil", "Alexander Cameron", "Allegre Nils", "Amiez Steven",
  "Anguenot Leo", "Ax Swartz Fabian", "Babinsky Stefan", "Bailet Matthieu", "Baumann Romed",
  "Bennett Bryce", "Brennsteiner Stefan", "Casse Mattia", "Caviezel Gino", "Cochran-Siegle Ryan",
  "Crawford James", "De Aliprandini Luca", "Della Vite Filippo", "Eichberger Stefan", "Favrot Thibaut",
  "Feller Manuel", "Feurstein Lukas", "Franzoni Giovanni", "Giezendanner Blaise", "Goldberg Jared",
  "Grammel Anton", "Gstrein Fabio", "Haaser Raphael", "Haugan Timon", "Hemetsberger Daniel",
  "Hrobat Miha", "Innerhofer Christof", "Jakobsen Kristoffer", "Jocher Simon", "Kastlunger Tobias",
  "Kohler Marco", "Kolega Samuel", "Kranjec Zan", "Kriechmayr Vincent", "Kristoffersen Henrik",
  "Laine Tormis", "Maes Sam", "Matt Michael", "McGrath Atle Lie", "Meillard Loic",
  "Moeller Fredrik", "Monney Alexis", "Murisier Justin", "Muzaton Maxence", "Naralocnik Nejc",
  "Nef Tanguy", "Noel Clement", "Odermatt Marco", "Paris Dominik", "Pertl Adrian",
  "Pinheiro Braathen Lucas", "Pinturault Alexis", "Popov Albert", "Radamus River", "Raschner Dominik",
  "Rassat Paco", "Ritchie Benjamin", "Rochat Marc", "Rogentin Stefan", "Ryding Dave",
  "Sarrazin Cyprien", "Schieder Florian", "Schmid Alexander", "Schwarz Marco", "Sejersted Adrian Smiseth",
  "Steen Olsen Alexander", "Strasser Linus", "Striedinger Otmar", "Strolz Johannes", "Theaux Adrien",
  "Tumler Thomas", "Vinatzer Alex", "Von Allmen Franjo", "Windingstad Rasmus", "Yule Daniel",
  "Zabystran Jan", "Zenhaeusern Ramon", "Zubcic Filip"
].sort();

// Calendrier CdM ski alpin 2026-2027 — hommes uniquement
// Nom = lieu uniquement
const races = [
  // Octobre 2026
  {name:"Sölden",            discipline:"Géant",    gender:"H", date:"2026-10-25", time:"10:00"},
  // Novembre 2026
  {name:"Levi",              discipline:"Slalom",   gender:"H", date:"2026-11-15", time:"10:00"},
  {name:"Gurgl",             discipline:"Slalom",   gender:"H", date:"2026-11-21", time:"10:00"},
  {name:"Copper Mountain",   discipline:"Super-G",  gender:"H", date:"2026-11-27", time:"19:00"},
  {name:"Copper Mountain",   discipline:"Géant",    gender:"H", date:"2026-11-28", time:"19:00"},
  // Décembre 2026
  {name:"Beaver Creek",      discipline:"Descente", gender:"H", date:"2026-12-04", time:"19:30"},
  {name:"Beaver Creek",      discipline:"Super-G",  gender:"H", date:"2026-12-05", time:"19:30"},
  {name:"Beaver Creek",      discipline:"Géant",    gender:"H", date:"2026-12-06", time:"19:30"},
  {name:"Val d'Isère",       discipline:"Géant",    gender:"H", date:"2026-12-12", time:"10:00"},
  {name:"Val d'Isère",       discipline:"Slalom",   gender:"H", date:"2026-12-13", time:"10:00"},
  {name:"Val Gardena",       discipline:"Descente", gender:"H", date:"2026-12-17", time:"11:45"},
  {name:"Val Gardena",       discipline:"Super-G",  gender:"H", date:"2026-12-18", time:"11:45"},
  {name:"Alta Badia",        discipline:"Géant",    gender:"H", date:"2026-12-20", time:"10:00"},
  {name:"Alta Badia",        discipline:"Slalom",   gender:"H", date:"2026-12-21", time:"17:30"},
  {name:"Madonna di Campiglio", discipline:"Slalom", gender:"H", date:"2026-12-22", time:"17:45"},
  {name:"Bormio",            discipline:"Descente", gender:"H", date:"2026-12-28", time:"11:30"},
  {name:"Bormio",            discipline:"Super-G",  gender:"H", date:"2026-12-29", time:"11:30"},
  // Janvier 2027
  {name:"Chamonix",          discipline:"Slalom",   gender:"H", date:"2027-01-03", time:"10:00"},
  {name:"Kranjska Gora",     discipline:"Géant",    gender:"H", date:"2027-01-07", time:"10:00"},
  {name:"Kranjska Gora",     discipline:"Slalom",   gender:"H", date:"2027-01-08", time:"10:00"},
  {name:"Adelboden",         discipline:"Géant",    gender:"H", date:"2027-01-09", time:"10:30"},
  {name:"Adelboden",         discipline:"Slalom",   gender:"H", date:"2027-01-10", time:"10:30"},
  {name:"Wengen",            discipline:"Super-G",  gender:"H", date:"2027-01-15", time:"12:30"},
  {name:"Wengen",            discipline:"Descente", gender:"H", date:"2027-01-16", time:"12:30"},
  {name:"Wengen",            discipline:"Slalom",   gender:"H", date:"2027-01-17", time:"10:00"},
  {name:"Kitzbühel",         discipline:"Super-G",  gender:"H", date:"2027-01-22", time:"11:30"},
  {name:"Kitzbühel",         discipline:"Descente", gender:"H", date:"2027-01-23", time:"11:30"},
  {name:"Kitzbühel",         discipline:"Slalom",   gender:"H", date:"2027-01-24", time:"10:00"},
  {name:"Schladming",        discipline:"Géant",    gender:"H", date:"2027-01-26", time:"17:30"},
  {name:"Schladming",        discipline:"Slalom",   gender:"H", date:"2027-01-27", time:"17:45"},
  // Février 2027 — Championnats du Monde Crans-Montana
  {name:"Crans-Montana",     discipline:"Descente", gender:"H", date:"2027-02-07", time:"11:00"},
  {name:"Crans-Montana",     discipline:"Super-G",  gender:"H", date:"2027-02-09", time:"11:00"},
  {name:"Crans-Montana",     discipline:"Géant",    gender:"H", date:"2027-02-13", time:"10:00"},
  {name:"Crans-Montana",     discipline:"Slalom",   gender:"H", date:"2027-02-14", time:"10:00"},
  // Mars 2027
  {name:"Kvitfjell",         discipline:"Descente", gender:"H", date:"2027-03-05", time:"11:30"},
  {name:"Kvitfjell",         discipline:"Super-G",  gender:"H", date:"2027-03-06", time:"11:30"},
  {name:"Kvitfjell",         discipline:"Descente", gender:"H", date:"2027-03-07", time:"11:30"},
  {name:"Are",               discipline:"Géant",    gender:"H", date:"2027-03-13", time:"10:00"},
  {name:"Are",               discipline:"Slalom",   gender:"H", date:"2027-03-14", time:"10:00"},
  // Finales Sun Valley
  {name:"Sun Valley",        discipline:"Descente", gender:"H", date:"2027-03-20", time:"19:00"},
  {name:"Sun Valley",        discipline:"Super-G",  gender:"H", date:"2027-03-21", time:"19:00"},
  {name:"Sun Valley",        discipline:"Géant",    gender:"H", date:"2027-03-22", time:"19:00"},
  {name:"Sun Valley",        discipline:"Slalom",   gender:"H", date:"2027-03-23", time:"19:00"},
];

async function initFirebase() {
  console.log("🚀 Initialisation Firebase Ski Alpin...");

  const { getDatabase, ref, set, remove, push } =
    await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js");
  const db = getDatabase();

  // 1. Coureurs
  console.log("⛷️ Chargement des coureurs...");
  await remove(ref(db, 'skiers'));
  const skiersObj = {};
  skiers.forEach((name, i) => { skiersObj['s' + i] = { name }; });
  await set(ref(db, 'skiers'), skiersObj);
  console.log(`✅ ${skiers.length} coureurs chargés`);

  // 2. Courses
  console.log("🏔️ Chargement des courses...");
  await remove(ref(db, 'races'));
  for (const r of races) {
    await push(ref(db, 'races'), {
      ...r,
      season:  '2026-2027',
      status:  'upcoming',
      results: []
    });
  }
  console.log(`✅ ${races.length} courses chargées`);

  // 3. Joueur antoine
  console.log("👤 Ajout du joueur antoine...");
  await set(ref(db, 'players/antoine'), { pseudo: 'antoine', isAdmin: false });
  console.log("✅ Joueur antoine ajouté");

  console.log("🎉 Initialisation terminée !");
  console.log("👉 Recharge la page et sélectionne la saison 2026-2027");
}

initFirebase().catch(console.error);
