$(".article-bg").on('click', function () {
    $('.article-bg').fadeOut();
});
$('.top-right').fadeIn().queue(function () {
    $('.top-left').fadeIn().queue(function () {
        $('.top-slogan-box').fadeIn();
        $('.top-slogan-box').css('display', 'flex');
    });
});

