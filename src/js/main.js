(async () => {
    // Hide all description elements
    const elements = $(".description");
    // Get the amount of margin to add to each element
    const width = ($(document).width() / 2) + "px";

    for (let index = 0; index < elements.length; index++) {
        $(elements[index])
            // Swap sides after each element
            .css("margin-left", (index % 2 == 0 ? "-" : "") + width)
            // Animate the element, sliding in from either side
            .animate({
                "margin-left": "0px",
                "opacity": 1
            }, 2000);

        // Sleep for 500ms
        await new Promise(resolve => setTimeout(resolve, 200));
    }
})();