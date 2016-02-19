(function(module){
  var articlesController = {};

  Article.createTable();

  articlesController.index = function(){

    Article.fetchAll(scriptView.initIndexPage);

console.log('fetchAll(scriptView.initIndex run)');

    // $('main > section').hide();
    // $('#articles').show();
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
