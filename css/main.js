/* =============================================
   KISHOR REGMI — ACCA | FINANCIAL EXPERT
   Main JavaScript v2.0
   ============================================= */

/* ---- MOBILE MENU HELPERS ---- */
function hamBurger(){
  const isExpandedAttr =document.getElementById('navBurger').getAttribute('aria-expanded');
  if (isExpandedAttr==='true') {
    console.log('1');
    closeMobileMenu();
  }else{
    console.log('2');
    openMobileMenu();
  }
}
function openMobileMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.classList.add('menu-open');
  const btn = document.getElementById('navBurger');
  if (btn) btn.setAttribute('aria-expanded', 'true');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.classList.remove('menu-open');
  const btn = document.getElementById('navBurger');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

/* ---- LOADER ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1800);
});

/* ---- CUSTOM CURSOR (desktop only) ---- */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

if (cursor && ring) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  (function anim() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursor.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(anim);
  })();

  document.querySelectorAll('a, button, .service-card, .timeline-item, .edu-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.opacity = '.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '.6';
    });
  });
}

/* ---- NAVBAR SCROLL STATE ---- */
const nav = document.getElementById('navbar');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ---- REVEAL ON SCROLL ---- */
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = `${(i % 3) * 0.1}s`;
      e.target.classList.add('visible');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ---- SKILL BAR ANIMATION ---- */
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(f => {
        const w = parseFloat(f.style.getPropertyValue('--w') || 0.8);
        f.style.transform = `scaleX(${w})`;
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const sl = document.querySelector('.skills-list');
if (sl) skillObs.observe(sl);

/* ---- COUNT-UP ANIMATION ---- */
function animCount(el, target, dur = 1600) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    el.textContent = Math.floor(ease * target);
    if (p < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target + '+';
    }
  }
  requestAnimationFrame(step);
}

const statsObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(el => {
        animCount(el, parseInt(el.dataset.count));
      });
      statsObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

const st = document.getElementById('stats');
if (st) statsObs.observe(st);

/* ---- SMOOTH SCROLL ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");

  if (!form) return;

  form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const formData = new FormData(form);

    try {

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {

        showToast("Thank you! Your message has been sent.", "success");

        form.reset();

      } else {

        showToast("Something went wrong.", "error");

      }

    } catch (error) {

      console.error(error);

      showToast("An error occurred.", "error");

    }

  });

  function showToast(message, type) {

    toast.textContent = message;

    toast.className = `show ${type}`;

    setTimeout(() => {
      toast.className = "";
    }, 4000);

  }

});
