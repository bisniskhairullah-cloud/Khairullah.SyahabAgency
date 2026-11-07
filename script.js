
// NOMOR WHATSAPP AGENCY
const WA_NUMBER = "6285770389093";

// OTOMATIS MEMBUAT LINK WHATSAPP
document.querySelectorAll(".wa").forEach((button) => {
  const message =
    button.dataset.msg ||
    "Halo Khairullah Syahab Agency, saya ingin konsultasi.";

  button.href =
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  button.target = "_blank";
  button.rel = "noopener noreferrer";
});

// MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
});

// TUTUP MENU SETELAH LINK DIKLIK
navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("show");
  });
}

// TAHUN OTOMATIS PADA FOOTER
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
