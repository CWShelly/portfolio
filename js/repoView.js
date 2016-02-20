

(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#display');

    $about.find('ul').empty();
    // $about.show().siblings().hide();
  };


  var render = function(repo) {
    // return($('li here').html(repo.name + ' - ' + repo.description));
    return($('<li>').html(repo.name + " - " + repo.description));

  };


  repoView.index = function() {

    ui();

    $('#display ul').append(
      repos.with('description').map(render)
    );
  };

  module.repoView = repoView;
})(window);
