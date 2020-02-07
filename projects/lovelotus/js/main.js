(() => {
    for (const conversation of $(".conversation")) {
        const duration = 150;
        const hidden = $(conversation).children(".conversation-hidden-background");
        const background = $(conversation).children(".conversation-background");

        $(conversation).hover(() => {
            hidden.show();
            background.stop().fadeOut(duration);
        }, () => {
            background.stop().fadeIn(duration, () => {
                hidden.hide();
            });
        });
    }
})();