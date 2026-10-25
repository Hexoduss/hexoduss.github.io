(function () {
  const D = window.PORTFOLIO || {};
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const cleanYT = (v) => {
    v = String(v || "").trim();
    const m = v.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{6,})/);
    return m ? m[1] : v;
  };
  const cleanVimeo = (v) => { const m = String(v || "").match(/(\d{5,})/); return m ? m[1] : ""; };
  const placeholder = (title, note) =>
    '<div class="placeholder"><div><strong>' + esc(title) + '</strong><small>' + esc(note) + '</small></div></div>';
  const ytFrame = (id) =>
    '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';

  // contatti
  const c = D.contatti || {};
  document.querySelectorAll("[data-contacts]").forEach((el) => {
    el.innerHTML =
      (c.email ? '<div><b>Email</b><span>' + esc(c.email) + '</span></div>' : "") +
      (c.telefono ? '<div><b>Tel</b><span>' + esc(c.telefono) + '</span></div>' : "");
  });

  // showreel
  const r = D.showreel || {};
  const reel = $("#reel");
  $("#reel-dur").textContent = r.durata || "";
  if (r.youtube) {
    const id = cleanYT(r.youtube);
    reel.innerHTML = '<div class="media" style="position:absolute;inset:0;border:0">' +
      '<img src="https://i.ytimg.com/vi/' + encodeURIComponent(id) + '/maxresdefault.jpg" alt="Showreel">' +
      '<button class="play" aria-label="Guarda lo showreel"></button></div>';
    reel.querySelector("button").addEventListener("click", () => { reel.innerHTML = ytFrame(id); });
  } else if (r.vimeo) {
    reel.innerHTML = '<iframe src="https://player.vimeo.com/video/' + cleanVimeo(r.vimeo) + '?dnt=1" title="Showreel" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
  } else if (r.file) {
    reel.innerHTML = '<video controls playsinline preload="metadata" src="' + esc(r.file) + '"></video>';
  } else {
    reel.innerHTML = placeholder("Showreel", "in arrivo");
  }

  // lavori
  const wl = $("#works");
  (D.lavori || []).forEach((w) => {
    const id = cleanYT(w.youtube);
    const img = w.immagine || (id ? "https://i.ytimg.com/vi/" + encodeURIComponent(id) + "/hqdefault.jpg" : "");
    const el = document.createElement("article");
    el.className = "work";
    let media;
    if (img) {
      media = '<img src="' + esc(img) + '" alt="Fotogramma da ' + esc(w.titolo) + '" loading="lazy">' +
        (id ? '<button class="play" aria-label="Guarda ' + esc(w.titolo) + '"></button>' : "");
    } else {
      media = placeholder(w.titolo, "video in arrivo");
    }
    el.innerHTML =
      '<div class="media">' + media + (w.durata ? '<span class="dur tc">' + esc(w.durata) + '</span>' : "") + '</div>' +
      '<div class="text">' +
        '<span class="chip">' + esc(w.tipo) + '</span>' +
        '<h3>' + esc(w.titolo) + '</h3>' +
        '<p class="role">' + esc(w.ruolo) + '</p>' +
        '<p class="desc">' + esc(w.descrizione) + '</p>' +
      '</div>';
    const btn = el.querySelector("button.play");
    if (btn) btn.addEventListener("click", () => { el.querySelector(".media").innerHTML = ytFrame(id); });
    wl.appendChild(el);
  });

  // foto
  const grid = $("#grid");
  const foto = D.foto || [];
  if (foto.length) {
    foto.forEach((f) => {
      const fig = document.createElement("figure");
      fig.innerHTML = '<div class="frame"><img src="' + esc(f.file) + '" alt="' + esc(f.didascalia || "Fotografia") + '" loading="lazy"></div>' +
        (f.didascalia ? '<figcaption>' + esc(f.didascalia) + '</figcaption>' : "");
      grid.appendChild(fig);
    });
  } else if (D.fotoSegnaposto) {
    for (let i = 0; i < D.fotoSegnaposto; i++) {
      const fig = document.createElement("figure");
      fig.innerHTML = '<div class="frame">' + placeholder("Foto", "in arrivo") + '</div>';
      grid.appendChild(fig);
    }
  } else {
    $("#photos").hidden = true;
  }

  // eventi
  const live = $("#live");
  (D.eventi || []).forEach((e) => {
    const a = document.createElement("article");
    a.innerHTML = '<span class="eyebrow tc">' + esc(e.data) + '</span><h3>' + esc(e.titolo) + '</h3>' +
      '<ul>' + (e.punti || []).map((p) => '<li>' + esc(p) + '</li>').join("") + '</ul>';
    live.appendChild(a);
  });
})();
