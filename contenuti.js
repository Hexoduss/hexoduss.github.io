// ================================================================
//  CONTENUTI DEL PORTFOLIO
//  Questo è l'unico file da modificare per cambiare video e foto.
//  Lascia le virgolette vuote ("") dove non hai ancora il contenuto:
//  il sito mostrerà un riquadro "in arrivo".
// ================================================================

window.PORTFOLIO = {

  // ---------- SHOWREEL ----------
  // Metti UNO dei tre: l'ID di YouTube (la parte dopo "v=" nel link),
  // l'ID di Vimeo (il numero nel link), oppure il nome di un file mp4
  // caricato nella cartella del sito (max 25-50 MB).
  showreel: {
    youtube: "",
    vimeo: "",
    file: "",
    durata: "01:10"
  },

  // ---------- LAVORI ----------
  // youtube: ID del video (es. per https://www.youtube.com/watch?v=abc123 scrivi "abc123")
  // immagine: un fotogramma in img/ (se vuoto e c'è YouTube, usa la copertina di YouTube)
  lavori: [
    {
      titolo: "Ci sono",
      tipo: "Video essay",
      durata: "04:00",
      ruolo: "Lavoro individuale: scrittura, montaggio, titoli animati e grafiche",
      descrizione: "L'autoritratto nella storia dell'arte, dalle mani nelle grotte a Velázquez, Picasso, Magritte e Dalì. Il testo si scrive a tempo con la voce e diventa parte del montaggio.",
      youtube: "",
      immagine: ""
    },
    {
      titolo: "Nasce tutto da qui",
      tipo: "Video essay di gruppo",
      durata: "02:56",
      ruolo: "Scrittura, montaggio, voce narrante e direzione artistica",
      descrizione: "Lumière contro Méliès: il cinema che documenta la realtà e quello che la inventa. Ritmo da video social, materiale d'archivio e qualche gag.",
      youtube: "",
      immagine: ""
    },
    {
      titolo: "Dadaismo",
      tipo: "Video essay di gruppo",
      durata: "02:43",
      ruolo: "Regia, montaggio e direzione artistica",
      descrizione: "Dal Cabaret Voltaire a Duchamp e Hannah Höch, con un'estetica a collage di carta strappata e ritagli di giornale.",
      youtube: "",
      immagine: ""
    },
    {
      titolo: "Fight Club, storytrailer",
      tipo: "Storyboard e animatic",
      durata: "02:17",
      ruolo: "Storyboard in Storyboarder e montaggio dell'animatic",
      descrizione: "Il trailer di Fight Club ridisegnato inquadratura per inquadratura e montato in split screen accanto all'originale, sincronizzato sul suo audio.",
      youtube: "",
      immagine: ""
    },
    {
      titolo: "La “Pacifist” Run",
      tipo: "Video YouTube",
      durata: "06:25",
      ruolo: "Montaggio, titoli e sottotitoli",
      descrizione: "Una partita a Battlefield 6 nei panni di un medico di frontiera. Si apre con titoli cinetici che usano il gameplay come texture delle lettere.",
      youtube: "",
      immagine: ""
    }
  ],

  // ---------- FOTOGRAFIA ----------
  // Carica le foto nella cartella foto/ e aggiungile qui, una per riga:
  // { file: "foto/etna.jpg", didascalia: "Valle del Bove, Etna · 2025" },
  // Consiglio: lato lungo 1600-2000 px, sotto 1 MB ciascuna.
  foto: [
  ],
  // Quanti riquadri "in arrivo" mostrare finché la lista è vuota (0 per nascondere la sezione)
  fotoSegnaposto: 8,

  // ---------- EVENTI DAL VIVO ----------
  eventi: [
    {
      data: "10/2026",
      titolo: "Ortigia Comics 2026 · Siracusa",
      punti: [
        "Montaggio di video in formato social durante l'evento",
        "Servizio fotografico della fiera"
      ]
    },
    {
      data: "05/2026",
      titolo: "Etna Comics 2026 · Catania",
      punti: [
        "Regia audio/video per conto di CS Italia",
        "Grafiche e schermate per gli schermi della fiera",
        "Scene costruite in OBS Studio e mandate sul proiettore per tutte le giornate",
        "Gestione di luci e mixer audio in tempo reale"
      ]
    }
  ],

  // ---------- CONTATTI ----------
  contatti: {
    email: "grassoalessandro1998@gmail.com",
    telefono: "+39 329 935 6461"
  }
};
