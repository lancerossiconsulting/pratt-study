/* Pratt Study — progressive enhancements only.
   1) Tag external links (new tab + "›" marker), per design spec §7.7.
   2) Literature Review section filter — page remains fully usable without JS. */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    if (a.host === location.host) return;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    if (a.classList.contains('cite')) return; // citation superscripts carry their own marker
    var m = document.createElement('span');
    m.className = 'ext';
    m.setAttribute('aria-hidden', 'true');
    m.textContent = '›';
    a.appendChild(m);
  });

  var lit = document.querySelector('[data-lit-review]');
  if (!lit) return;
  var sections = Array.prototype.slice.call(lit.querySelectorAll('[data-lit-section]'));
  if (!sections.length) return;

  var bar = document.createElement('div');
  bar.className = 'lit-filter';
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', 'Filter sources by section');

  function makeButton(label, key) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.addEventListener('click', function () {
      bar.querySelectorAll('button').forEach(function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      sections.forEach(function (s) {
        s.style.display = (key === 'all' || s.getAttribute('data-lit-section') === key) ? '' : 'none';
      });
    });
    return b;
  }

  var all = makeButton('All sources', 'all');
  all.classList.add('active');
  bar.appendChild(all);
  sections.forEach(function (s) {
    bar.appendChild(makeButton(s.getAttribute('data-lit-label'), s.getAttribute('data-lit-section')));
  });
  sections[0].parentNode.insertBefore(bar, sections[0]);
});
