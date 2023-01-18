const navham = document.querySelector(".navham");
const navlist = document.querySelector(".navlist");

navham.addEventListener("click", () => {
    navham.classList.toggle("active");
    navlist.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navham.classList.remove("active");
    navlist.classList.remove("active");
  }))