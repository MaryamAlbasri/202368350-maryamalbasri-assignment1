


const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

// Show a greeting based on the current hour

if (hour < 12) {
  greeting.textContent = "Good morning! 👋";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon! 👋";
} else {
  greeting.textContent = "Good evening! 👋";
}


const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-links a");

// Highlight the nav link of the section in the middle of the screen

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;



        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-50% 0px -50% 0px" } // trigger at the middle of the screen
);

sections.forEach((section) => observer.observe(section));





const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  formStatus.textContent = `Thanks, ${name}! Your message has been received.`;
  form.reset(); // clear the fields
});



const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");


document.querySelectorAll(".project-card img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
}

closeBtn.addEventListener("click", closeLightbox);

// close when clicking the dark background or pressing Esc
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});