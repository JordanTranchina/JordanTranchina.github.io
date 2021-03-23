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
        document.querySelector(".containerNav").classList.remove("active", "h-full")
    } else {
        // opening nav & toggling hamburger state to active
        document.querySelector(".hamburger").classList.toggle("active");
        console.log("Closed hamburger is opening");

        // opening hamburger lines
        document.querySelector(".bar1").classList.add("active", "transform", "translate-y-1.5", "rotate-45")
        document.querySelector(".bar2").classList.add("active", "invisible")
        document.querySelector(".bar3").classList.add("active", "transform", "-translate-y-1.5", "-rotate-45")

        // opening nav
        document.querySelector(".containerNav").classList.add("active", "h-full")

    }
}