# Portfolio · Alessandro Grasso

Sito statico pubblicato con GitHub Pages.

## Come cambiare i contenuti

Tutto quello che cambia (video, foto, testi dei lavori, eventi) sta in **`contenuti.js`**.

- **Video**: carica il video su YouTube (anche "non in elenco") e incolla l'ID o il link intero nel campo `youtube` del lavoro.
- **Showreel**: stesso discorso nel blocco `showreel` (YouTube o Vimeo).
- **Foto**: carica le immagini nella cartella `foto/` e aggiungile alla lista `foto` con file e didascalia.
- **Copertine**: se vuoi un fotogramma tuo al posto della copertina di YouTube, mettilo in `img/` e scrivilo in `immagine`.

Dopo ogni modifica su GitHub (Add file → Upload files, oppure la matita su `contenuti.js` → Commit changes) il sito si aggiorna da solo in circa un minuto.

## File

- `index.html` – struttura della pagina
- `stile.css` – grafica
- `script.js` – legge `contenuti.js` e costruisce la pagina
- `contenuti.js` – i tuoi contenuti
