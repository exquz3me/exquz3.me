(() => {
  const dove = document.getElementById('dove-drawing');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!dove || !window.Vivus || motion.matches) return;

  let drawing;
  let frame = 0;
  let observer;
  const durationMs = 2710;
  const complete = () => {
    cancelAnimationFrame(frame);
    observer?.disconnect();
    dove.classList.remove('is-drawing');
    dove.classList.add('is-drawn');
  };

  try {
    dove.classList.add('is-drawing');
    drawing = new Vivus(dove, {
      type: 'oneByOne',
      duration: 2710,
      start: 'manual',
      animTimingFunction: Vivus.EASE_OUT,
      forceRender: false,
    }, complete);

    // Vivus counts frames; drive progress by elapsed time for a 2.71s draw
    // at any refresh rate. Vivus applies its easing when tracing each frame.
    const start = () => {
      let started;
      const tick = (now) => {
        started ??= now;
        const progress = Math.min((now - started) / durationMs, 1);
        drawing.setFrameProgress(progress);
        if (progress < 1) frame = requestAnimationFrame(tick);
        else complete();
      };
      frame = requestAnimationFrame(tick);
    };
    observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        start();
      }
    });
    observer.observe(dove);
  } catch {
    complete();
  }

  motion.addEventListener('change', () => {
    if (motion.matches) {
      drawing?.stop().finish();
      complete();
    }
  });
})();
