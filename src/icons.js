// Loads every .svg in this folder (and subfolders) as raw markup strings
const modules = import.meta.glob('./assets/icons/**/*.svg', {
  as: 'raw',
  eager: true,
});

// Build a nice { name: svgMarkup } map
export const icons = Object.fromEntries(
  Object.entries(modules).map(([path, svg]) => {
    // "./assets/icons/sun.svg" -> "sun"
    const name = path.split('/').pop().replace('.svg', '');
    return [name, svg];
  })
);

/**
 * Helper to inject an icon safely into an element.
 * @param {HTMLElement} el
 * @param {string} name
 * @param {{className?: string, title?: string}} opts
 */
export function mountIcon(el, name, opts = {}) {
  const svg = icons[name];
  if (!svg) {
    console.warn(`[icons] Missing icon: "${name}"`);
    return;
  }

  el.innerHTML = svg;

  const svgEl = el.querySelector('svg');
  if (!svgEl) return;

  if (opts.className) svgEl.setAttribute('class', opts.className);

  // Optional accessibility label
  if (opts.title) {
    // Ensure svg is announced
    svgEl.setAttribute('role', 'img');
    svgEl.setAttribute('aria-label', opts.title);
  } else {
    // Decorative by default
    svgEl.setAttribute('aria-hidden', 'true');
  }
}
