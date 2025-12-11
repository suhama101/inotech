document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  const scrollEls = document.querySelectorAll(".animate-on-scroll");
  if ("IntersectionObserver" in window && scrollEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    scrollEls.forEach((el) => observer.observe(el));
  } else {
    scrollEls.forEach((el) => el.classList.add("is-visible"));
  }

  const scrollTopBtn = document.querySelector(".scroll-top");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 320) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const projectDropdown = document.querySelector(".has-dropdown");
  if (projectDropdown) {
    const trigger = projectDropdown.querySelector(":scope > a");
    if (trigger) {
      trigger.addEventListener("click", (e) => {
        if (window.innerWidth <= 720) {
          e.preventDefault();
          projectDropdown.classList.toggle("open");
        }
      });
    }
  }
});
