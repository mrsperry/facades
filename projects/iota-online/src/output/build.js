"use strict";
$(window).on("scroll", () => {
    const nav = $("nav");
    if ($(window).scrollTop() === 0 && nav.hasClass("scrolling")) {
        nav.removeClass("scrolling");
    }
    else if (!nav.hasClass("scrolling")) {
        nav.addClass("scrolling");
    }
});
