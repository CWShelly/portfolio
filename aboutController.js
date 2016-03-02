(function(module){
  var aboutController = {};
  aboutController.index = function(){
    // repos.requestRepos(repoView.index);


    console.log('about index');
    repos.requestRepos(repoView.index);
  };

  console.log('about');

  module.aboutController = aboutController;
})(window);
