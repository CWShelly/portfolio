(function(module){
  var statsView = {};


  var ui = function() {
    var $display = $('#display-stats');

    $display.find('ul').empty();
  };

  statsView.index = function(article){
    ui();
    var template = Handlebars.compile($('#stats-template').text());

    Article.numWordsByTitle().forEach(function(stats){
      $('#display-stats').append(template(stats));
      console.log(stats);
    });

  };

  module.statsView = statsView;
})(window);
