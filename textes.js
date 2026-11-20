/* ╔══════════════════════════════════════════════════════════════════╗
   ║  DUPLICATOR — TEXTES EN FRANÇAIS ET EN ANGLAIS                     ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║  Seul fichier à modifier pour changer les textes de la borne.     ║
   ║  Il doit rester dans le même dossier que duplicator.html.        ║
   ║                                                                  ║
   ║  fr : textes français / en : textes anglais                      ║
   ║  Pour modifier un texte, remplacez uniquement sa valeur entre     ║
   ║  guillemets dans la langue concernée et gardez les virgules.     ║
   ║  Gardez les noms des propriétés identiques dans les 2 langues.   ║
   ╚══════════════════════════════════════════════════════════════════╝ */

window.TEXTES = {
  fr: {
    /* ---------- 1. PAGE ET TITRE ---------- */
    langue: {
      libelle: "Choisir la langue",
      francais: "Français",
      anglais: "Anglais"
    },
    titrePage: "DUPLICATOR",
    titre: "DUPLICATOR",
    marque: "TM",
    logoAlt: "Logo",
    accueilAria: "Toucher l’écran pour commencer",

    /* ---------- 2. CADRE ---------- */
    cadre: {
      coteGauche: "Cuve 03 — statut : actif",
      coteDroitAvant: "Température ",
      coteDroitApres: " °C"
    },

    /* ---------- 3. RELEVÉS DE MATIÈRE ----------
       Chaque ligne : [ "Nom", quantité, "unité", nb de décimales, remplissage de la jauge en % ] */
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
    boutonRetour: "RETOUR",

    analyse: {
      libelle: "ANALYSE EN COURS..."
    },

    erreurs: {
      vide: {
        titre: "AUCUN OBJET DÉTECTÉ",
        detail: "La cuve est vide. Place un objet dans la machine et réessaie."
      },
      nonDuplicable: {
        titre: "OBJET NON DUPLICABLE",
        detail: "Désolée, la machine ne peut pas reproduire cet objet."
      },
      multiple: {
        titre: "TROP D'OBJETS DÉTECTÉS",
        detail: "Un objet à la fois ! Retire les objets en trop avant de recommencer."
      }
    },

    progression: {
      aria: "Progression de la duplication",
      libelle: "DUPLICATION EN COURS"
    },

    prefixePub: "PUB // ",

    succes: {
      titre: "✦ DUPLICATION TERMINÉE ! ✦",
      ligne1: "Merci de récupérer l'objet dans le bac inférieur.",
      ligne2: "N'oubliez pas l'objet original !"
    },

    /* ---------- 5. BULLE DE DIALOGUE D'EMA ---------- */
    bulle: {
      nom: "EMA //",
      attente: "Prêt à dupliquer ? Appuie sur le bouton !",
      analyse: "Je vérifie le contenu de la cuve...",
      objetDetecte: "Objet identifié ! Je lance la duplication.",
      erreurVide: "Euh... je ne vois rien dans la machine !",
      erreurNonDuplicable: "Impossible de dupliquer cet objet :(",
      erreurMultiple: "Un seul objet à la fois, s'il te plaît !",
      patienter: "Merci de patienter",
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
  },




  

  en: {
    /* ---------- 1. PAGE AND TITLE ---------- */
    langue: {
      libelle: "Choose language",
      francais: "French",
      anglais: "English"
    },
    titrePage: "DUPLICATOR",
    titre: "DUPLICATOR",
    marque: "TM",
    logoAlt: "Logo",
    accueilAria: "Touch the screen to begin",

    /* ---------- 2. FRAME ---------- */
    cadre: {
      coteGauche: "Chamber 03 — status: active",
      coteDroitAvant: "Temperature ",
      coteDroitApres: " °C"
    },

    /* ---------- 3. MATERIAL READINGS ---------- */
    releves: {
      cuveA: {
        titre: "Materials · chamber A",
        lignes: [
          ["Carbon",     18.5, "kg", 1, 72],
          ["Water",      43.2, "L",  1, 90],
          ["Nitrogen",    3.1, "kg", 2, 38],
          ["Calcium",     1.1, "kg", 2, 24],
          ["Phosphorus",  0.8, "kg", 2, 31]
        ]
      },
      cuveB: {
        titre: "Trace elements · chamber B",
        lignes: [
          ["DNA",  0.82, "g", 2, 12],
          ["Iron", 6.4,  "g", 1, 47],
          ["Zinc", 2.3,  "g", 1, 29]
        ]
      }
    },

    /* ---------- 4. MAIN AREA ---------- */
    bouton: "DUPLICATE",
    boutonRetour: "BACK",

    analyse: {
      libelle: "ANALYZING..."
    },

    erreurs: {
      vide: {
        titre: "NO OBJECT DETECTED",
        detail: "The chamber is empty. Place an object inside the machine and try again."
      },
      nonDuplicable: {
        titre: "OBJECT CANNOT BE DUPLICATED",
        detail: "Sorry, this machine can't reproduce that object."
      },
      multiple: {
        titre: "TOO MANY OBJECTS DETECTED",
        detail: "One at a time! Remove the extra objects before trying again."
      }
    },

    progression: {
      aria: "Duplication progress",
      libelle: "DUPLICATION IN PROGRESS"
    },

    prefixePub: "AD // ",

    succes: {
      titre: "✦ DUPLICATION COMPLETE! ✦",
      ligne1: "Please collect your duplicate from the lower tray.",
      ligne2: "And don't forget the original!"
    },

    /* ---------- 5. EMA'S SPEECH BUBBLE ---------- */
    bulle: {
      nom: "EMA //",
      attente: "Ready to duplicate? Just press the button!",
      analyse: "Checking what's inside the chamber...",
      objetDetecte: "Object identified! Starting duplication.",
      erreurVide: "Um... I can't see anything in there!",
      erreurNonDuplicable: "I can't duplicate this object :(",
      erreurMultiple: "One object at a time, please!",
      patienter: "Please stand by",
      termine: "Duplication complete!"
    },

    /* ---------- 6. ADS ---------- */
    pubs: [
      "This duplication is brought to you by the Association of Objects That Never Asked for This.",
      "Upgrade to DUPLICATOR PREMIUM: exactly the same thing, but in gold.",
      "A second object? Your bank account will love it. Your closet, not so much.",
      "Advertisement: 9 out of 10 experts recommend avoiding the tenth.",
      "With DUPLICATOR+, get 200% more material for just 300% of the price.",
      "Coming soon: duplicating vacation days. Legal has asked us to remove this ad.",
      "Enjoy waiting? Discover our collector's edition queueing experiences.",
      "Our machines are tested on objects. None of the objects agreed to comment."
    ]
  }
};
