$('.slider-parent').slick({
    dots: false,
    infinite: true,
    speed: 300,
    nextArrow: ".next",
    prevArrow: ".prev",
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    infinite: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});