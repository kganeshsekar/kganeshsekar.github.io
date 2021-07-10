(function ($) {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });



    // Parallaxmouse js

    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };
    parallaxMouse();


    //===== Progress Bar

    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });


    //===== Magnific Popup
    $('.still-img-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/still/si1.jpg',
            },
            {
                src: 'assets/images/still/si2.jpg',
            },
            {
                src: 'assets/images/still/si3.jpg',
            },
            {
                src: 'assets/images/still/si4.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.hdr-blending-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/hdr/HDR-Blending-Enhancement-014-2.jpg',
            },
            {
                src: 'assets/images/hdr/HDR-Blending-Enhancement-014-10.jpg',
            },
            {
                src: 'assets/images/hdr/HDR-Blending-Enhancement-014-11.jpg',
            },
            {
                src: 'assets/images/hdr/HDR-Blending-Enhancement-014-21.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.twilight-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/twilight/Twilight-Images-Enhancement-001-1.jpg',
            },
            {
                src: 'assets/images/twilight/Twilight-Images-Enhancement-001-2.jpg',
            },
            {
                src: 'assets/images/twilight/Twilight-Images-Enhancement-001-5.jpg',
            },
            {
                src: 'assets/images/twilight/Twilight-Images-Enhancement-001-10.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.daytoduck-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/D2D/daytoduck1.jpg',
            },
            {
                src: 'assets/images/D2D/daytoduck2.jpg',
            },
            {
                src: 'assets/images/D2D/daytoduck3.jpg',
            },
            {
                src: 'assets/images/D2D/daytoduck4.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.flambient-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/flambint/f1.jpg',
            },
            {
                src: 'assets/images/flambint/f2.jpg',
            },
            {
                src: 'assets/images/flambint/f3.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.portrait-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/portrait/po1.jpg',
            },
            {
                src: 'assets/images/portrait/po3.jpg',
            },
            {
                src: 'assets/images/portrait/po4.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.stagging-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/Stagging/vs1.jpg',
            },
            {
                src: 'assets/images/Stagging/vs2.jpg',
            },
            {
                src: 'assets/images/Stagging/vs3.jpg',
            },
            {
                src: 'assets/images/Stagging/vs4.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.object-removal-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/ob/Object-Removed-001-4.jpg',
            },
            {
                src: 'assets/images/ob/Object-Removed-001-6.jpg',
            },
            {
                src: 'assets/images/ob/Object-Removed-001-8.jpg',
            },
            {
                src: 'assets/images/ob/Object-Removed-001-10.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.clipping-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/clipping/c1.jpg',
            },
            {
                src: 'assets/images/clipping/c2.jpg',
            },
            {
                src: 'assets/images/clipping/c3.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $('.panorama-popup').magnificPopup({
        type: 'image',
        items: [{
                src: 'assets/images/panorama/Panorama-Stitching-Service-001.jpg',
            },
            {
                src: 'assets/images/panorama/Lr6_PanoMerge_Channelimg.png',
            },
            {
                src: 'assets/images/panorama/Panorama-Stitching-Service-001.jpg',
            }
        ],
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });



    //===== 












}(jQuery));