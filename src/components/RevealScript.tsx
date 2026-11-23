// Deux petits scripts inline pour l'apparition au scroll des éléments .reveal.
//
// 1. RevealInit (tout début du <body>) : ajoute la classe "js" sur <html>, ce qui masque
//    les éléments .reveal (voir globals.css). Sans JavaScript, rien n'est masqué.
// 2. RevealObserver (fin du <body>) : anime chaque élément quand il entre dans l'écran,
//    y compris ceux ajoutés plus tard lors d'une navigation entre pages.
//    En cas de mouvement réduit ou de navigateur trop ancien, tout est affiché directement.

const init = `document.documentElement.classList.add("js");`;

const observer = `(function () {
  var root = document.documentElement;
  if (!("IntersectionObserver" in window) || !Element.prototype.animate ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.remove("js");
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      io.unobserve(el);
      el.animate(
        [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "none" }],
        { duration: 900, delay: Number(el.getAttribute("data-delay")) || 0,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
      );
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  var seen = new WeakSet();
  function scan(node) {
    if (!node.querySelectorAll) return;
    if (node.classList && node.classList.contains("reveal") && !seen.has(node)) { seen.add(node); io.observe(node); }
    node.querySelectorAll(".reveal").forEach(function (el) {
      if (!seen.has(el)) { seen.add(el); io.observe(el); }
    });
  }
  scan(document.body);
  new MutationObserver(function (mutations) {
    mutations.forEach(function (m) { m.addedNodes.forEach(scan); });
  }).observe(document.body, { childList: true, subtree: true });
})();`;

export function RevealInit() {
  return <script dangerouslySetInnerHTML={{ __html: init }} />;
}

export function RevealObserver() {
  return <script dangerouslySetInnerHTML={{ __html: observer }} />;
}
