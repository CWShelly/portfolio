var blogView ={};

blogView.handleBlogSelect = function(){
  var $blog = $('.nav a:first');
  $blog.on('click', function(){
    $('.byline').toggle();
  });



};


$(document).ready(function(){
  blogView.handleBlogSelect();


});
