// Menyeleksi semua elemen section dan link pada navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// Event listener untuk scroll
window.addEventListener("scroll", () => {
  let currentSection = "";

  // Menentukan section yang sedang terlihat di viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Menambahkan kelas 'active' pada link yang sesuai
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

const hamburger = document.querySelector('.icon-hamburger');
const navLinks1 = document.querySelector('.nav-links');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  navLinks1.classList.toggle('active');
  nav.classList.toggle('active');

  // Ketika icon diklik
  hamburger.classList.toggle('close');

  // Ubah gambar icon (hamburger ↔ close)
  const imgSrc = hamburger.classList.contains('close') ? 'Image/close.png' : 'Image/hamburger.png';
  hamburger.querySelector('.icon-hamburger-img').src = imgSrc;
});
