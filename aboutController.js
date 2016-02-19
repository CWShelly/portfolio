(function(module){
  var aboutController = {};
  aboutController.index = function(){
    // $('.github-display').hide();
    console.log('we');
    $('#display-about').hide();
  };

  module.aboutController = aboutController;
})(window);
