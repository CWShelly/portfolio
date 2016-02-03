var articles = [];

function Article (opts){
this.facebookUrl = opts.facebookUrl;
this.githubUrl = opts.githubUrl;
this.schoolUrl = opts.schoolUrl;
this.blog = opts.blog;
this.title = opts.title;

}
Article.prototype.toHtml = function(){
  // var $newArticle = $('article.template').clone();
  var $newArticle = $('article.template');
  var $newBlog = $('.blog');
  $newArticle.attr('data-category', this.schoolUrl);
  $newArticle.find('address a').html(this.author);

    $newArticle.find('#school a').attr('href', this.schoolUrl);
    $newArticle.find('#github a').attr('href', this.githubUrl);
    $newArticle.find('#facebook a').attr('href', this.facebookUrl);

  // $newBlog.find('.blog h1').html(this.title);
  $newArticle.find('.article-body').html(this.body);

  $newArticle.removeClass('template');
  $newBlog.find('h1').html(this.title);
  $newBlog.find('#blog').html(this.blog);
  return $newArticle;
  return $newBlog;


}

rawData.forEach(function(ele){
  articles.push(new Article(ele));
})

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
