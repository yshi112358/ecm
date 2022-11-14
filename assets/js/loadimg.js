function Article(_title, _content, _img, _date) {
    this.title = _title;
    this.content = _content;
    this.img = _img;
    this.date = _date;
}

var article = [];
d3.csv("https://docs.google.com/spreadsheets/d/1bntxqXyM38BB3iKHJ035wKEBI1gGYDBDCZp-KBok9jM/export?format=csv&range=A3:D", function (error, data) {
    for (let i = data.length - 1; i >= 0; i--) {
        article[i] = new Article(data[i].Title, data[i].Content, data[i].Img, data[i].Timestamp);
        $('.recent-page').append(
            "<button class='article' id='article" + i + "'>" +
            "<img src=" + article[i].img.replace("https://drive.google.com/open?id=", "https://drive.google.com/uc?id=") + " class='thumbnail'>" +
            "<div class='title'>" + article[i].title + "</div>" +
            "<div class='content'>" + article[i].content + "</div>" +
            "</button>");
    }
    $(".article").on('click', function () {
        var id = $(this).attr('id');
        loadArticle(article[Number(String(id).replace("article", ""))], id);
        $('.article-bg').fadeIn();
        $('.article-bg').css('display', 'flex');
    });
});

function loadArticle(data) {
    $('.article-detail .article-title').html(data.title);
    $('.article-detail .article-content').html(data.content);
    $('.article-detail .article-thumbnail').attr('src', data.img.replace("https://drive.google.com/open?id=", "https://drive.google.com/uc?id="));
}