$(document).ready(function() {
    $(".navbar-link").click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var position = 0;

        if(target !== "#top") {
            position = $(target).offset().top; // retrancher la hauteur de la navbar
        }

        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });

    $(window).scroll(function() {
        if($(this).scrollTop() == 0) {
            $("nav").removeClass("reduced");
        } else {
            $("nav").addClass("reduced");
        }
    });

    $("#abstract").css("height", $(window).height());
});