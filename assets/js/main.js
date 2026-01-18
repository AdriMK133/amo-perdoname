/* REDIRECIONAR BOTÃO */
function redirectToQualidades() {
    window.location.href = "qualidades1.html";
}

/* DARK/LIGHT THEME */
function toggleTheme(){ 
  document.body.classList.toggle("light"); 
}

/* SECTIONS SCROLL ANIMATION */
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });

  /* HERO PARALLAX */
  const hero = document.getElementById("hero");
  hero.style.backgroundPosition = `center ${window.scrollY*0.4}px`;

  /* GALLERY SCROLL ANIMATION */
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80){
      item.classList.add("show");
    }
  });
});

/* PARTICLES HERO */
const hero = document.getElementById("hero");
for(let i=0;i<40;i++){
  const p = document.createElement("div");
  p.classList.add("particle");
  const size = Math.random()*4 + 2;
  p.style.width = size + "px";
  p.style.height = size + "px";
  p.style.top = Math.random()*100 + "%";
  p.style.left = Math.random()*100 + "%";
  p.style.animationDuration = 5 + Math.random()*10 + "s";
  p.style.background = `rgba(255,255,255,${0.1 + Math.random()*0.4})`;
  hero.appendChild(p);
}
