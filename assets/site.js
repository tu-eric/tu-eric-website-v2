(() => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); }));
    document.addEventListener('keydown', e => { if(e.key==='Escape'){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');} });
  }
  const filters = document.querySelectorAll('[data-filter]');
  const input = document.querySelector('[data-search]');
  const items = Array.from(document.querySelectorAll('.publication-item'));
  const count = document.querySelector('[data-count]');
  let active = 'all';
  const apply = () => {
    let n = 0;
    const term = (input?.value || '').trim().toLowerCase();
    items.forEach(item => {
      const typeMatch = active === 'all' || item.dataset.category === active;
      const searchMatch = !term || (item.textContent || '').toLowerCase().includes(term);
      const visible = typeMatch && searchMatch;
      item.hidden = !visible;
      if (visible) n++;
    });
    if(count) count.textContent = `${n} ${n===1?'publication':'publications'} shown`;
  };
  filters.forEach(button => button.addEventListener('click', () => {
    active = button.dataset.filter;
    filters.forEach(b => { b.classList.toggle('active', b===button); b.setAttribute('aria-pressed',String(b===button)); });
    apply();
  }));
  input?.addEventListener('input',apply);
  if(items.length) apply();
  const copy = document.querySelector('[data-copy-email]');
  copy?.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText('tueric2@gmail.com'); copy.textContent='Copied to clipboard ✓'; }
    catch { copy.textContent='Copy unavailable — email: tueric2@gmail.com'; }
  });
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('anim-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}}), {threshold:.08,rootMargin:'0px 0px -20px 0px'});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
})();
