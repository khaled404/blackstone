$(function(){
    $('.main-nav .collaps ,.nav-overlay .collaps,.search-box ,.search-overlay .collaps').on('click',function () {
        $('.main-nav .collaps').toggleClass('on');
    });
    $('.search-box ,.search-overlay .collaps').on('click',function () {
        $('.search-overlay').toggleClass('active');
        $('body').toggleClass('overflowHidden');
    });
    $('.main-nav .collaps ,.nav-overlay .collaps').on('click',function () {
        $('.nav-overlay').toggleClass('active');
        $('body').toggleClass('overflowHidden');
    });
    new WOW().init();

    //map
    var adresse = "<img style='width:50px; text-align: left; display:inline-block; margin-right: 10px; vertical-align: sub;' src='img/logofooter.png'> <div style='display:inline-block;'>Blackstone<br>0540000000<br>info@blackstone.sa</div>";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(24.8629889, 46.5980617),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: 'images/pin.png',

    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));
    var arr = [1, 2, 3];
    var j;
    for (j = 0; j < arr.length; j++) {
        console.log(arr[j]);
    }
    if($(window).width() <= 991){
        $(".why-containr ,  .services-containr .row").addClass("owl-carousel owl-theme");
    }

    if($(window).width() <= 991){
        $('.drop > a').on('click',function () {
            $('.sup-link').stop().slideToggle();
        });
    }

    $('.owl-carousel').owlCarousel({
        autoplay: false,
        rtl:true,
        loop:true,
        items: 5,
        dots: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            992:{
                items:5
            },
        },
        navText: ["<span></span>","<span></span>"]
    });


});