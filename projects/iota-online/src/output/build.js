"use strict";
$(window).on("scroll", () => {
    const nav = $("nav");
    const scroll = $(window).scrollTop() ?? 0;
    if (scroll <= 0 && nav.hasClass("scrolling")) {
        nav.removeClass("scrolling");
    }
    else if (!nav.hasClass("scrolling")) {
        nav.addClass("scrolling");
    }
});
