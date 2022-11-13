const UIHamburger = document.querySelector(".mobile-hamburger");
const UIMobileNav = document.querySelector(".mobile-nav-links");
const UIYearSpan = document.querySelector(".current-year");
let menuIsOpen = false;

const UIFaqBlock = document.querySelectorAll(".faq-block");
const UIFaqAnswer = document.querySelectorAll(".faq-answer");
let showAnswer = false;

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

for (let i = 0; i < UIFaqBlock.length; i++) {
    UIFaqBlock[i].addEventListener("click", function () {
        if (!showAnswer) {
            UIFaqBlock[i].classList.add("focus");
            UIFaqAnswer[i].style.height = "75px";
            UIFaqAnswer[i].style.opacity = 1;
        } else {
            UIFaqBlock[i].classList.remove("focus");
            UIFaqAnswer[i].style.height = 0;
            UIFaqAnswer[i].style.opacity = 0;
        }
        showAnswer = !showAnswer;
    });
}
