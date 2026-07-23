/* =========================================================
   main.js
   Three small, independent behaviors. If JavaScript fails to
   load, every page still displays correctly — the writing
   list just shows everything unfiltered, the mobile menu
   falls back to always-visible links, and illustrations are
   still visible at their normal (non-enlarged) size.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ---------- Writing page: filter by category ---------- */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var writingItems = document.querySelectorAll(".writing-item");

  if (filterButtons.length && writingItems.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var category = button.getAttribute("data-filter");

        filterButtons.forEach(function (b) {
          b.classList.remove("is-active");
        });
        button.classList.add("is-active");

        writingItems.forEach(function (item) {
          var matches = category === "all" || item.getAttribute("data-category") === category;
          item.hidden = !matches;
        });
      });
    });
  }

  /* ---------- Homepage: click an illustration to enlarge it ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var lightboxClose = document.getElementById("lightbox-close");
  var triggers = document.querySelectorAll("[data-lightbox]");

  if (lightbox && lightboxImg && triggers.length) {
    var openLightbox = function (src, alt, caption) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      if (lightboxCaption) lightboxCaption.textContent = caption || "";
      lightbox.hidden = false;
    };
    var closeLightbox = function () {
      lightbox.hidden = true;
      lightboxImg.src = "";
      if (lightboxCaption) lightboxCaption.textContent = "";
    };

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var img = trigger.querySelector("img");
        openLightbox(
          trigger.getAttribute("data-lightbox"),
          img ? img.alt : "",
          trigger.getAttribute("data-caption")
        );
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener("click", closeLightbox);
    }
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }
});
