// ============================================================
// SCRIPT D'INITIALISATION FIREBASE — BIATHLON
// fan-club-eric-perrot — Biathlon
//
// Instructions :
// 1. Ouvre biathlon.html avec Live Server
// 2. Copie-colle ce script dans la console (F12)
// 3. Appuie sur Entrée
// ============================================================

// Calendrier CdM biathlon 2026-2027 — courses hommes uniquement
// Source : biathlonlive.com / IBU officiel
const races = [
  // Étape 1 — Kontiolahti (FIN)
  {name:"Kontiolahti", discipline:"Individuel",  date:"2026-11-26", time:"16:10"},
  {name:"Kontiolahti", discipline:"Sprint",      date:"2026-11-29", time:"13:00"},
  // Étape 2 — Hochfilzen (AUT)
  {name:"Hochfilzen",  discipline:"Sprint",      date:"2026-12-04", time:"14:15"},
  {name:"Hochfilzen",  discipline:"Poursuite",   date:"2026-12-05", time:"14:30"},
  // Étape 3 — Annecy-Le Grand Bornand (FRA)
  {name:"Le Grand Bornand", discipline:"Sprint",     date:"2026-12-11", time:"14:15"},
  {name:"Le Grand Bornand", discipline:"Poursuite",  date:"2026-12-12", time:"14:45"},
  {name:"Le Grand Bornand", discipline:"Mass Start", date:"2026-12-13", time:"14:45"},
  // Étape 4 — Pokljuka (SLO)
  {name:"Pokljuka",    discipline:"Sprint",      date:"2027-01-02", time:"14:15"},
  // Étape 5 — Ruhpolding (GER)
  {name:"Ruhpolding",  discipline:"Sprint",      date:"2027-01-09", time:"12:00"},
  {name:"Ruhpolding",  discipline:"Poursuite",   date:"2027-01-10", time:"14:45"},
  // Étape 6 — Antholz-Anterselva (ITA)
  {name:"Antholz",     discipline:"Individuel",  date:"2027-01-14", time:"14:15"},
  {name:"Antholz",     discipline:"Mass Start",  date:"2027-01-17", time:"15:00"},
  // Étape 7 — Nove Mesto (CZE)
  {name:"Nove Mesto",  discipline:"Sprint",      date:"2027-01-22", time:"16:30"},
  {name:"Nove Mesto",  discipline:"Mass Start",  date:"2027-01-24", time:"17:10"},
  // Championnats du Monde — Otepää (EST)
  {name:"CM Otepää",   discipline:"Sprint",      date:"2027-02-12", time:"16:30"},
  {name:"CM Otepää",   discipline:"Poursuite",   date:"2027-02-14", time:"16:00"},
  {name:"CM Otepää",   discipline:"Individuel",  date:"2027-02-17", time:"17:00"},
  {name:"CM Otepää",   discipline:"Mass Start",  date:"2027-02-21", time:"15:45"},
  // Étape 8 — Oberhof (GER)
  {name:"Oberhof",     discipline:"Sprint",      date:"2027-03-04", time:"15:30"},
  {name:"Oberhof",     discipline:"Poursuite",   date:"2027-03-06", time:"13:45"},
  // Étape 9 — Östersund (SWE)
  {name:"Östersund",   discipline:"Individuel",  date:"2027-03-12", time:"16:10"},
  {name:"Östersund",   discipline:"Mass Start",  date:"2027-03-14", time:"17:10"},
  // Étape 10 — Oslo Holmenkollen (NOR)
  {name:"Oslo Holmenkollen", discipline:"Sprint",     date:"2027-03-18", time:"16:30"},
  {name:"Oslo Holmenkollen", discipline:"Poursuite",  date:"2027-03-20", time:"13:30"},
  {name:"Oslo Holmenkollen", discipline:"Mass Start", date:"2027-03-21", time:"13:30"},
];

async function initFirebase() {
  console.log("🚀 Initialisation Firebase Biathlon...");

  const { getDatabase, ref, set, remove, push } =
    await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js");
  const db = getDatabase();

  // 1. Courses 2026-2027
  console.log("🎿 Chargement des courses...");
  await remove(ref(db, 'races'));
  for (const r of races) {
    await push(ref(db, 'races'), {
      ...r,
      season:  '2026-2027',
      status:  'upcoming',
      result:  null,
    });
  }
  console.log(`✅ ${races.length} courses chargées`);

  // 2. Barème par défaut
  console.log("📊 Chargement du barème...");
  await set(ref(db, 'scoring'), {
    coef:      [10, 9, 8, 7, 6, 5],
    precision: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  });
  console.log("✅ Barème chargé");

  console.log("🎉 Initialisation terminée !");
  console.log("👉 Recharge la page et sélectionne la saison 2026-2027");
}

initFirebase().catch(console.error);
