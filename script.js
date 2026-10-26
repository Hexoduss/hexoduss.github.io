(function () {
  const D = window.PORTFOLIO || {};
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cleanYT = (v) => { v = String(v || "").trim(); const m = v.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{6,})/); return m ? m[1] : v; };
  const cleanVimeo = (v) => { const m = String(v || "").match(/(\d{5,})/); return m ? m[1] : ""; };
  const placeholder = (title, note) => '<div class="placeholder"><div><strong>' + esc(title) + '</strong><small>' + esc(note) + '</small></div></div>';
  const ytFrame = (id) => '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';

  // ---------- contatti ----------
  const c = D.contatti || {};
  $$("[data-contacts]").forEach((el) => {
    el.innerHTML = (c.email ? '<div><b>Email</b><span>' + esc(c.email) + '</span></div>' : "") +
      (c.telefono ? '<div><b>Tel</b><span>' + esc(c.telefono) + '</span></div>' : "");
  });

  // ---------- showreel ----------
  const r = D.showreel || {};
  const reel = $("#reel");
  $("#reel-dur").textContent = r.durata ? r.durata + " min" : "";
  if (r.youtube) {
    const id = cleanYT(r.youtube);
    reel.innerHTML = '<div class="media" style="position:absolute;inset:0;border:0;box-shadow:none;transform:none;opacity:1">' +
      '<img src="https://i.ytimg.com/vi/' + encodeURIComponent(id) + '/maxresdefault.jpg" alt="Showreel">' +
      '<button class="play" aria-label="Guarda lo showreel"></button></div>';
    $("button", reel).addEventListener("click", () => { reel.innerHTML = ytFrame(id); });
  } else if (r.vimeo) {
    reel.innerHTML = '<iframe src="https://player.vimeo.com/video/' + cleanVimeo(r.vimeo) + '?dnt=1" title="Showreel" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
  } else if (r.file) {
    reel.innerHTML = '<video controls playsinline preload="metadata" src="' + esc(r.file) + '"></video>';
  } else {
    reel.innerHTML = placeholder("Showreel", "in arrivo");
  }

  // ---------- sezioni video: una schermata per formato ----------
  const sections = D.sezioni || [];
  const holder = $("#works");
  const decoSets = [
    '<svg class="deco g-x red" data-depth="0.3" style="right:6vw;top:10vh"><use href="#g-x"/></svg><div class="splat" data-color="teal" data-n="45" data-depth="0.2" style="left:2vw;bottom:2vh"></div>',
    '<svg class="deco g-zig teal" data-depth="0.25" style="left:6vw;top:8vh"><use href="#g-zig"/></svg><div class="halftone" data-depth="0.12" style="right:4vw;bottom:6vh"></div>',
    '<svg class="deco g-star red" data-depth="0.3" style="right:8vw;bottom:10vh"><use href="#g-star"/></svg><svg class="deco g-drips bone" data-depth="0.1" style="left:10vw;top:0"><use href="#g-drips"/></svg>',
    '<svg class="deco g-circle teal" data-depth="0.15" style="right:-22vw;bottom:2vh"><use href="#g-circle"/></svg><div class="splat" data-color="red" data-n="55" data-depth="0.25" style="left:40vw;top:1vh"></div>'
  ];
  const card = (w, vertical) => {
    const id = cleanYT(w.youtube);
    const img = w.immagine || (id ? "https://i.ytimg.com/vi/" + encodeURIComponent(id) + "/hqdefault.jpg" : "");
    const el = document.createElement("article");
    el.className = "vcard fx" + (vertical ? " vertical" : "");
    const playable = id || w.file;
    const media = img
      ? '<img src="' + esc(img) + '" alt="Fotogramma da ' + esc(w.titolo) + '" loading="lazy">' + (playable ? '<button class="play" aria-label="Guarda ' + esc(w.titolo) + '"></button>' : "")
      : placeholder(vertical ? w.tipo || "Video" : "Video", "in arrivo");
    el.innerHTML =
      '<div class="media">' + media + (w.durata ? '<span class="dur">' + esc(w.durata) + '</span>' : "") + '</div>' +
      '<div class="vtext">' +
        (w.tipo && !vertical ? '<span class="chip">' + esc(w.tipo) + '</span>' : "") +
        '<h3>' + esc(w.titolo) + '</h3>' +
        (w.ruolo ? '<p class="role">' + esc(w.ruolo) + '</p>' : "") +
        (w.descrizione ? '<p class="desc">' + esc(w.descrizione) + '</p>' : "") +
      '</div>';
    const btn = $("button.play", el);
    if (btn) btn.addEventListener("click", () => {
      const m = $(".media", el);
      if (id) { m.innerHTML = ytFrame(id); return; }
      m.innerHTML = '<video controls autoplay playsinline preload="auto" src="' + esc(w.file) + '"' + (img ? ' poster="' + esc(img) + '"' : "") + '></video>';
      // un solo video alla volta
      const v = $("video", m);
      $$("video").forEach((o) => { if (o !== v) o.pause(); });
    });
    return el;
  };
  sections.forEach((sec, i) => {
    const vids = sec.video || [];
    const vertical = sec.formato === "9:16";
    const s = document.createElement("section");
    const layout = vertical ? "is-vertical" : vids.length === 1 ? "is-single" : "is-" + Math.min(vids.length, 3);
    s.className = "screen vsec " + layout;
    s.id = sec.id || "sezione-" + (i + 1);
    s.dataset.nav = s.id;
    s.innerHTML =
      '<div class="spray-word' + (i % 2 ? "" : " right") + '" aria-hidden="true">' + esc(sec.parola || "edit") + '</div>' +
      '<div aria-hidden="true">' + decoSets[i % decoSets.length] + '</div>' +
      '<div class="inner">' +
        '<div class="head"><h2 class="fx">' + esc(sec.titolo) + '</h2>' + (sec.nota ? '<span class="marker fx">' + esc(sec.nota) + '</span>' : "") + '</div>' +
        '<div class="vgrid"></div>' +
      '</div>';
    const grid = $(".vgrid", s);
    vids.forEach((w, k) => { const c = card(w, vertical); c.style.setProperty("--r", (k % 2 ? 1 : -1) * (0.6 + (k % 3) * 0.4) + "deg"); grid.appendChild(c); });
    holder.appendChild(s);
  });
  holder.replaceWith(...holder.children);
  $$(".vgrid").forEach((g) => Array.from(g.children).forEach((c, k) => { c.style.transitionDelay = (150 + k * 110) + "ms"; }));

  // ---------- foto ----------
  const grid = $("#grid");
  const foto = D.foto || [];
  const tilt = () => ((Math.random() * 4) - 2).toFixed(2) + "deg";
  const fig = (inner, cap) => {
    const f = document.createElement("figure");
    f.style.setProperty("--r", tilt());
    f.innerHTML = '<div class="frame">' + inner + '</div>' + (cap ? '<figcaption>' + esc(cap) + '</figcaption>' : "");
    return f;
  };
  if (foto.length) {
    foto.slice(0, 8).forEach((p) => grid.appendChild(fig('<img src="' + esc(p.file) + '" alt="' + esc(p.didascalia || "Fotografia") + '" loading="lazy">', p.didascalia)));
  } else if (D.fotoSegnaposto && D.fotoSegnaposto.length) {
    D.fotoSegnaposto.slice(0, 8).forEach((lab) => grid.appendChild(fig(placeholder(lab, "in arrivo"))));
  } else {
    $("#foto").hidden = true;
  }
  $$(".grid figure").forEach((f, i) => { f.style.transitionDelay = (i * 70) + "ms"; });

  // ---------- eventi ----------
  const live = $("#live-list");
  (D.eventi || []).forEach((e, i) => {
    const a = document.createElement("article");
    a.className = "fx";
    a.innerHTML = '<span class="when">' + esc(e.data) + '</span><h3>' + esc(e.titolo) + '</h3><ul>' + (e.punti || []).map((p) => '<li>' + esc(p) + '</li>').join("") + '</ul>';
    live.appendChild(a);
  });

  // ---------- spruzzi di vernice (generati) ----------
  const COL = { red: "#e8452c", teal: "#3fb89e", bone: "#e8e0cf" };
  $$(".splat").forEach((el, k) => {
    const n = +el.dataset.n || 40, col = COL[el.dataset.color] || COL.red;
    let svg = '<svg viewBox="-100 -100 200 200" aria-hidden="true">';
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const d = Math.pow(Math.random(), 1.8) * 95;
      const rr = Math.max(.6, (1 - d / 100) * (Math.random() * 7 + 1));
      svg += '<circle cx="' + (Math.cos(a) * d).toFixed(1) + '" cy="' + (Math.sin(a) * d).toFixed(1) + '" r="' + rr.toFixed(1) +
        '" fill="' + col + '" fill-opacity="' + (0.35 + Math.random() * 0.5).toFixed(2) + '" style="transition-delay:' + (300 + Math.round(d * 6)) + 'ms"/>';
    }
    svg += '<circle cx="0" cy="0" r="16" fill="' + col + '" fill-opacity=".85" style="transition-delay:250ms"/></svg>';
    el.innerHTML = svg;
  });

  // ---------- macchie sul muro (canvas, disegnato una volta) ----------
  const cv = $(".stains");
  const paintWall = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const W = cv.width = Math.round(innerWidth * dpr), H = cv.height = Math.round(innerHeight * dpr);
    const g = cv.getContext("2d");
    g.clearRect(0, 0, W, H);
    const rnd = (a, b) => a + Math.random() * (b - a);
    // macchie morbide
    for (let i = 0; i < 26; i++) {
      const x = rnd(0, W), y = rnd(0, H), rad = rnd(80, 380) * dpr;
      const gr = g.createRadialGradient(x, y, 0, x, y, rad);
      const light = Math.random() < .5;
      gr.addColorStop(0, light ? "rgba(255,255,255,.035)" : "rgba(0,0,0,.25)");
      gr.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = gr; g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
    }
    // nebbia di spray colorata
    [["232,69,44", .05], ["63,184,158", .045]].forEach(([rgb, al]) => {
      for (let k = 0; k < 2; k++) {
        const cx = rnd(0, W), cy = rnd(0, H), spread = rnd(120, 260) * dpr;
        for (let i = 0; i < 2600; i++) {
          const a = Math.random() * Math.PI * 2, d = Math.pow(Math.random(), 2) * spread;
          g.fillStyle = "rgba(" + rgb + "," + (al * rnd(.4, 1.6)).toFixed(3) + ")";
          g.fillRect(cx + Math.cos(a) * d, cy + Math.sin(a) * d, dpr, dpr);
        }
      }
    });
    // puntini e graffi
    for (let i = 0; i < 2200; i++) {
      g.fillStyle = Math.random() < .5 ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.35)";
      const s = rnd(.5, 2.2) * dpr; g.fillRect(rnd(0, W), rnd(0, H), s, s);
    }
    g.lineCap = "round";
    for (let i = 0; i < 26; i++) {
      g.strokeStyle = "rgba(255,255,255," + rnd(.015, .05).toFixed(3) + ")";
      g.lineWidth = rnd(.5, 1.4) * dpr;
      const x = rnd(0, W), y = rnd(0, H), len = rnd(40, 240) * dpr, ang = rnd(-.6, .6) + (Math.random() < .5 ? 0 : Math.PI / 2);
      g.beginPath(); g.moveTo(x, y);
      g.quadraticCurveTo(x + Math.cos(ang) * len / 2 + rnd(-10, 10), y + Math.sin(ang) * len / 2 + rnd(-10, 10), x + Math.cos(ang) * len, y + Math.sin(ang) * len);
      g.stroke();
    }
  };
  paintWall();
  let rz; addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(paintWall, 250); });

  // ---------- schermata attiva + puntini ----------
  const screens = $$(".screen").filter((s) => !s.hidden);
  const dots = $$(".dots a");
  const setNav = (key) => dots.forEach((d) => d.classList.toggle("on", d.dataset.for === key));
  if ("IntersectionObserver" in window) {
    // animazioni: partono appena la schermata entra (15%) e si azzerano solo quando è uscita del tutto,
    // così le scritte non vengono tagliate mentre si passa da una schermata all'altra
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.intersectionRatio >= 0.15) e.target.classList.add("on");
        else if (!e.isIntersecting && !reduce) e.target.classList.remove("on");
      });
    }, { threshold: [0, 0.15] });
    screens.forEach((s) => io.observe(s));
    // puntini: segue la schermata che occupa più spazio
    const ioNav = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setNav(e.target.dataset.nav); });
    }, { threshold: 0.5 });
    screens.forEach((s) => ioNav.observe(s));
    // le schermate più alte dello schermo (telefono) si attivano anche solo entrando
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting && e.target.offsetHeight > innerHeight * 1.3) e.target.classList.add("on"); });
    }, { threshold: 0.15 });
    screens.forEach((s) => io2.observe(s));
  } else {
    screens.forEach((s) => s.classList.add("on"));
  }
  // la prima schermata parte subito
  requestAnimationFrame(() => screens[0] && screens[0].classList.add("on"));

  // ---------- parallasse dei segni ----------
  if (!reduce) {
    const layers = $$("[data-depth]");
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = innerHeight;
      layers.forEach((el) => {
        const sec = el.closest(".screen");
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.bottom < -vh || rect.top > vh * 2) return;
        const off = (rect.top + rect.height / 2 - vh / 2);
        el.style.translate = "0 " + (off * parseFloat(el.dataset.depth)).toFixed(1) + "px";
      });
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }
})();
