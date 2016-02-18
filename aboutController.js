(function(module){
  var aboutController = {};
  aboutController.index = function(){
    $('.github-display').hide();
    $('#display-about').show();
  };
  module.aboutController = aboutController;
})(window);

//
// scriptView.handleAbout = function(){
//   console.log('about');
//   $('#about').on('click', function(){
//     // $('.feature-template').hide();
//     // $('#work-template').show();
//     $('.github-display').hide();
//     $('#display-about').show();
//   });
// };
