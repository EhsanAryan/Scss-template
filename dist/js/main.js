const menuTrigger = document.getElementById("menu-trigger");
const navBase = document.getElementById("hidden-nav-base");
const navBox = document.getElementById("hidden-nav-box");

const showHiddenNav = () => {
    navBase.style.display = "block";
    setTimeout(() => {
        navBase.classList.add("opacity-1");
        navBox.classList.add("scale-1");
    }, 10);
};

const hideHiddenNav = () => {
    navBase.classList.remove("opacity-1");
    navBox.classList.remove("scale-1");
    setTimeout(() => {
        navBase.style.display = "none";
    }, 500);
};

menuTrigger.addEventListener("click", showHiddenNav);

navBase.addEventListener("click", hideHiddenNav);

navBox.addEventListener("click", (event) => {
    event.stopPropagation();
});

addEventListener("resize", () => {
    if(window.innerWidth > 768) {
        if(navBase.classList.contains("opacity-1")) {
            hideHiddenNav();
        }
    }
});