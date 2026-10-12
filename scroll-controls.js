(() => {
  const controls = document.createElement('nav');
  controls.className = 'page-scroll-controls';
  controls.hidden = true;
  controls.setAttribute('aria-label', 'Page scroll controls');
  controls.innerHTML = '<button type="button" data-scroll-edge="top" aria-label="Scroll to top" title="Scroll to top">&#8593;</button><button type="button" data-scroll-edge="bottom" aria-label="Scroll to bottom" title="Scroll to bottom">&#8595;</button>';
  document.body.append(controls);

  const top = controls.querySelector('[data-scroll-edge="top"]');
  const bottom = controls.querySelector('[data-scroll-edge="bottom"]');
  const update = () => {
    const root = document.documentElement;
    const max = Math.max(0, root.scrollHeight - window.innerHeight);
    const setHidden = (node, value) => { if (node.hidden !== value) node.hidden = value; };
    setHidden(controls, max < 8);
    setHidden(top, window.scrollY < 8);
    setHidden(bottom, window.scrollY > max - 8);
  };
  top.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
  bottom.addEventListener('click', () => window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'}));
  addEventListener('scroll', update, {passive: true});
  addEventListener('resize', update);
  new MutationObserver(update).observe(document.body, {subtree: true, childList: true, attributes: true, attributeFilter: ['hidden']});
  update();
})();
