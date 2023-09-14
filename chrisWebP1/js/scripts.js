/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  const contactLink = document.querySelector("#contact-link");
  const contactModal = new bootstrap.Modal(
    document.querySelector("#contactModal")
  );
  const thankYouModal = new bootstrap.Modal(
    document.querySelector("#thankYouModal")
  );
  const contactForm = document.querySelector("#contact-form");

  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    contactModal.show();
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Simulate form submission (you can replace this with actual form submission code)
    // For demonstration purposes, we'll just show the thank you modal
    thankYouModal.show();
    contactModal.hide();
  });

  const tabButtons = document.querySelectorAll(".tab-button");
  const hobbyContents = document.querySelectorAll(".hobby-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the 'active' class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      hobbyContents.forEach((content) => content.classList.remove("active"));

      // Add the 'active' class to the clicked button and corresponding content
      button.classList.add("active");
      const category = button.getAttribute("data-category");
      const content = document.querySelector(
        `.hobby-content[data-category="${category}"]`
      );
      content.classList.add("active");
    });
  });
});
