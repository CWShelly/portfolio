(function(module){
  var articlesController = {};

  Article.createTable();

  articlesController.index = function(){

    Article.fetchAll(scriptView.initIndexPage);



    $('main > section').hide();
    $('#articles').show();
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
