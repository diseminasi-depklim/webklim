document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".mega-toggle");

  toggles.forEach(function (toggle) {
    const navItem = toggle.closest(".nav-item");
    const megaMenu = navItem.querySelector(".mega-menu");

    toggle.addEventListener("click", function (e) {
      const isMobile = window.innerWidth <= 991;
      if (isMobile) {
        e.preventDefault();
        megaMenu.classList.toggle("show-mobile");
      }
    });
  });
});
