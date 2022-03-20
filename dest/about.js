const history = $('.history') 
const flex_group = $('.story .flex_group .item');
const video_btn = $('.contact_box .a-btn');
const popup = $('.popup');
const popup_close = $('.popup_close');



// about function
function handleEvent() {
    scroll();
    defaultFunction();
    load_banner();
    video();
}
function scroll() {
    window.onscroll = function() {
        menu_show();
        history_show();
        backtopShow();
        scroll_text_banner();
        scroll_text($('.history_bg div')[0] , false , "3s" , true);
        scroll_text($('.history_bg div')[1] , true);
        scroll_text($('.scroll_text p')[0], true);
        scroll_text($('.contact_box')[0], true);
        scroll_text(flex_group[2], true , "4s" , false , 0.1);
        scroll_text(flex_group[3], false, "4s" , false, 0.1);
        flex_group.each(function() {
            img_down($(this));
        })

    }
}
//function
function history_show() {
    let winBottom = window.innerHeight + window.pageYOffset;
    let his_boxes = history.find('.his_box');

    his_boxes.each(function (index , element) {
        if (winBottom >(getOffset(element).top + 250)) {
            element.classList.add('active')
         }
    })
}
function video() {
    video_btn.click(function(e) {
        e.preventDefault();
        popup.addClass('active')
    })
    popup_close.click(function() {
        popup.removeClass('active')
        let value = $('.popup iframe').attr('src');
        $('.popup iframe').attr('src' , value)
    })
    $(window).click(function(e) {
        if (e.target != video_btn[0] && e.target != popup_close[0]) 
            popup_close.click();
    })
}
function load_banner() {
    let h2 = $('.banner h2');
    let span = $('.banner span');
    let strong = $('.banner strong')
    setTimeout(function(){
        h2.addClass("show")
    } , 400);
    setTimeout(function() {
        span.addClass("show")
    }, 1000);
    setTimeout(function() {
        strong.addClass("show")
    } , 1000);
}
