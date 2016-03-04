(function(module){
  var statsController = {};

  statsController.index = function(){
    Article.numWordsByTitle();
    statsView.index();
  };

  module.statsController = statsController;
})(window);
