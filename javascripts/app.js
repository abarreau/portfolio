'use strict';
/**
 * Handles the main visual effects of the page
 */
$(document).ready(function() {
    var navbarHeight            = 100;
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
        console.log($(this).scrollTop());
        
        if ($(this).scrollTop() == 0) {
            $("#navbar").removeClass("reduced");
        } else {
            $("#navbar").addClass("reduced");
        }
    });

    /**
     * Sets the first section to the height of the viewport
     */
    $("#abstract").css("min-height", $(window).height());
    
    $( window ).resize(function() {
        $("#abstract").css("height", $(window).height());
    });
});