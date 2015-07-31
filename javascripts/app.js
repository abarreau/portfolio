/**
 * Handles the main visual effects of the page
 */
$(document).ready(function() {
    var navbarHeight            = $("nav").height();
    var navbarCollapseButton    = $("#navbar-collapse-button");
    var navbar                  = $("#navbar");

    /**
     * On click on a navbar link, we jump straight to the corresponding section
     */
    $(".navbar-link").click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var position = 0;

        if (target !== "#top") {
            position = $(target).offset().top - navbarHeight;
        }

        $("html, body").animate({
            scrollTop: position
        }, 1000);

        // in case we're in small device, i.e. navbar is folded
        // we automatically close the navbar
        if ($(window).width() <= 768) {
            navbarCollapseButton.removeClass("collapsed");
            navbar.removeClass("in");
        }
    });

    /**
     * Listener on scroll page event.
     * Changes the navbar style on scroll
     */
    $(window).scroll(function() {
        if ($(this).scrollTop() <= 100) {
            $("nav").removeClass("nav-reduced");
        } else {
            $("nav").addClass("nav-reduced");
        }
    });

    /**
     * Sets the first section to the height of the viewport
     */
    $("#abstract").css("height", $(window).height());
});