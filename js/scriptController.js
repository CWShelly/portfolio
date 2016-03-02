(function(module){
  var articlesController = {};

  Article.createTable();

  articlesController.index = function(ctx, next){
    console.log(ctx.articles);
    scriptView.initIndexPage(ctx.articles);

  };


  articlesController.loadAll = function(ctx, next){
    var articleData = function(allArticles){
      ctx.articles = Article.all;
      next();
    };

    if(Article.all.length){
      ctx.articles = Article.all;
      next();
    } else{
      Article.fetchAll(articleData);
    }
  };

  articlesController.loadByDate = function(ctx, next){
    console.log(ctx);
    var dateData = function(blogsByDate){
      ctx.articles = blogsByDate;
      console.log(ctx.articles);
      next();
    };

    Article.findWhere('blogTitle', ctx.params.blogTitle, dateData);


  };

  module.articlesController = articlesController;

})(window);
