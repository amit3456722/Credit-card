

//----------------mobile Navbar-----------------------

//setTimeout(function () {
//    var d = document.getElementsByClassName('toggle-btn')[0];
//    d.addEventListener('click', function () {
//        setTimeout(function () {
//            if (document.getElementById('mySidebar').getAttribute('style') == "width: 300px;") {
//                $('#mySidebar').css('width', '0px');
//            } else {
//                $('#mySidebar').css('width', '300px');
//            }

//        }, 100)
//    })
//}, 1000)

//setTimeout(function () {
//    var d = document.getElementsByClassName('toggle-btn')[0];
//    d.addEventListener('click', function () {
//        setTimeout(function () {
//            if (document.getElementById('mySidebar').getAttribute('style') == "width: 300px;") {
//                $('#mySidebar').css('width', '0px');
//            } else {
//                $('#mySidebar').css('width', '300px');
//            }

//        }, 100)
//    })
//}, 1000)
function toggleNav() {
    if (document.getElementById('mySidebar').getAttribute('style') == "width: 300px;") {
        $('#mySidebar').css('width', '0px');
    } else {
        $('#mySidebar').css('width', '300px');
    }
}

function closeNav() {
    document.getElementById('mySidebar').style.width = "0px";
}
//----------------end mobile Navbar-----------------------

//--------------onload popup------------------
$(window).load(function () {
    setTimeout(function () {
        $('#priceMini').modal('show');
    }, 2000);


    setInterval(function () {
        $('#priceMini').modal('hide');
    }, 6000);
});



$(document).ready(function () {
    setTimeout(function () {
        $('.fixed-popup').fadeIn(1000);
    }, 1000);
});

function PopupClose(event) {
    $(".onload-popup").fadeOut();

    $(".fixed-popup").fadeOut();
}
//--------------Mega Menu------------------
jQuery(document).on('click', '.mega-dropdown', function (e) {
    e.stopPropagation()
});

//---------------slick Slider------------------
$(document).on('ready', function () {
    $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1500,
        mobileFirst: true,
    });

    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            }

        ]
    });
    $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
    });
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    });
});

//-------DropDown------------
$(document).ready(function () {
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });
});

//----------------Active Menu----------------
$(document).ready(function () {
    setTimeout(function () {
        var url = window.location;
        $('header .navbar-default .navbar-nav > li > a[href="' + url + '"]').parent().addClass('active');
        $('header .navbar-default .navbar-nav > li > a').filter(function () {
            return this.href == url;
        }).parent().addClass('active');
    }, 200)
});

//-------------------End active menu-----------

//convert download
$(document).ready(function () {
    $(".dropdown-toggle").click(function () {
        $(".convert .dropdown-menu").toggle(500);
    });
});

//-------------Stickey Header----------------
$(window).scroll(function () {
    var scrollh = $(window).scrollTop();
    if (scrollh >= 100) {
        $(".lower-head").addClass("fixedHead");
        $(".fixedHead img").css({ "transition": "width 2s" });
    }
    else {
        $(".lower-head").removeClass("fixedHead");
        $(".fixedHead img").css({ "width": "inherit", "transition": "width 2s" });
    }
});



//-------------Stickey Header----------------
$(window).scroll(function () {
    var scrollh = $(window).scrollTop();
    if (scrollh >= 100) {
        $(".lower-head").addClass("fixedHead");
        $(".fixedHead img").css({ "transition": "width 2s" });
        $(".languageCovertSticky").css({ "display": "block" });
    }
    else {
        $(".lower-head").removeClass("fixedHead");
        $(".fixedHead img").css({ "width": "inherit", "transition": "width 2s" });
        $(".languageCovertSticky").css({ "display": "none" });
    }
});





