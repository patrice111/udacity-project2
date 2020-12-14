//Create Nav
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");



const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

//Nav

const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});

//Scroll

const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
    if (!link) return;
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = e.scrollLink.getAttribute("href").slice(1);

        const element = document.getElementById(id);
        const fixNav = navBar.classList.contains("fix-nav");
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
        });

        navBar.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    });
});

gsap.from(".logo", {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    y: -10
});
gsap.from(".hamburger", {
    opacity: 0,
    duration: 1,
    delay: 1,
    x: 20
});
gsap.from(".hero-img", {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    x: -200
});
gsap.from(".hero-content h2", {
    opacity: 0,
    duration: 1,
    delay: 2,
    y: -50
});
gsap.from(".hero-content h1", {
    opacity: 0,
    duration: 1,
    delay: 2.5,
    y: -45
});
gsap.from(".hero-content a", {
    opacity: 0,
    duration: 1,
    delay: 3.5,
    y: 50
});



//Active State
//Change navigation style on scroll
let mainNavLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});



//Top Button
var mybutton = document.getElementById("myBtn");

// Once user scrolls down 10px from top show button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

//Once clicked button scrolls to top 
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
