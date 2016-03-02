

(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#display');

    $about.find('ul').empty();
    console.log('ui');
  };

  var render = function(repo) {
    return($('<li>').html('<a href = "' + repo.html_url + '">' + repo.name + '</a>'));

  };

  repoView.index = function() {
console.log('repoviewindex');
    ui();

    $('#display ul').append(
      repos.with('full_name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
