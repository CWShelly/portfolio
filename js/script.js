
var articles = [];

function Article (opts){
  this.facebookUrl = opts.facebookUrl;
  this.githubUrl = opts.githubUrl;
  this.schoolUrl = opts.schoolUrl;
  this.publishedDate = opts.publishedDate;
  this.blog = opts.blog;
  this.title = opts.title;

}


Article.prototype.toHtml = function(){
  // var $newArticle = $('article.template').clone();
  var $newArticle = $('article.template').clone();
  // var $newBlog = $('article.blog');

  var $newBio = $('.byline');
  $newBio.find('#school a').attr('href', this.schoolUrl);
  $newBio.find('#github a').attr('href', this.githubUrl);
  $newBio.find('#facebook a').attr('href', this.facebookUrl);
  $newArticle.removeClass('template');
  $newArticle.find('.headline').html(this.title);
  $newArticle.find('.publishedDate').html(this.publishedDate);
  $newArticle.find('#blog').html(this.blog);

  return $newArticle;

};


rawData.forEach(function(ele){
  articles.push(new Article(ele));
});



articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
