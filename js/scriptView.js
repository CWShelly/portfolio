var blogView ={};

blogView.handleTitle = function(){
  $('article').each(function(){
    if(!$(this).hasClass('publishedDate'))
    {
      var val = $(this).find('h2').text();
      // var  val =$(this).(data-)
      // console.log(val);
       var optionTag = '<option value="' + val + '">' + val + '</option>';
      //  var optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#blog-date-filter option[value="' + val + '"]').length === 0) {
     $('#blog-date-filter').append(optionTag);
      // console.log(val);
      console.log(optionTag)
      // $('#blog-date-filter').append(optionTag);
    }
  }
  });
};

blogView.handleDateSelect = function() {
  $('#blog-date-filter').on('change', function() {
    if ($(this).val()) {
      console.log('yes');
      $('#slug').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#blog-date-filter').val('');
  });
};

blogView.handleBlogHandler = function(){
  var $blog = $('.nav a:first');
  $blog.on('click', function(){
    $('.byline').toggle();
  });

};


$(document).ready(function(){
  blogView.handleBlogHandler();
  // blogView.handleDatePopulater();
  // blogView.handleDateSelect();
  // blogView.handleDateFilter();
  blogView.handleTitle();

});
