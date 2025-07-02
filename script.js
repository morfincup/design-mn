document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  // Menyu ochish-yopish
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Fade-in animatsiya
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.1
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
