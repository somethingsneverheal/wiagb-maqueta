// Menú común de la web de WHO IS A GOOD BOY ? (maqueta, títulos, vista 3D y pósters). Cada página lo carga con <script src=".../nav.js">.
(() => {
  const base = document.currentScript.src.replace(/nav\.js.*$/, "");
  const rel = location.href.split(/[?#]/)[0].replace(base, "");
  const items = [["Maqueta", ""], ["Títulos", "titulos/"], ["Vista 3D", "libros/"], ["Pósters", "posters/"]];
  const on = r => r ? rel.startsWith(r) : (rel === "" || rel === "index.html");
  const st = document.createElement("style");
  st.textContent = `@font-face { font-family: Grinder; src: local("MB-RealGrinder"), url(${base}p/MB-Real_Grinder.ttf); }
  .wnav { position: fixed; top: 0; left: 0; right: 0; height: 64px; z-index: 10000; pointer-events: none; font: 10px/1 Helvetica, Arial, sans-serif; letter-spacing: .14em; text-transform: uppercase; }
  .wnav a { pointer-events: auto; text-decoration: none; color: #777; }
  .wnav a:hover, .wnav a.on { color: #d8b45a; }
  .wnav .wlogo { position: absolute; top: 22px; left: 50%; transform: translateX(-50%); font: 20px Grinder, serif; letter-spacing: .04em; color: #ebe1cd; opacity: .85; text-transform: none; white-space: nowrap; }
  .wnav .wlogo:hover { opacity: 1; color: #ebe1cd; }
  .wnav .wlinks { position: absolute; top: 27px; left: 28px; display: flex; gap: 22px; }
  @media (max-width: 760px) { .wnav .wlinks { top: 52px; left: 0; right: 0; justify-content: center; } .wnav { height: 70px; } }`;
  document.head.appendChild(st);
  const n = document.createElement("nav"); n.className = "wnav";
  n.innerHTML = `<a class="wlogo" href="${base}">WHO IS A GOOD BOY ?</a><div class="wlinks">` +
    items.map(([t, r]) => `<a href="${base}${r}" class="${on(r) ? "on" : ""}">${t}</a>`).join("") + "</div>";
  document.body.prepend(n);
})();
