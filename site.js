const CONFIG = {
  phone: "+923001234567",
  whatsapp: "923001234567",
  email: "your.email@example.com"
};

// Theme handling
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;

function apply(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (themeBtn) {
    themeBtn.textContent = theme === "light" ? "☀" : "☾";
    themeBtn.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
    themeBtn.title = theme === "light"
      ? "Switch to dark theme"
      : "Switch to light theme";
  }

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute(
      "content",
      theme === "light" ? "#e8e5df" : "#111820"
    );
  }
}

const savedTheme = localStorage.getItem("theme");
apply(savedTheme || root.getAttribute("data-theme") || "light");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    apply(currentTheme === "light" ? "dark" : "light");
  });
}

// Phone / WhatsApp popup
const phoneDlg = document.createElement("dialog");
phoneDlg.id = "phoneDlg";
phoneDlg.className = "mini";

phoneDlg.innerHTML = `
  <div class="dlg-inner">
    <button class="dlg-close" type="button" aria-label="Close">&times;</button>
    <h3>Get in touch</h3>
    <p>Choose how you'd like to contact me.</p>
    <div class="dlg-actions">
      <a class="btn primary" href="tel:${CONFIG.phone}">Call</a>
      <a class="btn secondary" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  </div>
`;

document.body.appendChild(phoneDlg);

const closeDlg = phoneDlg.querySelector(".dlg-close");

if (closeDlg) {
  closeDlg.addEventListener("click", () => phoneDlg.close());
}

phoneDlg.addEventListener("click", (event) => {
  if (event.target === phoneDlg) {
    phoneDlg.close();
  }
});

document.querySelectorAll("[data-phone-popup]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    phoneDlg.showModal();
  });
});

// Role rotator
const roles = [
  "Embedded Systems Engineer",
  "Mechatronics Engineer",
  "Hardware & Firmware Developer"
];

const roleElement = document.querySelector(".role-text");

if (roleElement && roles.length > 0) {
  let roleIndex = 0;

  roleElement.textContent = roles[roleIndex];

  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
  }, 2500);
}

// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

// Animated counters
const counters = document.querySelectorAll("[data-count]");

if ("IntersectionObserver" in window && counters.length > 0) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.getAttribute("data-count")) || 0;
        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const easedProgress = 1 - Math.pow(1 - progress, 3);
          counter.textContent = Math.round(target * easedProgress);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      });
    },
    {
      threshold: 0.5
    }
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}
