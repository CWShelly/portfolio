var blogView ={};

blogView.handleDateSelect = function(){
  $('article').each(function(){
    if(!$(this).hasClass('publishedDate')){
      var val = $(this).find('h2').text();
      console.log('home');
      // var val = "broadway";
      var optionTag = '<option value= "' + val + '">' + val + '<option>';
      console.log(val);
      $('#blog-date-filter').append(optionTag);
    }
  });
};


blogView.handleDateFilter = function() {
  $('#blog-date-filter').on('change', function() {
    if ($(this).val()) {
      console.log('yes');
      $('#slug').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
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
  blogView.handleDateFilter();
  blogView.handleDateSelect();

});
