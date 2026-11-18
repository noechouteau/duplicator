/* ╔══════════════════════════════════════════════════════════════════╗
   ║  DUPLICATOR — TOUS LES TEXTES DE LA BORNE                        ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║  Ce fichier est le SEUL à modifier pour changer un texte.        ║
   ║  Il doit rester dans le même dossier que duplicator.html.        ║
   ║                                                                  ║
   ║  RÈGLES :                                                        ║
   ║   • Ne modifiez que ce qui est entre guillemets "..."            ║
   ║   • Gardez les virgules à la fin de chaque ligne                 ║
   ║   • Pour un guillemet dans un texte, écrivez \"                  ║
   ╚══════════════════════════════════════════════════════════════════╝ */

window.TEXTES = {

  /* ---------- 1. PAGE ET TITRE ---------- */
  titrePage: "DUPLICATOR",          // onglet du navigateur
  titre: "DUPLICATOR",              // grand titre de l'écran d'accueil
  marque: "TM",                     // petit « TM » à côté du titre
  logoAlt: "Logo",                  // description du logo (accessibilité)
  accueilAria: "Toucher l’écran pour commencer",   // lu par les lecteurs d'écran

  /* ---------- 2. CADRE (textes verticaux sur les côtés) ---------- */
  cadre: {
    coteGauche: "Cuve 03 — statut : actif",
    coteDroitAvant: "Température ",   // texte AVANT la valeur (la valeur est automatique)
    coteDroitApres: " °C"             // texte APRÈS la valeur
  },

  /* ---------- 3. RELEVÉS DE MATIÈRE (deux cadres en pointillés) ----------
     Chaque ligne : [ "Nom", quantité, "unité", nb de décimales, remplissage de la jauge en % ]  */
  releves: {
    cuveA: {
      titre: "Matières · cuve A",
      lignes: [
        ["Carbone",   18.5, "kg", 1, 72],
        ["Eau",       43.2, "L",  1, 90],
        ["Azote",      3.1, "kg", 2, 38],
        ["Calcium",    1.1, "kg", 2, 24],
        ["Phosphore",  0.8, "kg", 2, 31]
      ]
    },
    cuveB: {
      titre: "Traces · cuve B",
      lignes: [
        ["ADN",  0.82, "g", 2, 12],
        ["Fer",  6.4,  "g", 1, 47],
        ["Zinc", 2.3,  "g", 1, 29]
      ]
    }
  },

  /* ---------- 4. ZONE CENTRALE ---------- */
  bouton: "DUPLIQUER",

  progression: {
    aria: "Progression de la duplication",   // accessibilité
    libelle: "DUPLICATION EN COURS"
  },

  prefixePub: "PUB // ",            // début de chaque message publicitaire

  succes: {
    titre: "✦ DUPLICATION TERMINÉE ! ✦",
    ligne1: "Merci de récupérer l'objet dans le bac inférieur.",
    ligne2: "N'oubliez pas l'objet original !"
  },

  /* ---------- 5. BULLE DE DIALOGUE D'EMA ---------- */
  bulle: {
    nom: "EMA //",                              // étiquette en haut de la bulle
    attente: "En attente d'un objet à dupliquer",   // écran vide
    objetDetecte: "Objet détecté · prêt pour la duplication !",
    objetRefuse: "Objet inséré non clonable :(",
    patienter: "Merci de patienter",            // pendant la duplication
    termine: "Duplication terminée !"
  },

  /* ---------- 6. MESSAGES PUBLICITAIRES ----------
     Ils défilent au hasard pendant la duplication.
     Ajoutez, supprimez ou modifiez des lignes librement (minimum 2). */
  pubs: [
    "Cette duplication vous est présentée par l'Association des Objets Qui N'Ont Rien Demandé.",
    "Passez à DUPLICATOR PREMIUM : exactement la même chose, mais en doré.",
    "Un deuxième objet ? Votre banquier va adorer. Votre placard, moins.",
    "Publicité : 9 experts sur 10 recommandent d'éviter le dixième.",
    "Avec DUPLICATOR+, obtenez 200 % de matière pour seulement 300 % du prix.",
    "Bientôt : la duplication de RTT. Notre service juridique nous demande de retirer cette annonce.",
    "Vous aimez patienter ? Découvrez notre gamme de files d'attente collector.",
    "Nos machines sont testées sur des objets. Aucun objet n'a souhaité témoigner."
  ]
};
