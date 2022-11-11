const UIHamburger = document.querySelector(".mobile-hamburger");
const UIMobileNav = document.querySelector(".mobile-nav-links");
const UIYearSpan = document.querySelector(".current-year");
let menuIsOpen = false;

UIHamburger.addEventListener("click", openMenu);

function openMenu() {
    if (!menuIsOpen) {
        UIMobileNav.style.transform = "translateY(0)";
        UIMobileNav.style.opacity = 1;
        UIMobileNav.style.zIndex = "10";
        UIHamburger.style.backgroundColor = "#7e5ae2";
    } else {
        UIMobileNav.style.transform = "translateY(-25px)";
        UIMobileNav.style.opacity = 0;
        UIMobileNav.style.zIndex = "-10";
        UIHamburger.style.backgroundColor = "#050505";
    }

    menuIsOpen = !menuIsOpen;
}

let today = new Date().getFullYear();
UIYearSpan.innerHTML = today;
