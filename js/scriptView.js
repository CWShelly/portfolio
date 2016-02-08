
var articleView ={};

articleView.populateFilters = function(){
  $('article').each(function(){
    if(!$(this).hasClass('blog-date')){
      console.log('x');
      var val = $(this).find('#blog-date').text();
      console.log(val);
      var optionTag = '<option value ="'+ val + '">'+ val + '</option>';

      if ($('#date-filters option[value="' + val + '"]').length === 0) {
        $('#date-filters').append(optionTag);
      }
    }
    console.log(optionTag);
  });
};



articleView.handleDateFilter = function(){
  $('#date-filters').on('change', function(){
    console.log('change fires');
    if($(this).val()){
      console.log($(this).val());
      $('article').hide();
      $('article[data-date="' + $(this).val() + '"]').show();
    }else{
      $('article').fadeIn();
      $('article.template').hide();
    }
  });
};

articleView.handleAbout = function(){
  $('#about-nav').on('click', function(){
    $('article').hide();
    $('#about-container').show();
  });
};

articleView.handleResume = function(){
  $('#Resume').on('click', function(){
    $('article').show();
    // $('#about-container').show();
  });
};


$(document).ready(function(){
  articleView.handleDateFilter();
  articleView.populateFilters();
  articleView.handleAbout();
  articleView.handleResume();

});
