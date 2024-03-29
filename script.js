alert(
  "NOTE: This is a fictional website of a fictional company. Additionally, personal data entered in the sign up form will be neither stored nor distributed."
);

// Make mobile navigation work
const btnNavEl = document.querySelector(".nav-menu");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////
// SMOOTH SCROLLING ANIMATION
////////////////////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-item"))
      headerEl.classList.toggle("nav-open");
  });
});
