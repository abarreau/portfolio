$(document).ready(function() {
    $(".navbar-link").click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var position = 0;

        if(target !== "#top") {
            position = $(target).offset().top - 100;
        }

        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });

    $(window).scroll(function() {
        if($(this).scrollTop() == 0) {
            $("#navbar").removeClass("reduced");
        } else {
            $("#navbar").addClass("reduced");
        }
    });

    $("#abstract").css("height", $(window).height());
});