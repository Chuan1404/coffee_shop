const body = $('body');
const nav = $('nav');
const subnav = $('.subnav');
const X = $('.subnav .close');
const close_btn = $('.subnav .subnav_close');
const _3dots = $('._3dots');
const banner = $('.banner');
const words = $('.box_intro .words');
const load = $('.loader');
const backtop = $('.backtop');
$(document).ready(function() {
    setTimeout(loading , 1000);
    setTimeout(handleEvent , 1000);
})

function defaultFunction() {
    beforeload();
    nav_show();
    resize();
    backTop();
}
// function
function beforeload() {
    window.onbeforeunload = function() {
        load.show();
        window.scrollTo(0,0);
    }
}
function nav_show() {
    _3dots.each(function() {
        $(this).click(function() {
            subnav.addClass('active')
            banner.addClass('active')
            body.css("overflow" , "hidden");
            $('body').addClass('active')
            window.scrollTo(0,0);
        })
    })

    X.click(function () {
        subnav.removeClass('active');
        banner.removeClass('active');
        body.css("overflow" , "visible")
        $('body').removeClass('active')
    })
    


}
function resize() {
    $(window).resize(function() {
        if (window.innerWidth > 991) {
            if (subnav.hasClass('active')) {
                subnav.removeClass('active');
                banner.remove('active')
                body.css("overflow" , "visible")
            }
        }
    })
}
function loading() {
    load.hide();
    body.css("overflow" , "visible");
}
function backTop() {
    backtop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        } , 400)
    })
}
function backtopShow() {
    if (window.pageYOffset > 400)
        backtop.css("display" , "flex");
    else 
        backtop.css("display" , "none");
}
// animation
function menu_show() {
    if (window.pageYOffset <= 0)
    {
        nav[0].classList.add('active');
        nav[1].classList.remove('active');
    }
    else 
    {
        nav[0].classList.remove('active');
        nav[1].classList.add('active');
    }
}
function box_fadein(children) {
    let winBottom = window.innerHeight + window.pageYOffset;
    children.each(function(index) {
        if (winBottom > ($(this).offset().top + 400))
        {
           $(this).css("transition-delay" , `${index * 0.2}s`);
           $(this).addClass('show')
        }
    })
}
function img_fadein(arrImg) {
    let winBottom = window.innerHeight + window.pageYOffset;
    arrImg.each(function () {
        if (winBottom > ($(this).offset().top + 200))
           $(this).addClass('show')
    })
}
function img_down(element) {
    let winBottom = window.innerHeight + window.pageYOffset;
        if (winBottom > (element.offset().top + 200))
           element.addClass('show')
}
function words_show() {
    let winBottom = window.innerHeight + window.pageYOffset;
    words.each(function() {
        let children = $(this).children();
        children.each(function () {
            if (winBottom > ($(this).offset().top + 200))
                $(this).addClass('show');
        }) 
    })
}
function word_special(element) {
    let winBottom = window.innerHeight + window.pageYOffset;
    if (winBottom > (element.find('.words').offset().top + 200))
        {
            $('.words h2').addClass('show');
            $('.words strong').addClass('show')
        }
}
function scroll_text(item , down = true , time = "4s" , rotate = false , alpha = 0.3) {
    let winTop = window.pageYOffset;
    let winBottom = window.innerHeight + winTop;
    let itemTop = getOffset(item).top;
    let itemBottom = itemTop + item.offsetHeight;
    if (winBottom >= itemTop && winTop <= itemTop) {
        let tran;
        if (down) tran = (winBottom-itemBottom) * alpha * -1;
        else tran = (winBottom-itemBottom) * alpha;
        if (!rotate) {
            Object.assign(item.style , {
                "transform" : `translateY(${tran}px)`,
                "transition": `transform ${time} cubic-bezier(.1,1.26,1,.9)`
            })
        }
        else {
            Object.assign(item.style , {
                "transform" : `translateY(${tran}px) rotate(-15deg)`,
                "transition": `transform ${time} cubic-bezier(.1,1.26,1,.9)`
            })
        }
    }
}
function scroll_text_banner() {
    let test = scrollY*-0.3 + "px";
    let test2 = scrollY*0.3 + "px";
    let opacity = 1- scrollY*0.002;
    
    banner.find('strong').css({
        "transform": `translateY(${test})`,
        "opacity" : opacity,
        "transition": '0.2s'
    })
    banner.find('h2').css({
        "transform": `translateY(${test2})`,
        "opacity" : opacity,
        "transition": '0.2s'
    })
    banner.find('span').css({
        "transform": `translateY(${test2})`,
        "opacity" : opacity,
        "transition": '0.2s'
    })
}
// other
function getOffset(el) {        // lấy tọa độ của 1 phần tử
    let rect = el.getBoundingClientRect();
    return {
        top: rect.top + window.pageYOffset
    }
}