var blogView ={};

blogView.handleDateSelect = function(){
  $('main').each(function(){
    if(!$(this).hasClass('template')){
      var val = $(this).find('address a').text();
      var optionTag = '<option value= "' + val + '">' + val + '<option>';
      $('blog-date-filter').append(optionTag);
    }
  });
};

blogView.handleBlogSelect = function(){
  var $blog = $('.nav a:first');
  $blog.on('click', function(){
    $('.byline').toggle();
  });

};


$(document).ready(function(){
  blogView.handleBlogSelect();
  blogView.handleDateSelect();

});
