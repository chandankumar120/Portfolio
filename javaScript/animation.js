
//contact us
const contact = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("contact-animation");
    }
  });
});

contact.observe(document.querySelector("#contact"));


//about us
const about = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("about-animation");
    }
  });
});

about.observe(document.querySelector("#about"));
