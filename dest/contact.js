// about function
function handleEvent() {
    scroll();
    defaultFunction();
    load_banner();
}
function scroll() {
    $(window).scroll(function () {
        menu_show();
        scroll_text_banner();
        backtopShow();
        $('.grid_item-img').each(function() {
            img_down($(this))
        })
        $('.grid_item .grid_item-box').each(function() {
            scroll_text($(this)[0] ,true ,"3s");
        })
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
