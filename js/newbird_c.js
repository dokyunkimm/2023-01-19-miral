if($(window).scrollTop() >= $('.jsSct01').offset().top ){
    $('.sldWrp01').css({
        'opacity': '0',
        'pointer-events': 'none',
    });
}


$(function(){

    //sub02
    var swiper = new Swiper(".wrapSub02Swiper", {
        navigation: {
            nextEl: ".swiperBtnNext",
            prevEl: ".swiperBtnPrev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
  
        slidesPerView: "auto",
        centeredSlides: true,
        // spaceBetween: 100,
        loop: true,

        // slidesPerView: 1,
        // spaceBetween: 0,    
    
        // // 마지막에 끊길때..
        // loopAdditionalSlides: 1,
    });

    var sct01AddPd = 80;
    if(wndOtrW <= 540){

    } else if(wndOtrW <= 1024){
        
    } else {
        sct01AddPd = 80;
    }

    var wndOtrW = $(window).outerWidth();
    var wndOtrH = $(window).outerHeight();
    var wndScrlTp = $(window).scrollTop();
    $(window).resize(function() {
        wndOtrH = $(window).outerHeight();
        wndScrlTp = $(window).scrollTop();

        if(wndOtrW <= 540){

        } else if(wndOtrW <= 1024){
            
        } else {
            sct01AddPd = 80;
        }
    });

    

    $(window).scroll(function() {
        wndOtrH = $(window).outerHeight();
        wndScrlTp = $(window).scrollTop();
        
        if(wndScrlTp >= $('.jsSct01').offset().top ){
            $('.sldWrp01').css('position', 'relative');
            $('.sldWrp02').css('margin-top', '0px');
        } else {
            // $('.sldWrp01').css('position', 'fixed');
            // $('.sldWrp02').css('margin-top', $('.sldWrp01').outerHeight());
            $('.sldWrp01').removeAttr('style');
            $('.sldWrp02').removeAttr('style');
        }
        

    });




    


}); //end