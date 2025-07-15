window.addEventListener("resize", function () {
  "use strict";
  window.location.reload();
});

document.addEventListener("DOMContentLoaded", function () {
  /////// Prevent closing from click inside dropdown
  document.querySelectorAll(".dropdown-menu").forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });

  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
    // 🔧 Khusus Mega Menu: Toggle dropdown di mobile
    document
      .querySelectorAll(".ktm-mega-menu > .nav-link")
      .forEach(function (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();

          const parent = this.closest(".ktm-mega-menu");
          const dropdown = parent.querySelector(".dropdown-menu");

          // Tutup dropdown lain
          document
            .querySelectorAll(".ktm-mega-menu .dropdown-menu")
            .forEach(function (other) {
              if (other !== dropdown) {
                other.classList.remove("show");
                other.style.display = "none";
              }
            });

          // Toggle dropdown ini
          if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
            dropdown.style.display = "none";
          } else {
            dropdown.classList.add("show");
            dropdown.style.display = "block";
          }
        });
      });

    // close all inner dropdowns when parent is closed
    document
      .querySelectorAll(".navbar .dropdown")
      .forEach(function (everydropdown) {
        everydropdown.addEventListener("hidden.bs.dropdown", function () {
          this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
            everysubmenu.style.display = "none";
          });
        });
      });

    // (Optional: kalau kamu punya submenu dalam menu biasa)
    document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains("submenu")) {
          e.preventDefault();
          if (nextEl.style.display == "block") {
            nextEl.style.display = "none";
          } else {
            nextEl.style.display = "block";
          }
        }
      });
    });
  }
});
