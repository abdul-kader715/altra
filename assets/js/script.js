
if ($(".roll-slider").length) {
    $(".roll-slider").owlCarousel({
        autoplay: false,
        smartSpeed: 300,
        margin: 0,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        arrows: false,
        responsive: {
            0: {
                items: 2
            },

            550: {
                items: 4
            },
            767: {
                items: 5
            },

            992: {
                items: 6
            },
            1200: {
                items: 7
            },

            1400: {
                items: 9
            },
            1599: {
                items: 10
            }
        }
    });
}


/*------------------------------------------
   = FUNFACT
-------------------------------------------*/
if ($(".odometer").length) {
    $('.odometer').appear();
    $(document.body).on('appear', '.odometer', function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
}


$(function () {
    $('.theme-btn')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        });
});



$("#containerScaled").on('mousemove', '.box', function (e) {
    $("#followC").css("top", e.clientY)
        .css("left", e.clientX);
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

// sidebar
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

