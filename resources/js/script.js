$(document).ready(function () {

    /**For the sticky navigation: Para aparecer o segundo cabeçalho*/
    $(".js--section-features").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: "60px"
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
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    /*Animations on scroll
    *link: https://animate.style/ 
    * or include this in index: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">   
    */
    
     $(".js--wp-1").waypoint(function(direction){
         $(".js--wp-1").addClass('animated animate__fadeIn');
     }, {
         offset: "50%"
     });
     

     $(".js--wp-2").waypoint(function(direction){
         $(".js--wp-2").addClass("animated animate__fadeInUp");
     }, {
         offset: "50%"
     });

     $(".js--wp-3").waypoint(function(direction){
         $(".js--wp-3").addClass("animated animate__backInLeft");
     }, {
         offset: "50%"
     });

     $(".js--wp-4").waypoint(function(direction){
         $(".js--wp-4").addClass("animated animate__pulse");
     }, {
         offset: "50%"
     });    

});