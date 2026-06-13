/* ===========================
   NAYEPANKH FOUNDATION
   Main JavaScript
   =========================== */

// ─── Mobile Menu ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ─── Scroll Fade-In (Intersection Observer) ─────────────────────
const fadeEls = document.querySelectorAll(
  '.pillar, .impact-item, .mission-text, .join-text, .join-form, .story-card'
);
fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));

// ─── Animated Counters ──────────────────────────────────────────
const counters = document.querySelectorAll('.impact-num[data-target]');
let countersStarted = false;

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const update = () => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString('en-IN');
    if (current < target) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('en-IN');
  };
  requestAnimationFrame(update);
}

const impactSection = document.getElementById('impact');
const counterObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !countersStarted) {
    countersStarted = true;
    counters.forEach(animateCounter);
    counterObserver.disconnect();
  }
}, { threshold: 0.3 });

if (impactSection) counterObserver.observe(impactSection);

// ─── Testimonial Slider ─────────────────────────────────────────
const cards = document.querySelectorAll('.story-card');
const dots  = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;

function showStory(index) {
  cards.forEach(c => c.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  cards[index].classList.add('active');
  dots[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  showStory(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % cards.length;
  showStory(current);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    current = i;
    showStory(current);
  });
});

// Auto-advance every 6 seconds
setInterval(() => {
  current = (current + 1) % cards.length;
  showStory(current);
}, 6000);

// ─── Donation Amount Picker ──────────────────────────────────────
const amtBtns   = document.querySelectorAll('.amt-btn');
const customAmt = document.getElementById('customAmt');
const preview   = document.getElementById('donatePreview');
const donateBtn = document.querySelector('.btn-donate');

const impacts = {
  500:  'one month of learning materials for a child',
  1000: 'a full semester of digital literacy training',
  2500: 'mentorship sessions for five students',
  5000: 'an entire year of education support for a child',
};

function updatePreview(amt) {
  const msg = impacts[amt] || `support for ${Math.floor(amt / 100)} children`;
  preview.innerHTML = `₹${Number(amt).toLocaleString('en-IN')} provides <strong>${msg}</strong>.`;
  if (donateBtn) {
    donateBtn.textContent = `Donate ₹${Number(amt).toLocaleString('en-IN')} Now`;
  }
}

amtBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    amtBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    customAmt.value = '';
    updatePreview(parseInt(btn.dataset.amt, 10));
  });
});

customAmt.addEventListener('input', () => {
  const val = parseInt(customAmt.value, 10);
  amtBtns.forEach(b => b.classList.remove('active'));
  if (val && val > 0) updatePreview(val);
  else updatePreview(500);
});

// ─── Volunteer Form ──────────────────────────────────────────────
const volunteerForm = document.getElementById('volunteerForm');
const formMsg = document.getElementById('formMsg');

volunteerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = volunteerForm.querySelector('button[type="submit"]');
  btn.textContent = 'Submitting…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Interest Submitted ✓';
    btn.style.background = '#8DB5A0';
    btn.style.borderColor = '#8DB5A0';
    formMsg.textContent = 'Thank you! Our team will reach out within 3 working days.';
    volunteerForm.reset();
    setTimeout(() => {
      btn.textContent = 'Submit Interest';
      btn.disabled = false;
      btn.style.background = '';
      btn.style.borderColor = '';
      formMsg.textContent = '';
    }, 5000);
  }, 1200);
});

// ─── Smooth active nav highlight on scroll ───────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#0D4F5C' : '';
  });
}, { passive: true });
