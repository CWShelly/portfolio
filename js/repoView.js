

(function(module) {
  var repoView = {};

  // var ui = function() {
  //   var $about = $('.github-display');
  //
  //   $about.find('#display-about').empty();
  //   // $about.show().siblings().hide();
  // };


  var render = function(repo) {
    // return($('li here').html(repo.name + ' - ' + repo.description));

  };


  repoView.index = function() {
    //
    // ui();


    $('#display-about').append(
      // repos.with('description').map(render)
          // repos.with('description').map();
// 'placeholder text'

    );
  };

  module.repoView = repoView;
})(window);
