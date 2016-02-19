(function(module){
  var aboutController = {};
  aboutController.index = function(){
    $('.github-display').hide();
    $('#display-about').show();
  };

  module.aboutController = aboutController;
})(window);
