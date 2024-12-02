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


// ANIMATION for Past Works Section and Call to action
const pastImg = document.querySelectorAll('.past-img, #call-to-action');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.target.classList.contains('past-img')) {
      entry.target.classList.toggle("past-img-animation",entry.isIntersecting);
    }else {
      entry.target.classList.toggle("cta-animate",entry.isIntersecting);
    }
  });
}, {
  threshold: 0.5
});

pastImg.forEach(im => observer.observe(im));

// ANIMATION for Focus Section
const focus = document.querySelectorAll('.from-left, .from-right');
const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    
      if(entry.target.classList.contains('from-left')) {
        entry.target.classList.toggle("left-animate", entry.isIntersecting);
      }else{
        entry.target.classList.toggle("right-animate", entry.isIntersecting);
      }
  });
}, {
  threshold: 0.2
});

focus.forEach(im => slideObserver.observe(im));


