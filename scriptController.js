(function(module){
  var articlesController = {};

  Article.createTable();

articlesController.index = function(ctx, next){
  console.log(ctx.articles);
  scriptView.initIndexPage(ctx.articles);

};


articlesController.loadAll = function(ctx, next){
  console.log('loadalls');
  var articleData = function(allArticles){
    ctx.articles = Article.all;
    next();
  };

  if(Article.all.length){
    console.log('if');
    ctx.articles = Article.all;
    next();
  } else{
    console.log('else');
    Article.fetchAll(articleData);
  }
};

articlesController.loadByDate = function(ctx, next){
  console.log(ctx);
  console.log('date loades');
  var dateData = function(blogsByDate){
    ctx.articles = blogsByDate;
    console.log(ctx.articles);
    next();
  };
  // Article.findWhere('blogTitle', ctx.params.blogTitle.replace('+',''), dateData);

    Article.findWhere('blogTitle', ctx.params.blogTitle, dateData);


};

  module.articlesController = articlesController;

})(window);



    // (function(module) {
    //   var articlesController = {};
    //
    // Article.createTable();
    //   articlesController.index = function() {
    //     Article.fetchAll(articleView.initIndexPage);
    //
    //     $('main > section').hide();
    //     $('#articles').show();
    //   };
    //
    //   module.articlesController = articlesController;
    // })(window);
