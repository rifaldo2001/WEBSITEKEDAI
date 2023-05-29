// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
(".navbar-nav");
//ketika keda-menu di klik
document.querySelector("#kedai-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const kedai = document.querySelector("#kedai-menu");

document.addEventListener("click", function (e) {
  if (!kedai.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
