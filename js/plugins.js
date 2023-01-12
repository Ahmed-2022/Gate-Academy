$(document).ready(function(){
// change text inside slide index
    var words = ["Protection","Acadmy","Company"],i=0;

setInterval(function(){

    $(".Add_Animate_Text_Header").fadeOut(function(){

        $(this).html(words[( i=(i+1)%words.length)]).fadeIn();
    });
},2000)



$("#owl-one").owlCarousel({
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    lazyLoad: true,

      loop:true,

    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true
        }
    }
});
// owl two
$("#owl-two").owlCarousel({
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    // 
      loop:true,
    nav:true,
    lazyLoad: true,

    
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 2,
            nav: true
        }
    }

});
// owl three
$("#owl-three").owlCarousel({
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
  // 
    loop:true,
    lazyLoad: true,
    autoplay:true,
  responsive: {
      0: {
          items: 1,
          nav: true
      },
      768: {
          items: 2,
          nav: true
      },
      1000: {
          items:3,
          nav: true
      }
  }

});
//owl four 
$("#owl-four").owlCarousel({
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    lazyLoad: true,
    margin:10,
    loop:true,
    autoplay:true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        768: {
            items: 2,
            nav: true
        },
        1000: {
            items: 2,
            nav: true
        },

    }
});
// disable right click and ctrl u
//Creating a Countdown Timer

let Countdown = new Date("february 10, 2023 16:02:25").getTime();

let Timer = setInterval(function(){
 
    let TimeNow = new Date();
    let FindTime = Countdown - TimeNow;
    // console.log(Countdown);
    let Days = Math.floor(FindTime / (1000 * 60 * 60 * 24));
    let Hours = Math.floor((FindTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let Minutes = Math.floor((FindTime % (1000 * 60 * 60)) / (1000 * 60));
    let Seconds = Math.floor((FindTime % (1000 * 60)) / 1000);
    // var total = [Days,Hours,Minutes,Seconds] ;
     $(".TimeDown .Days p").html(Days);
     $(".TimeDown .Hours p").html(Hours);
     $(".TimeDown .Minutes p").html(Minutes);
     $(".TimeDown .Seconds p").html(Seconds);
    
    if(Seconds < 0){
        clearInterval(Timer);
        $(".TimeDown").hide();
        $(".TimeDown").html("<p class='alert alert-danger fs-3 mt-4' >There are no discounts at the moment</p>").toggle();
    }

},1000);



//libraries Fad and zomm
AOS.init({
    duration:2500
});
//libraries count to 

 
$('.counter').counterUp({
    delay: 10,
    time: 2500
  });

// scroll down
  $(".section_02 nav ul li a").on("click",function(){

    $('html,body').animate({
        scrollTop:$($(this).data("scroll")).offset().top-180
    },300)
    console.log($($(this).data("scroll")).offset().top)
  })

// start dynamic sign
 $(".btn_sign").on("click",function(){
     $(".dynamic_Content .sign-up,.dynamic_Content .sign-in").hide();
     $(".dynamic_Content .sign-up").show();
 })
// start dynamic tabs inside sign

$(".dynamic_Tabs ul li").on("click",function(){

    $(this).addClass("active").siblings().removeClass("active");
    $(".dynamic_Content .sign-up,.dynamic_Content .sign-in").hide();
    $($(this).data("content")).fadeIn();

})


// start style for button massage 
$(".Button_Massage ").on("click",function(){
    $(".check").hide();
    $(".Button_Massage .comment").toggle();
    $(".Button_Massage .x-close").toggle();
    $(".quick_Connect_Button").fadeToggle();
})
$(".submit").on("click",function(){
    let Name = $(".quick_Connect_Button form #Name").val();
    let Email = $(".quick_Connect_Button form #Email").val();
    let Help = $(".quick_Connect_Button form #Help").val();

    if(Name.length >= 4 && Email !="" && Help !=""){
        console.log("welcome")
        $(".quick_Connect_Button form").hide();
        $(".check").fadeIn();   
    }else{
        alert("Please fill in all input")
    }
    $(".Button_Massage ").on("click",function(){
        $(".quick_Connect_Button form").slideDown();
        $(".check").slideUp();   

    })
})

});
// scroll up button
$(document).ready(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() > 700) {

            $(".Button_Top_Fixed").fadeIn();
            $(".Button_Massage").fadeIn();
        } else {
            $(".Button_Top_Fixed").fadeOut()
            $(".Button_Massage").fadeOut()

        }
    })
    $(".Button_Top_Fixed").click(function () {

        $("html,body").animate({
    
            scrollTop: 0
    
        }, 800)
    })
    
})

