function mobileMenu() {
    if (document.querySelector(".hamburger.active")) {
        // closing nav & toggling hamburger state to off
        document.querySelector(".hamburger").classList.toggle("active");
        console.log("Open hamburger is closing");

        // closing hamburger lines
        document.querySelector(".bar1").classList.remove("active", "transform", "translate-y-1.5", "rotate-45")
        document.querySelector(".bar2").classList.remove("active", "invisible")
        document.querySelector(".bar3").classList.remove("active", "transform", "-translate-y-1.5", "-rotate-45")

        // closing nav
        document.querySelector(".containerNav").classList.remove("active", "h-full", "grid-rows-5")

        document.querySelector(".nav-index").classList.toggle("hidden")
        document.querySelector(".nav-index").classList.remove("row-start-2", "justify-self-center", "col-start-2", "row-start-2", "self-start", "text-4xl", "font-medium")

        document.querySelector(".nav-about").classList.toggle("hidden")
        document.querySelector(".nav-about").classList.remove("row-start-3", "justify-self-center", "col-start-2", "row-start-3", "self-start", "text-4xl", "font-medium")

        document.querySelector(".nav-portfolio").classList.toggle("hidden")
        document.querySelector(".nav-portfolio").classList.remove("row-start-4", "justify-self-center", "col-start-2", "row-start-4", "self-start", "text-4xl", "font-medium")

        document.querySelector(".nav-contact").classList.toggle("hidden")
        document.querySelector(".nav-contact").classList.remove("row-start-5", "justify-self-center", "col-start-2", "row-start-5", "self-start", "text-4xl", "font-medium")

    } else {
        // opening nav & toggling hamburger state to active
        document.querySelector(".hamburger").classList.toggle("active");
        console.log("Closed hamburger is opening");

        // opening hamburger lines
        document.querySelector(".bar1").classList.add("active", "transform", "translate-y-1.5", "rotate-45")
        document.querySelector(".bar2").classList.add("active", "invisible")
        document.querySelector(".bar3").classList.add("active", "transform", "-translate-y-1.5", "-rotate-45")

        // opening nav
        document.querySelector(".containerNav").classList.add("active", "h-full", "grid-rows-5", "duration-300")

        document.querySelector(".nav-index").classList.toggle("hidden")
        document.querySelector(".nav-index").classList.add("row-start-2", "justify-self-center", "col-start-2", "row-start-2", "self-start", "text-4xl", "font-medium")

        document.querySelector(".nav-about").classList.toggle("hidden")
        document.querySelector(".nav-about").classList.add("row-start-3", "justify-self-center", "col-start-2", "row-start-3", "self-start", "text-4xl", "font-medium")

        document.querySelector(".nav-portfolio").classList.toggle("hidden")
        document.querySelector(".nav-portfolio").classList.add("row-start-4", "justify-self-center", "col-start-2", "row-start-4", "self-start", "text-4xl", "font-medium")

        document.querySelector(".nav-contact").classList.toggle("hidden")
        document.querySelector(".nav-contact").classList.add("row-start-5", "justify-self-center", "col-start-2", "row-start-5", "self-start", "text-4xl", "font-medium")
    }
}

function hoverOver(hoverId) {
    // console.log(`Hover over card ${hoverId}`);
    document.getElementById(hoverId).firstElementChild.classList.remove("hidden")
    return
}

function hoverOff(hoverId) {
    // console.log(`Hover off card ${hoverId}`);
    document.getElementById(hoverId).firstElementChild.classList.add("hidden")
    return
}