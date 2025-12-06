// Initialize Typed.js
// Ensure the element exists before initializing
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.typed')) {
        var typed = new Typed(".typed", {
            strings: [
                "PRODUCT MANAGER",
                "DAD",
                "RUNNER",
                "HUSBAND"
            ],
            smartBackspace: false,
            typeSpeed: 50,
            backSpeed: 30,
            startDelay: 500,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
        });
    }
});

console.log("Welcome to Jordan Tranchina's Portfolio");