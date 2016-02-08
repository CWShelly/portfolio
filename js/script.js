var articles =[];

function Article (opts) {
  this.schoolURL = opts.schoolURL;
  this.githubURL = opts.githubURL;
  this.facebookURL = opts.facebookURL;
  this.publishedDate = opts.publishedDate;
  this.title = opts.title;
  this.blog = opts.blog;
}

Article.prototype.toHtml = function(){
  var template = Handlebars.compile($('#article-template').text());
  console.log("toHtml");
  return template(this);

}

rawData.forEach(function(ele){
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
