/* Eric Tu website v3.2: navigation + publication filters.
   Versioned filename prevents browsers from reusing an old v2 script. */
(() => {
  'use strict';
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const filters = [...document.querySelectorAll('[data-filter]')];
  const input = document.querySelector('[data-search]');
  const items = [...document.querySelectorAll('article.publication-item')];
  const count = document.querySelector('[data-count]');
  const empty = document.querySelector('[data-empty]');
  let active = 'all';

  // Only supporting research resources qualify for this filter.
  // An open manuscript or a related tutorial is not sufficient.
  const researchResourceTypes = new Set([
    'preregistration', 'data', 'code', 'data-code', 'materials', 'measure'
  ]);
  const hasResearchResources = item =>
    [...item.querySelectorAll('.pub-actions a[data-resource-type]')]
      .some(link => researchResourceTypes.has(link.dataset.resourceType));

  const apply = () => {
    if (!items.length) return;
    const term = (input?.value || '').trim().toLocaleLowerCase();
    let visibleCount = 0;
    for (const item of items) {
      const matchesFilter = active === 'all' ||
        (active === 'research-resources' ? hasResearchResources(item) : item.dataset.category === active);
      const matchesSearch = !term || (item.textContent || '').toLocaleLowerCase().includes(term);
      const visible = matchesFilter && matchesSearch;
      item.hidden = !visible;
      if (visible) visibleCount++;
    }
    if (count) count.textContent = `${visibleCount} ${visibleCount === 1 ? 'entry' : 'entries'} shown`;
    if (empty) empty.hidden = visibleCount > 0;
  };

  for (const button of filters) {
    button.addEventListener('click', () => {
      active = button.dataset.filter || 'all';
      // Changing category should show its entries even after a previous search.
      if (input) input.value = '';
      for (const other of filters) {
        const selected = other === button;
        other.classList.toggle('active', selected);
        other.setAttribute('aria-pressed', String(selected));
      }
      apply();
    });
  }
  input?.addEventListener('input', apply);
  apply();

  const copy = document.querySelector('[data-copy-email]');
  copy?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('tueric2@gmail.com');
      copy.textContent = 'Copied to clipboard ✓';
    } catch {
      copy.textContent = 'Copy unavailable: email tueric2@gmail.com';
    }
  });

  if ('IntersectionObserver' in window &&
      !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('anim-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    }), {threshold: .08, rootMargin: '0px 0px -20px 0px'});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
})();
