const bannerS = $('.bannerS');
const bannerS_box = $('.bannerS .bannerS_box');
const h2 = $('.bannerS .bannerS_box .h2 h2');
const p = $('.bannerS .bannerS_box .p p');
const bannerS_img = $('.bannerS .bannerS_img');
const bannerS_img_items = $('.bannerS .bannerS_img-item');
const box_img = $('.bannerS .bannerS_img .box-img');
const animateBtn = $('.animateBtn');
const next = $('.bannerS .bannerS_control .next')
const prev = $('.bannerS .bannerS_control .prev')
const album = $('.album')
const imgs = $('.album .item');
const more_btn = $('.album .album_btn a');
const popup = $('.popup');

let current = 0;
let num_item = box_img.length;
let height_slider = num_item * 100;
let tran = (100 / height_slider) * 100;


// main function
function handleEvent() {   
    scroll();
    defaultFunction();
    hover();
    click();
    slider_gallery();
}
function slider_gallery() {
    set_height_sldier(height_slider);
}
// event function
function scroll() {
    $(window).scroll(function() {
        menu_show();
        backtopShow();
        img_fadein(imgs);
    })
}
function hover() {
    animateBtn.on({
        'mouseover': function () {
            box_img[current].classList.add('active')
            $(this).find('.line').addClass('none')
        },
        'mouseout': function () {
            box_img[current].classList.remove('active')
            $(this).find('.line').removeClass('none')
        }
    })
}
function click() {
    next.click(function() {
        current++;
        slider_translate(current , current - 1);
    })
    prev.click(function() {
        current--;
        slider_translate(current , current + 1);
    })
    imgs.each(function () {
        $(this).click(function() {
            let value = $(this).find('img').attr('src');
            popup.find('img').attr('src' , value);
            popup.addClass('active')
        })
    })
    popup.find('.popup_close').click(function() {
        popup.removeClass('active')
    })
}
// other function
function set_height_sldier(number) {
    bannerS_img.css("height" , `${number}%`);
    bannerS_img_items.each(function() {
       $(this).css("height" , `${tran}%`);
    })
}
function check_index() {
    if (current == num_item - 1)
        next.addClass('none');
    else if (current == 0)
        prev.addClass('none')
    else 
        if (next.hasClass('none') || prev.hasClass('none')) {
            next.removeClass('none');
            prev.removeClass('none')
        }
}
function translate() {
    bannerS_img.css('transform' , `translateY(${current * tran * -1}%)`)
}
function slider_translate(current1 , current2 ) {
        check_index();
        box_img.each(function() {
            $(this).addClass('small');
        })
        h2[current2].classList.remove('active')
        p[current2].classList.remove('active')
        animateBtn.find('a').removeClass('show');
        setTimeout(function() {
            h2[current1].classList.add('active')
        } , 300)
        setTimeout(function() {
            p[current1].classList.add('active')
        } , 300)
        setTimeout(function() {
            animateBtn.find('a').addClass('show');
        } , 200)

        setTimeout(translate , 400);
        setTimeout(function() {
            box_img.each(function () {
                $(this).removeClass("small")
            })
        } , 800);
}