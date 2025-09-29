// small interactions
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      if(id === '#') return;
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Theme toggle
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
    toggleBtn.textContent = "🌙";
  } else {
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    if (body.classList.contains("light-theme")) {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    }
  });

  // === Testimonial auto-slide ===
const track = document.querySelector('.testimonial-track');
if (track) {
  const quotes = document.querySelectorAll('.testimonial-track blockquote');
  let index = 0;

  function showNext() {
    index = (index + 1) % quotes.length;
    track.scrollTo({
      left: quotes[index].offsetLeft,
      behavior: 'smooth'
    });
  }

  setInterval(showNext, 5000); // change every 5 seconds
}

});
