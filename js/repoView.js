

(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#display-work');

    $about.find('ul').empty();
  };

  var render = function(repo) {
    return($('<li>').html(repo.name));

  };

  repoView.index = function() {

    ui();

    $('#display-work ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
