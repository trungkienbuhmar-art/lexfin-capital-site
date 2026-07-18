// ============================================================
// LexFin Capital — client interactions
// ============================================================
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduced) document.documentElement.classList.add('reduce-motion');

const NAV_H = 74;

/* ---------- Nav: transparent / scrolled(dark) / light ---------- */
(function nav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const isLight = (el) => {
    let n = el;
    while (n && n !== document.body) {
      if (n.classList && (n.classList.contains('sec-light') || n.classList.contains('sec-cream'))) return true;
      if (n.classList && (n.classList.contains('sec-dark') || n.classList.contains('sec-deep') || n.classList.contains('hero'))) return false;
      n = n.parentElement;
    }
    return false;
  };
  const update = () => {
    if (window.scrollY < 40) {
      nav.classList.add('at-top');
      nav.classList.remove('scrolled', 'light');
      return;
    }
    nav.classList.remove('at-top');
    const probe = document.elementFromPoint(window.innerWidth / 2, NAV_H + 8);
    if (probe && isLight(probe)) {
      nav.classList.add('light');
      nav.classList.remove('scrolled');
    } else {
      nav.classList.add('scrolled');
      nav.classList.remove('light');
    }
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
})();

/* ---------- Mobile menu ---------- */
(function mobileMenu() {
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob');
  if (!ham || !mob) return;
  const close = () => {
    mob.classList.remove('open');
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
    mob.setAttribute('aria-hidden', 'true');
  };
  ham.addEventListener('click', () => {
    const open = mob.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', String(open));
    mob.setAttribute('aria-hidden', String(!open));
  });
  mob.querySelectorAll('[data-close]').forEach((a) => a.addEventListener('click', close));
})();

/* ---------- Gold particles ---------- */
(function particles() {
  const c = document.getElementById('particles');
  if (!c || reduced) return;
  const ctx = c.getContext('2d');
  let W, H, P = [];
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const size = () => {
    W = c.width = c.offsetWidth * dpr;
    H = c.height = c.offsetHeight * dpr;
  };
  size();
  addEventListener('resize', size);
  for (let i = 0; i < 46; i++)
    P.push({ x: Math.random(), y: Math.random(), r: (Math.random() * 1.6 + 0.4) * dpr, s: Math.random() * 0.0004 + 0.0001, o: Math.random() * 0.5 + 0.15 });
  (function draw() {
    ctx.clearRect(0, 0, W, H);
    P.forEach((p) => {
      p.y -= p.s;
      if (p.y < 0) p.y = 1;
      ctx.beginPath();
      ctx.arc(p.x * W, p.y * H, p.r, 0, 7);
      ctx.fillStyle = `rgba(200,168,75,${p.o})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  })();
})();

/* ---------- Report card fill ---------- */
function fireCard() {
  const prog = document.getElementById('prog');
  if (prog) prog.style.width = '95%';
  document.querySelectorAll('.rc-bar').forEach((b, i) =>
    setTimeout(() => (b.style.transform = 'scaleY(1)'), 150 + i * 110)
  );
}

/* ---------- Hero: vault scrub + brand reveal ---------- */
(function hero() {
  const heroContent = document.getElementById('heroContent');
  const stage = document.getElementById('vaultStage');
  if (!heroContent) return;

  if (reduced) {
    heroContent.style.visibility = 'visible';
    heroContent.style.opacity = '1';
    fireCard();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const vid = document.getElementById('vaultVideo');
  let vidDur = 8;

  const build = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stage, start: 'top top', end: '+=3400',
        scrub: 0.6, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
      },
    });
    const scrub = { t: 0 };
    tl.to(scrub, {
        t: 1, ease: 'none', duration: 5,
        onUpdate: () => { if (vid && vid.readyState >= 2) vid.currentTime = Math.min(scrub.t * vidDur, vidDur - 0.05); },
      }, 0)
      .to('#vaultHint', { opacity: 0, duration: 0.4 }, 0.8)
      .fromTo('#brandMark', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, ease: 'power2.out', duration: 1 }, 3.0)
      .fromTo('.bn-lex', { opacity: 0, letterSpacing: '0.4em' }, { opacity: 1, letterSpacing: '0.02em', ease: 'power2.out', duration: 1 }, 3.7)
      .fromTo('.bn-cap', { opacity: 0, y: 16 }, { opacity: 1, y: 0, ease: 'power2.out', duration: 0.8 }, 4.2)
      .to('#veil', { opacity: 1, ease: 'power1.inOut', duration: 1.3 }, 4.9)
      .to('#brandReveal', { opacity: 0, scale: 1.07, ease: 'power1.in', duration: 1 }, 5.1)
      .set(heroContent, { visibility: 'visible' }, 5.8)
      .fromTo(heroContent, { opacity: 0, y: 42 }, { opacity: 1, y: 0, ease: 'power2.out', duration: 1.6, onStart: fireCard }, 6.0);
  };

  // Build the pin/reveal timeline immediately (currentTime scrub is guarded by readyState).
  build();
  // Defer the heavy video fetch until after first paint so it never competes with LCP.
  // The poster stays visible until the video has buffered enough to scrub.
  if (vid) {
    vid.addEventListener('loadedmetadata', () => { vidDur = vid.duration || 8; ScrollTrigger.refresh(); });
    const startVideo = () => vid.load();
    if (document.readyState === 'complete') setTimeout(startVideo, 200);
    else addEventListener('load', () => setTimeout(startVideo, 200), { once: true });
  }
  addEventListener('load', () => ScrollTrigger.refresh(), { once: true });

  /* Generic scroll reveal */
  gsap.utils.toArray('.r').forEach((el) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
})();

/* ---------- Reduced-motion reveal fallback ---------- */
if (reduced) {
  document.querySelectorAll('.r').forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
}

/* ---------- Counters ---------- */
(function counters() {
  const els = document.querySelectorAll('.counter');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const t = +e.target.dataset.t, d = 1400, s = performance.now();
      (function step(now) {
        const p = Math.min((now - s) / d, 1);
        e.target.textContent = Math.round(t * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      })(s);
    });
  }, { threshold: 0.4 });
  els.forEach((el) => io.observe(el));
})();

/* ---------- Modals (service + insights) ---------- */
(function modals() {
  let lastFocus = null;
  const open = (id) => {
    const m = document.getElementById(id);
    if (!m) return;
    lastFocus = document.activeElement;
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
    const close = m.querySelector('[data-modal-close],[data-ins-close]');
    if (close) close.focus();
  };
  const closeAll = () => {
    document.querySelectorAll('.modal-overlay.open, .ins-modal-overlay.open').forEach((m) => m.classList.remove('open'));
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  document.querySelectorAll('[data-modal-open]').forEach((btn) =>
    btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); open(btn.getAttribute('data-modal-open')); })
  );
  document.querySelectorAll('[data-ins-open]').forEach((btn) =>
    btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); open(btn.getAttribute('data-ins-open')); })
  );
  document.querySelectorAll('[data-modal-close],[data-ins-close]').forEach((btn) =>
    btn.addEventListener('click', (e) => { e.preventDefault(); closeAll(); })
  );
  // click backdrop
  document.querySelectorAll('.modal-overlay, .ins-modal-overlay').forEach((ov) =>
    ov.addEventListener('click', (e) => { if (e.target === ov) closeAll(); })
  );
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
})();

/* ---------- Contact form → n8n webhook ---------- */
(function contactForm() {
  const form = document.getElementById('lead-form');
  if (!form) return;
  const section = document.getElementById('contact');
  const webhook = section?.dataset.webhook;
  const btn = document.getElementById('cf-btn');
  const msg = document.getElementById('cf-msg');
  const nameEl = document.getElementById('cf-name');
  const phoneEl = document.getElementById('cf-phone');
  const needEl = document.getElementById('cf-need');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    const need = needEl.value;
    if (!name || !phone || !need) {
      msg.style.color = 'var(--yellow)';
      msg.textContent = 'Vui lòng điền đầy đủ họ tên, số điện thoại và nhu cầu.';
      (!name ? nameEl : !phone ? phoneEl : needEl).focus();
      return;
    }
    btn.disabled = true;
    const orig = btn.innerHTML;
    btn.textContent = 'Đang gửi...';
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ho_ten: name, so_dien_thoai: phone, nhu_cau: need,
          contact_type: 'lead_website', nguon: 'astro-vault-v2',
        }),
      });
      if (!res.ok) throw new Error();
      msg.style.color = 'var(--g300)';
      msg.textContent = 'Đã nhận hồ sơ. LexFin sẽ phản hồi trong 24 giờ làm việc.';
      form.reset();
    } catch (_) {
      msg.style.color = 'var(--red)';
      msg.textContent = 'Gửi chưa thành công — vui lòng gọi trực tiếp +84 977 290 770.';
    }
    btn.disabled = false;
    btn.innerHTML = orig;
  });
})();
