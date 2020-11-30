$(window).on("scroll", (): void => {
    const nav: JQuery<HTMLElement>  = $("nav");

    if ($(window).scrollTop() === 0 && nav.hasClass("scrolling")) {
        nav.removeClass("scrolling");
    } else if (!nav.hasClass("scrolling")) {
        nav.addClass("scrolling");
    }
});