var blogView ={};

blogView.handleBlogSelect = function(){
  var $blog = $('.nav a:first');
  $blog.on('click', function(){
    $('.byline').toggle();
  });



};



blogView.handleBlogSelect();
