let lastScrollTop = 0; // Store the last scroll position

window.onscroll = function() {
  const header = document.getElementById("header-container");
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Hide the header when scrolling down, show when scrolling up
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    header.classList.add("hidden-header");
  } else {
    header.classList.remove("hidden-header");
  }

  lastScrollTop = currentScroll; // Update last scroll position
};