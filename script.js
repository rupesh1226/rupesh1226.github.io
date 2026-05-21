
// ─── LINKS CONFIG — replace with your real URLs ─────────────────
const PROJECTS = {
  airbnb: 'https://github.com/rupesh1226/Airbnb-Price-Analysis',
  tts:    'https://github.com/rupesh1226/text-to-speech',
  figma1: 'https://www.figma.com/proto/l0BzmlsWRxddBwdL9y2nqN/Rupesh?page-id=0%3A1&node-id=1-2&p=f&viewport=1144%2C578%2C0.16&t=rK501qm6vS6XxSf0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1',
  figma2: 'https://www.figma.com/proto/KgjjilIwgJHmWJ0WhaIEPe/Untitled?page-id=0%3A1&node-id=1-1269&p=f&viewport=73%2C372%2C0.18&t=IglpuYN9VVdzoFcx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1269',
  
};

const CERTS = {
  salesforce: {
    title: '🏆 Salesforce AI Associate',
    img:   'images/certificates/salesforce-cert.jpg',
  },
  servicenow: {
    title: '🏆 ServiceNow CSA',
    img:   'images/certificates/servicenow-cert.jpg',
  },
  alibaba: {
    title: '🏆 Alibaba Cloud Certification',
    img:   'images/certificates/alibaba-cert.jpg',
  },
};

// ─── PROJECT LINK OPENER ────────────────────────────────────────
function openProject(key) {
  const url = PROJECTS[key];
  if (url) window.open(url, '_blank');
}

// ─── CERTIFICATE MODAL ──────────────────────────────────────────
function openCert(key) {
  const cert = CERTS[key];
  if (!cert) return;
  document.getElementById('modalHeader').textContent = cert.title;
  document.getElementById('modalImg').src = cert.img;
  document.getElementById('certModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("modalImg");

  modal.classList.remove("active");
  img.src = "";
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});


// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});


const themeBtn = document.getElementById('themeBtn');

// Apply saved theme or system preference on load
if (
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
}

themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


// ─── CUSTOM CURSOR ──────────────────────────────────────────────
//const cur  = document.getElementById('cur');
//const ring = document.getElementById('ring');
//let mx = 0, my = 0;

//document.addEventListener('mousemove', e => {
  //mx = e.clientX;
  //my = e.clientY;
  //cur.style.left = mx + 'px';
  //cur.style.top  = my + 'px';
  //setTimeout(() => {
    //ring.style.left = mx + 'px';
    //ring.style.top  = my + 'px';
  //}, 80);
//});

// Grow cursor on interactive elements
const hoverTargets = 'a, .btn, .tool-pill, .sg, .proj-card, .cert-card, .info-card, .exp-card';
document.querySelectorAll(hoverTargets).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.width   = '18px';
    cur.style.height  = '18px';
    cur.style.opacity = '.55';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.width   = '8px';
    cur.style.height  = '8px';
    cur.style.opacity = '1';
  });
});


// ─── SCROLL REVEAL ──────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 65);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));