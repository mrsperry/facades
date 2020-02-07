(() => {
    const duration = 200;
    const applyEvents = (element, hidden, background) => {
        $(element).hover(() => {
            hidden.show();
            background.stop().fadeOut(duration);
        }, () => {
            background.stop().fadeIn(duration, () => {
                hidden.hide();
            });
        });
    };

    for (const button of $(".card button")) {
        const matchHidden = $(button).children(".card-match-hidden-background");
        const matchBackground = $(button).children(".card-match-background");
        applyEvents(button, matchHidden, matchBackground);

        const profileHidden = $(button).children(".card-profile-hidden-background");
        const profileBackground = $(button).children(".card-profile-background");
        applyEvents(button, profileHidden, profileBackground);
    }

    for (const conversation of $(".conversation")) {
        const hidden = $(conversation).children(".conversation-hidden-background");
        const background = $(conversation).children(".conversation-background");
        applyEvents(conversation, hidden, background);
    }
})();