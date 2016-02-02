function Article(school, github, facebook ){
    this.school = school;
    this.github = github;
    this.facebook = facebook;

}

var newArticle = new Article("https://www.codefellows.org/","https://github.com/cwshelly","https://www.facebook.com/profile.php?id=100011269957200" );



Article.prototype.toHtml=function(){
    var $newArticle;
    $newArticle.find("p a").attr("href", this.school);
    $newArticle.find("p a").attr("href", this.github);
    $newArticle.find("p a").attr("href", this.facebook);

};
