

(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#display-work');

    $about.find('ul').empty();
  };

  var render = function(repo) {
    return($('<li>').html('<a href = "' + repo.html_url + '">' + repo.full_name + '</a>'));

  };

  repoView.index = function() {

    ui();

    $('#display-work ul').append(
      repos.with('full_name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
