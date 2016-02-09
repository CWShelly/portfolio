// var articles =[];

Article.all =[];
function Article (opts) {
  this.schoolURL = opts.schoolURL;
  this.githubURL = opts.githubURL;
  this.facebookURL = opts.facebookURL;
  this.publishedDate = opts.publishedDate;
  this.title = opts.title;
  this.blog = opts.blog;
};

Article.prototype.toHtml = function(){
  var template = Handlebars.compile($('#article-template').text());
  console.log('toHtml');
  return template(this);
};

Article.loadAll = function(){
  rawData.forEach(function(ele){
    console.log('line 21');
    console.log(rawData);
  })
}

Article.loadAll();

Article.fetchAll = function(){
  console.log('fetch all here');
}
