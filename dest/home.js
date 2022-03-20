const box_banner =$('.banner .container .box');
const service = $('.service');
const box_service = $('.service .box_service');
const author = $('.author');
const about = $('.about');
const food_img = about.find('.food_img')
const customer = $('.customer');




// function
function hover_service_box() {
    box_service.each(function() {
        $(this).on({
            'mouseover': function() {
                let hover = $(this).find('.hover-content');
                let hoverHeight = hover.height() * -1;
                $(this).find('.icon-content').css("transform" ,`translateY(${hoverHeight}px)`);
            },
            'mouseout': function() {
                $(this).find('.icon-content').css("transform" ,`translateY(0px)`);
            }
        })
    })
}
function slider() {
    let slide = $('.customer .item');
    let li = $('.customer li');
    let next = $('.customer .next');
    let prev = $('.customer .prev');
    let Active = 0;

    li.each((index , item) => {
        item.onclick = function() {
            Active = index;
            slide.each(function() {
                $(this).css("transform" , `translateX(${Active * -100}%)`)
            })
            li.each(function() {
                $(this).removeClass('active')
            })
            item.classList.add('active')
        }
    })
    next.click(function() {
        Active++;
        if (Active == li.length) Active = 0;
        li[Active].click();
    }) 
    prev.click(function() {
        Active--;
        if (Active < 0) Active = li.length - 1;
        li[Active].click();
    })
    setInterval(function () {
        next.click();
    }, 3000)
}
function scroll() {
    $(window).scroll(function () {
        menu_show();
        backtopShow();
        box_fadein(box_service);
        food_img.each( function() {
            img_down($(this));
        })
        words_show();
        word_special(customer);
        text_banner() ;
    })
}
function handleEvent() {
    defaultFunction();
    hover_service_box();
    scroll();
    slider();
    boxBanner();
}
function boxBanner() {      //zoom img banner khi load xongS
    setTimeout(function() {
        $('.banner .box span').css({"transform" : "translateY(0%)" , "opacity" : 1})
    }, 400);
    setTimeout(function() {
        $('.banner .box h2').css({"transform" : "translateY(0%)" , "opacity" : 1})
    } , 600);
    setTimeout(function () {
        $('.banner .box a').css({"transform" : "translateY(0%) scale(1)" , "opacity" : 1})
    } , 800);

}
function text_banner() {
    let up = scrollY * -0.3;
    let down = up* -1;
    let opacity = 1- scrollY*0.002;
    let bot = scrollY / 20 -50;

    $('.banner .box span').css({
        'transform': `translateY(${up}px)`,
        'opacity': opacity
    })
    $('.banner .box h2').css({
        'transform': `translateY(${up}px)`,
        'opacity': opacity
    })
    $('.banner .box a').css({
        'transform': `translateY(${down}px)`,
        'opacity': opacity
    })
}