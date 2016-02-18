

(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };


  var render = function(repo) {
    return($('li here').html(repo.name + ' - ' + repo.description));

  };


  repoView.index = function() {

    ui();


    $('#about ul').append(
      repos.with('description').map(render)


    );
  };

  module.repoView = repoView;
})(window);
