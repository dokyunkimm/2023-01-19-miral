$(function() {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }

    function numCounter01() {
        cntFlg = false;
        var countConTxt= 1979;
        $({ val : 0 }).animate({ val : countConTxt }, {
            duration: 2000,
            step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".countCon").text(num);
            },
            complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".countCon").text(num);
            }
        });
    }
    
    
    
    // 공유하기
    // $('.mrlHdr .innr .shrWrp .shrBtnBx > a').click(function() {
    //     $('.shrItmWr').slideToggle();
    // });
 

    // 마우스 스크롤
    $('.mrlCntnr .vslSct > div.mouseIcnScrll > a').click(function() {
        $('html, body').animate({
            scrollTop : $('.sct01').offset().top
        })
    });

    
    

    setTimeout(function() {
        $('.ttlFdUp').addClass('on');
    }, 300)

    // 섹션 02 부모 높이
    $('.sct02').css('height', sct02H);
    

    let cntFlg = true;
    let cntFlg2 = true;
    var sct02H = 3091;
    var sct02_fntSze = 60;
    var sct02_lneHgh = 80;
    var sct02_mxFntSze = 1500;
    var sct02_mxLneHgh = 2054;
    var sct02_mxFntSze_times = 0.6;
    var cnt02_offsetTop = 0.5;
    var wndOtw = $(window).outerWidth();
    var wndOth = $(window).outerHeight();
    var wndIth = $(window).innerHeight();
    var winSclTop = $(window).scrollTop();
    if(wndOtw <= 540){
        sct02_fntSze = 23;
        sct02_lneHgh = 43;

        sct02_mxFntSze = 1200;
        sct02_mxLneHgh = 1500;
        sct02_mxFntSze_times = 0.45;


        sct02H = 1500;

        cnt02_offsetTop = 0.8;
    } else if(wndOtw <= 1024){
        sct02_fntSze = 42;
        sct02_lneHgh = 62;

        sct02_mxFntSze = 2100;
        sct02_mxLneHgh = 3100;
        sct02_mxFntSze_times = 0.5;

        sct02H = 2300;
    } else {
        sct02_fntSze = 60;
        sct02_lneHgh = 80;

        sct02_mxFntSze = 1500;
        sct02_mxLneHgh = 2054;
        sct02_mxFntSze_times = 0.6;
        
        sct02H = 2500;

        cnt02_offsetTop = 0.5;
    }
    

    $(window).resize(function(){
        wndOth = $(window).outerHeight();
        wndOtw = $(window).outerWidth();
        wndIth = $(window).innerHeight();
        winSclTop = $(window).scrollTop();
        if(wndOtw <= 540){
            sct02_fntSze = 23;
            sct02_lneHgh = 43;
    
            sct02_mxFntSze = 1200;
            sct02_mxLneHgh = 1500;
            sct02_mxFntSze_times = 0.45;
    
            sct02H = 1500;

            cnt02_offsetTop = 0.8;
        } else if(wndOtw <= 1024){
            sct02_fntSze = 42;
            sct02_lneHgh = 62;
    
            sct02_mxFntSze = 2100;
            sct02_mxLneHgh = 3100;
            sct02_mxFntSze_times = 0.5;
    
            sct02H = 2300;
        } else {
            sct02_fntSze = 60;
            sct02_lneHgh = 80;
    
            sct02_mxFntSze = 1500;
            sct02_mxLneHgh = 2054;
            sct02_mxFntSze_times = 0.6;
            
            sct02H = 2500;

            cnt02_offsetTop = 0.5;
        }

        // 섹션 02 부모 높이
        $('.sct02').css('height', sct02H);

        // 메인 히어로 영역
        $('.mrlCntnr .vslSct').css('height', wndIth);
    });


    // 메인 히어로 영역
    $('.mrlCntnr .vslSct').css('height', wndIth);
    
    
    
    $(window).scroll(function() {
        winSclTop = $(window).scrollTop();
        // 헤더
        if(wndOtw >= 540) {
            if(winSclTop >= $('.sct01').offset().top && winSclTop < $('.sct01').offset().top + wndOth * 0.15 ) {
                $('.mrlHdr').addClass('blk');
            } else if( winSclTop > $('.sct01').offset().top + wndOth * 0.15 && winSclTop + wndOth <= $('.sct01').offset().top + $('.sct01').outerHeight() ) {
                $('.mrlHdr').removeClass('blk');
                $('.asd .rgt > ul > li.prg .prgrssBrWrp').css('background-color', 'rgba(255,255,255,0.15)');
                $('.mrlHdr .innr .mrlLogo > a').css('transition', 'all 1s');
                $('.mrlHdr .innr .hrdNav ul > li > a > span').css('transition', 'all 1s');
            } else if( winSclTop >= $('.sct02').offset().top - 100 ) {
                $('.mrlHdr').addClass('blk');
            } else {
                $('.mrlHdr').removeClass('blk');
                $('.asd .rgt > ul > li.prg .prgrssBrWrp').removeAttr('style');
                $('.mrlHdr .innr .mrlLogo > a').removeAttr('style');
                $('.mrlHdr .innr .hrdNav ul > li > a > span').removeAttr('style');
            }
        } else {
            if(winSclTop >= $('.txtBx01').offset().top && winSclTop <= $('.txtBx01').offset().top + $('.txtBx01').innerHeight()) {
                $('.mrlHdr').addClass('blk');
            } else if(winSclTop >= $('.sct01 .cnt02').offset().top && winSclTop <= $('.sct01 .cnt02').offset().top + $('.sct01 .cnt02').innerHeight()) {
                $('.mrlHdr').removeClass('blk');
            } else if(winSclTop >= $('.sct02').offset().top ) {
                $('.mrlHdr').addClass('blk');
            } else {
                $('.mrlHdr').removeClass('blk');
            }
        }

        if( $('.jsSct01').offset().top <= winSclTop ){
            $('.asd').addClass('shw');
        } else {
            $('.asd').removeClass('shw');
        }
        

        
        // 섹션 01 타이틀 fade up
        if(winSclTop + wndOth / 3 >= $('.sct01').offset().top ){
            $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').addClass('on');
            // 숫자 카운팅
            if(cntFlg){
                numCounter01();
            }
        } else {
            $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').removeClass('on');
            numCounter01();
        }
        
        // 첫 번째 새싹 폰트 
        if(winSclTop >= $('.txtBx01').offset().top){
            $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').css('opacity', ( 1.1 - ((winSclTop - $('.sct01 .txtBx01 .scrllBx01').offset().top) / $('.sct01 .txtBx01 .scrllBx01').outerHeight() * 2 ) ) )
        }
        
        // 새싹 이미지
        if($('.cnt02').offset().top  <= winSclTop + wndOth * 0.85 ) {
            $('.bgSizeChnge').addClass('sizeUp');
            $('.bgDmmd').css('opacity', '1');

            if(wndOtw >= 540) {
                $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').css('color', '#fff');
            }
            
        } else {
            $('.bgSizeChnge').removeClass('sizeUp');
            $('.bgDmmd').css('opacity', '0');

            $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').removeAttr('style');
        }

        if(winSclTop + wndOth * cnt02_offsetTop >= $('.cnt02').offset().top) {
            if(cntFlg2){
                cntFlg2 = false;
                var countConTxt2= 1993;
                $({ val : 1979 }).animate({ val : countConTxt2 }, {
                    duration: 1000,
                    step: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".countCon2").text(num);
                    },
                    complete: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".countCon2").text(num);
                    }
                });
            }
        } else {
            if(cntFlg2 != true){
                cntFlg2 = true;
                var countConTxt2= 1993;
                $({ val : 1979 }).animate({ val : countConTxt2 }, {
                    duration: 1000,
                    step: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".countCon2").text(num);
                    },
                    complete: function() {
                    var num = numberWithCommas(Math.floor(this.val));
                    $(".countCon2").text(num);
                    }
                });
            }
        }
        


        // 이미지 스크롤 모션
        if(winSclTop + (wndOth / 2) >= $('.miralHstryImg > div .hstryImgCntWrp').offset().top ){
            $('.miralHstryImg > div > div > .lftImgBx > ul > li').css({
                'transform': 'translateY(' + ( 120 -(winSclTop / 20)) + 'px)', 
            });
            $('.miralHstryImg > div > div > .rghtImgBx > ul > li').css({
                'transform': 'translateY(' + ( -120 + (winSclTop / 20)) + 'px)', 
            });
        } else {
            $('.miralHstryImg > div > div > .lftImgBx > ul > li').css({
                'transform': 'translateY(0)', 
            });
            $('.miralHstryImg > div > div > .rghtImgBx > ul > li').css({
                'transform': 'translateY(0)', 
            });
        }

        
        
        // 텍스트
        if(winSclTop + wndOth / 2 >= $('.sct02').offset().top) {
            $('.sct02 > div .txtCnt01 .fdUp').addClass('active')
        } else {
            $('.sct02 > div .txtCnt01 .fdUp').removeClass('active')
        }

        if(winSclTop - (wndOth / 5) < $('.sct02').offset().top){
            $('.sct02 > div .txtCnt01 > h2').removeAttr("style");
            $('.sct02 > div .txtCnt01 > h2').removeClass('on');
        }

        // if(winSclTop >= $('.sct02').offset().top && winSclTop + wndOth <= $(".sct02").offset().top + $(".sct02").outerHeight()){
        if(winSclTop - (wndOth / 5) >= $('.sct02').offset().top && winSclTop + wndOth <= $(".sct02").offset().top + $(".sct02").outerHeight()){
            $('.sct02 > div .txtCnt01 > h2').addClass('on');
            $('.sct02 > div .txtCnt01 > h2').css({
                "font-size":(sct02_fntSze + ((sct02_mxFntSze - sct02_fntSze) * ((winSclTop - (wndOth / 5) - $(".sct02").offset().top) / ($(".sct02").outerHeight() - wndOth)) )) + "px",
                "line-height" : (sct02_lneHgh + ((sct02_mxLneHgh - sct02_lneHgh) * ((winSclTop - (wndOth / 5) - $(".sct02").offset().top) / ($(".sct02").outerHeight() - wndOth)))) + "px",
                '-webkit-text-fill-color' : "rgba(0,0,0,"+(1 - (winSclTop - $(".sct02").offset().top) / ($(".sct02").outerHeight() - wndOth))+")"
            })
        }


        
        if(winSclTop + wndOth >= $('.sct02').offset().top + $('.sct02').outerHeight() * 0.80) {
            $('.sct02 > div .txtCnt02 .fdUp').addClass('active');
            $('.sct02 > div .txtCnt01 > h2').css({
                'font-size': sct02_mxFntSze * sct02_mxFntSze_times,
                'line-height': sct02_mxLneHgh + 'px',
            })
            $('.sct02 > div .txtCnt01').removeClass('opcty');
            $('.sct02 > div .txtCnt02 > h2 .txtBg ').addClass('bgClr');
        } else {
            $('.sct02 > div .txtCnt02 .fdUp').removeClass('active');
            $('.sct02 > div .txtCnt01').addClass('opcty');
            $('.sct02 > div .txtCnt02 > h2 .txtBg ').removeClass('bgClr');
        }

        // 섹션 03 텍스트 배경색 채우기
        if( winSclTop +  wndOth / 1.8 >= $('.sct03 .txt').offset().top ){
            $('.sct03 .txt > p .drkGreenBg').addClass('bgClr');
        } else {
            $('.sct03 .txt > p .drkGreenBg').removeClass('bgClr');
        }

        
        // 동영상 fade up
        if( winSclTop + wndOth / 2  >= $('.sct04').offset().top ){
            $('.vdoCntWrp > ul > li').addClass('active');
        } else {
            $('.vdoCntWrp > ul > li').removeClass('active');
        }
        // 섹션 02 부모 높이
        $('.sct02').css('height', sct02H);

        

        // 모바일 새싹 배경 이미지 fixed
        if(winSclTop >= $('.sct01').offset().top && winSclTop + wndOth <= $('.sct01').offset().top + $('.sct01').outerHeight() ){
            $('.mobHstryBg').addClass('mobFxd');
        } else {
            $('.mobHstryBg').removeClass('mobFxd');
        }




    });

    
    
    

});

(function() {

    // 전체 스크롤 양
    let scrollTop = 0;
    window.addEventListener('scroll', function() {
        scrollTop = window.scrollY;
        let footer = document.querySelector('.mrlFt');
        let prgrssBr = document.querySelector('.prgrssBr');
        maxScrllVlu = scrollTop / (document.body.offsetHeight - window.innerHeight - footer.offsetHeight);
        prgrssBr.style.height = (maxScrllVlu * 100) + '%';


        // if((scrollTop + window.innerHeight) >= footer.offsetTop + 40) {
        //     document.querySelector('.asd').classList.add('absol');
        //     document.querySelector('.asd').style.bottom = (footer.offsetHeight + 40) + 'px';
        // } else {
        //     document.querySelector('.asd').classList.remove('absol');
        //     document.querySelector('.asd').style.bottom = '70px';
        //     if(window.innerWidth <= 540){
        //         document.querySelector('.asd').style.bottom = '40px';
        //     }
        // }

        // 모바일 연도별 이미지 영역
        let imgBx = document.querySelectorAll('.mobcnt > div > div');
        const cnt02 = document.querySelector('.sct01 .cnt02');
        for(let i = 0; i < imgBx.length; i++){
            if(scrollTop - window.innerHeight * 1.25 >= imgBx[i].offsetTop ){
                imgBx[i].classList.add('on');
            } else {
                imgBx[i].classList.remove('on');
            }

        }
    });

    

    window.addEventListener('resize', function() {
        scrollTop;
        window.innerWidth;
        window.innerHeight;
    });
})();





