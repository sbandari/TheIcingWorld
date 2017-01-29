$(document).ready(function () {
    /*$(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".panel1").fadeIn(500);
            $(".panel2").slideDown(1000);
            $(".panel3").slideDown(1500);
            $(".panel4").slideDown(1800);
        }
        else  {

                   $(".panel2").fadeOut(30);
                   $(".panel3").fadeOut(30);
                   $(".panel4").fadeOut(30);
               }
    });*/
    $(".panel1 img, .panel2 img, .panel3 img,.panel4 img").hover(function () {
        $(this).css({
            "transform": "scale(1.2)",
            "border-color": "red"
        });
    }, function () {
        $(this).css("transform", "none");
    });
    //1
    $(".image1").mouseover(function () {
        $(".functionButton1").css("display", "block");
    });
    $(".image1").mouseout(function () {
        $(".functionButton1").css("display", "none");
    });
    //2
    $(".image2").mouseover(function () {
        $(".functionButton2").css("display", "block");
    });
    $(".image2").mouseout(function () {
        $(".functionButton2").css("display", "none");
    });
    //3
    $(".image3").mouseover(function () {
        $(".functionButton3").css("display", "block");
    });
    $(".image3").mouseout(function () {
        $(".functionButton3").css("display", "none");
    });
    //4
    $(".image4").mouseover(function () {
        $(".functionButton4").css("display", "block");
    });
    $(".image4").mouseout(function () {
        $(".functionButton4").css("display", "none");
    }); //5
    $(".image5").mouseover(function () {
        $(".functionButton5").css("display", "block");
    });
    $(".image5").mouseout(function () {
        $(".functionButton5").css("display", "none");
    }); //6
    $(".image6").mouseover(function () {
        $(".functionButton6").css("display", "block");
    });
    $(".image6").mouseout(function () {
        $(".functionButton6").css("display", "none");
    });
});