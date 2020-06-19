$(document).ready(function () {

    /**For the sticky navigation */
    $(".js--section-features").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: "60px;"
    });


    /**Scroll on buttons: Clica no buttom I am hungry e vai até os planos */
    $(".js--scroll-to-plans").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-plans").offset().top }, 1000);
    });

    /**Scroll on buttons: Clica no buttom Show me more e vai até a explicação */
    $(".js--scroll-to-start").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-features").offset().top }, 1000);
    });

    /*Navigation scroll: Este codigo é útil para fazer a gerenciar as solicitações de informações: Por exemplo: Quando clico em sign up ele vai directo dos planos. No index foi necessário: #plans e criar um id no section plans com o mesmo nome
    link: https://css-tricks.com/snippets/jquery/smooth-scrolling/*/
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

});