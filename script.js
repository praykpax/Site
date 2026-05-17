/* ============================================================
   Yılanlı-Aybakan Hukuki Danışmanlık — script.js v2.0
   ============================================================ */

/* === INIT ============================================== */
document.addEventListener('DOMContentLoaded', function () {
  initHamburger();
  initFAQ();
  initAccordion();
  initKararAccordion();
  initMakaleFiltre();
  animateCounters();
  checkLoginStatus();

  var loginForm = document.getElementById('loginForm');
  if (loginForm) loginForm.addEventListener('submit', handleLogin);
});

window.addEventListener('load', createFloatingButtons);

/* === HAMBURGER MENU ==================================== */
function initHamburger() {
  const toggle     = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('navMobile');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menüyü aç');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menüyü aç');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });
}

/* === FLOATING BUTTONS ================================== */
function createFloatingButtons() {
  if (document.querySelector('.floating-buttons')) return;
  var wrap = document.createElement('div');
  wrap.className = 'floating-buttons';
  wrap.innerHTML =
    '<a href="https://wa.me/905469673641?text=Merhaba%2C%20hukuki%20deste%C4%9Fe%20ihtiyac%C4%B1m%20var."' +
    ' target="_blank" rel="noopener noreferrer"' +
    ' class="float-btn float-wa"' +
    ' aria-label="WhatsApp ile mesaj gönderin">💬</a>' +
    '<a href="tel:+905469673641"' +
    ' class="float-btn float-phone"' +
    ' aria-label="Hemen arayın">📞</a>';
  document.body.appendChild(wrap);
}

/* === FAQ =============================================== */
function initFAQ() {
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    var btn   = item.querySelector('.faq-btn');
    var panel = item.querySelector('.faq-panel');
    if (!btn || !panel) return;

    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      items.forEach(function (i) {
        var b = i.querySelector('.faq-btn');
        var p = i.querySelector('.faq-panel');
        if (b) b.setAttribute('aria-expanded', 'false');
        if (p) p.classList.remove('open');
      });

      // Open clicked if it was closed
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        panel.classList.add('open');
      }
    });
  });
}

/* === COUNTER ANIMATION ================================= */
function animateCounters() {
  var counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  counters.forEach(function (counter) {
    var target = parseInt(counter.getAttribute('data-target'), 10);
    var suffix = counter.getAttribute('data-suffix') || '+';

    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(counter);

      if (prefersReduced) {
        counter.textContent = target + suffix;
        return;
      }

      var current   = 0;
      var increment = target / 80;

      function tick() {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current) + suffix;
          requestAnimationFrame(tick);
        } else {
          counter.textContent = target + suffix;
        }
      }
      requestAnimationFrame(tick);
    });

    observer.observe(counter);
  });
}

/* === LOGIN ============================================= */
function handleLogin(e) {
  e.preventDefault();
  var errorEl   = document.getElementById('errorMessage');
  var successEl = document.getElementById('successMessage');
  if (errorEl)   errorEl.style.display = 'none';
  if (successEl) successEl.style.display = 'none';

  var username = document.getElementById('username') ? document.getElementById('username').value.trim() : '';
  var password = document.getElementById('password') ? document.getElementById('password').value.trim() : '';

  if (!username || !password) {
    if (errorEl) { errorEl.textContent = 'Lütfen tüm alanları doldurunuz.'; errorEl.style.display = 'block'; }
    return;
  }

  // Müvekkil portalı aktif değil — sunucu tarafı doğrulama gereklidir
  if (errorEl) {
    errorEl.textContent = 'Müvekkil portalı şu an aktif değildir. Lütfen büromuzla iletişime geçiniz.';
    errorEl.style.display = 'block';
  }
}

function checkLoginStatus() {
  // İletişim sayfası ve tüm sayfalar herkese açıktır
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
}

/* === ACCORDION (Makaleler) ============================= */
function initAccordion() {
  var cards = document.querySelectorAll('.makale-accordion');
  cards.forEach(function (card) {
    var btn   = card.querySelector('.makale-acc-header');
    var panel = card.querySelector('.makale-acc-body');
    if (!btn || !panel) return;

    btn.setAttribute('aria-expanded', 'false');
    var id = 'acc-' + Math.random().toString(36).slice(2);
    panel.id = id;
    btn.setAttribute('aria-controls', id);

    btn.addEventListener('click', function () {
      var isOpen = card.classList.contains('open');

      // Tüm diğer accordion'ları kapat
      cards.forEach(function (c) {
        c.classList.remove('open');
        var b = c.querySelector('.makale-acc-header');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        card.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        // Açılan karta scroll et (hafif offset)
        setTimeout(function () {
          var top = card.getBoundingClientRect().top + window.pageYOffset - 88;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }, 40);
      }
    });
  });
}

/* === FİLTRE (Makaleler Kategorisi) ==================== */
function initMakaleFiltre() {
  var btns  = document.querySelectorAll('.filtre-btn');
  var cards = document.querySelectorAll('.makale-accordion');
  if (!btns.length) return;

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var kat = btn.getAttribute('data-filtre');
      cards.forEach(function (card) {
        if (!kat || card.getAttribute('data-cat') === kat) {
          card.style.display = '';
        } else {
          card.classList.remove('open');
          var b = card.querySelector('.makale-acc-header');
          if (b) b.setAttribute('aria-expanded', 'false');
          card.style.display = 'none';
        }
      });
    });
  });
}

/* === KARAR ACCORDION (Services) ======================== */
function initKararAccordion() {
  var items = document.querySelectorAll('.karar-acc-item');
  items.forEach(function (item) {
    var btn   = item.querySelector('.karar-acc-btn');
    var panel = item.querySelector('.karar-acc-panel');
    if (!btn || !panel) return;

    var id = 'karar-' + Math.random().toString(36).slice(2);
    panel.id = id;
    btn.setAttribute('aria-controls', id);

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/* === SMOOTH SCROLL ===================================== */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
