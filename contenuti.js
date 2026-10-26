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

  // ---------- SEZIONI DEI VIDEO ----------
  // Ogni sezione è una schermata. Dentro "video" metti i lavori di quella sezione.
  // formato: "16:9" (orizzontale) oppure "9:16" (verticale, per i social)
  // youtube: ID o link del video (es. https://www.youtube.com/watch?v=abc123)
  // immagine: un fotogramma in img/ (se vuoto e c'è YouTube, usa la copertina di YouTube)
  // file: in alternativa a YouTube, un mp4 caricato nella cartella video/ (max 100 MB, meglio sotto 50)
  sezioni: [
    {
      id: "essay",
      titolo: "Edit video formato essay",
      nota: "scrittura · montaggio · grafiche",
      parola: "essay",
      formato: "16:9",
      video: [
        {
          titolo: "L'autoritratto nella storia dell'arte",
          tipo: "Video essay",
          durata: "04:00",
          ruolo: "Lavoro individuale: scrittura, montaggio, titoli animati e grafiche",
          descrizione: "L'autoritratto nella storia dell'arte, dalle mani nelle grotte a Velázquez, Picasso, Magritte e Dalì.",
          youtube: "",
          immagine: "img/autoritratto.jpg",
          file: "video/autoritratto.mp4"
        },
        {
          titolo: "La nascita del cinema: Lumière vs Méliès",
          tipo: "Video essay di gruppo",
          durata: "02:56",
          ruolo: "Scrittura, montaggio, voce narrante e direzione artistica",
          descrizione: "Lumière contro Méliès: il cinema che documenta la realtà e quello che la inventa.",
          youtube: "",
          immagine: "img/nascita-cinema.jpg",
          file: "video/nascita-cinema.mp4"
        },
        {
          titolo: "L'arte punk: il Dadaismo",
          tipo: "Video essay di gruppo",
          durata: "02:43",
          ruolo: "Regia, montaggio e direzione artistica",
          descrizione: "Dal Cabaret Voltaire a Duchamp e Hannah Höch, con un'estetica a collage di carta strappata.",
          youtube: "",
          immagine: "img/dadaismo.jpg",
          file: "video/dadaismo.mp4"
        },
        {
          titolo: "Pop! Zuppa, fumetti e quindici minuti di fama",
          tipo: "Video essay di gruppo",
          durata: "03:10",
          ruolo: "Sceneggiatura, montaggio, grafiche e direzione artistica",
          descrizione: "La Pop Art degli anni Cinquanta e Sessanta, da Warhol e Lichtenstein a Oldenburg e alla Scuola di Piazza del Popolo, con un'estetica da serigrafia e fumetto.",
          youtube: "",
          immagine: "img/popart.jpg",
          file: "video/pop-art.mp4"
        }
      ]
    },
    {
      id: "intervista",
      titolo: "Video formato intervista",
      nota: "in lavorazione",
      parola: "talk",
      formato: "16:9",
      video: [
        {
          titolo: "Intervista a Leonardo Graziano",
          tipo: "Intervista",
          durata: "",
          ruolo: "Montaggio",
          descrizione: "Il doppiatore italiano di Sheldon Cooper in The Big Bang Theory e di Naruto. Video in fase di montaggio.",
          youtube: "",
          immagine: ""
        }
      ]
    },
    {
      id: "social",
      titolo: "Video formato social",
      nota: "verticali 9:16 · reel · short",
      parola: "feed",
      formato: "9:16",
      video: [
        { titolo: "Ortigia Comics & Games · Grazie 1000", tipo: "Reel", durata: "00:36", ruolo: "", descrizione: "", youtube: "", immagine: "img/ortigia-grazie-1000.jpg", file: "video/ortigia-grazie-1000.mp4" },
        { titolo: "Ortigia Comics 2026", tipo: "Reel", durata: "", ruolo: "", descrizione: "", youtube: "", immagine: "" },
        { titolo: "Ortigia Comics 2026", tipo: "Reel", durata: "", ruolo: "", descrizione: "", youtube: "", immagine: "" }
      ]
    },
    {
      id: "storyboard",
      titolo: "Storyboard e animatic",
      nota: "dal disegno al montaggio",
      parola: "frame",
      formato: "16:9",
      video: [
        {
          titolo: "Fight Club, storytrailer",
          tipo: "Storyboard e animatic",
          durata: "02:17",
          ruolo: "Storyboard in Storyboarder e montaggio dell'animatic",
          descrizione: "Il trailer di Fight Club ridisegnato inquadratura per inquadratura e montato in split screen accanto all'originale, sincronizzato sul suo audio.",
          youtube: "",
          immagine: "img/fightclub.jpg",
          file: "video/fight-club-storytrailer.mp4"
        }
      ]
    },
    {
      id: "gameplay",
      titolo: "Gameplay",
      nota: "montaggio per YouTube",
      parola: "play",
      formato: "16:9",
      video: [
        {
          titolo: "La \u201cPacifist\u201d Run",
          tipo: "Video YouTube",
          durata: "06:25",
          ruolo: "Montaggio, titoli e sottotitoli",
          descrizione: "Battlefield 6 nei panni di un medico di frontiera, con titoli cinetici in apertura.",
          youtube: "",
          immagine: "img/pacifist.jpg",
          file: "video/pacifist-run.mp4"
        },
        {
          titolo: "La spedizione peggiore di sempre",
          tipo: "Video YouTube",
          durata: "17:50",
          ruolo: "Montaggio, titoli e sottotitoli",
          descrizione: "Una scalata in cooperativa su Peak, dall'aereo precipitato sull'isola fino alla vetta, con il contatore delle cadute in sovrimpressione.",
          youtube: "",
          immagine: "img/peak.jpg",
          file: "video/peak.mp4"
        }
      ]
    }
  ],

  // ---------- FOTOGRAFIA ----------
  // Carica le foto nella cartella foto/ e aggiungile qui, una per riga:
  // { file: "foto/etna.jpg", didascalia: "Valle del Bove, Etna · 2025" },
  // Consiglio: lato lungo 1600-2000 px, sotto 1 MB ciascuna.
  foto: [
    { file: "foto/occhio.jpg", didascalia: "Particolare · 2025" },
    { file: "foto/concerto.jpg", didascalia: "Concerto, Acireale · 2026" },
    { file: "foto/angelo-rijeka.jpg", didascalia: "Halloween, Rijeka · 2025" },
    { file: "foto/etna.jpg", didascalia: "Etna · 2025" },
    { file: "foto/vicolo-gatto.jpg", didascalia: "Figura intera · 2025" },
    { file: "foto/ritratto-luce.jpg", didascalia: "Primo piano · 2025" },
    { file: "foto/tetti-crepuscolo.jpg", didascalia: "Crepuscolo · 2025" },
    { file: "foto/mirino.jpg", didascalia: "Dettaglio · 2025" }
  ],
  // Finché la lista è vuota il sito mostra questi riquadri "in arrivo" (svuota la lista per nasconderli)
  fotoSegnaposto: ["Dettaglio", "Particolare", "Paesaggio", "Primo piano", "Mezzo busto", "Figura intera", "Particolare", "Paesaggio"],

  // ---------- EVENTI DAL VIVO ----------
  eventi: [
    {
      data: "11/2026",
      titolo: "Milan Games Week & Cartoomics 2026 · Milano",
      punti: [
        "In programma dal 27 al 29 novembre, a Fiera Milano",
        "Per conto di RMS"
      ]
    },
    {
      data: "10/2026",
      titolo: "Ortigia Comics 2026 · Siracusa",
      punti: [
        "Videomaker dell'evento: riprese e montaggio dei contenuti video",
        "Edit in più formati, dai reel verticali ai video per il web",
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
