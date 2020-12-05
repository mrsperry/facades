$(window).on("scroll", (): void => {
    const nav: JQuery<HTMLElement>  = $("nav");

    const scroll: number = $(window).scrollTop() ?? 0;
    if (scroll <= 0 && nav.hasClass("scrolling")) {
        nav.removeClass("scrolling");
    } else if (!nav.hasClass("scrolling")) {
        nav.addClass("scrolling");
    }
});