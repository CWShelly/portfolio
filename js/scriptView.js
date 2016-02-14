
var scriptView = {};


scriptView.populateFilters = function(){
  console.log('pop filters run');

  $('main').each(function(){
    if(!$(this).hasClass('date')){
      var val = $(this).find('#date').text();
      // var val = 'epic';
      console.log(this);
      var optionTag = '<option value ="'+ val + '">'+ val + '</option>';
      console.log(optionTag);
      if ($('#date-filters option[value="' + val + '"]').length === 0) {
        $('#date-filters').append(optionTag);

      }
    }
  });
};


scriptView.handleDateFilter = function(){
  $('#date-filters').on('change', function(){
    console.log('changed fires');
    if($(this).val()){
      console.log($(this).val());
      $('#main-templates').hide();
    }
  });
};


scriptView.initIndexPage = function(){
  console.log('initIndex run');
  // scriptView.populateFilters();

  Article.all.forEach(function(a){

    $('.content3-placeholder').append(a.toHtml());
    console.log('the line after appendtohtml');

$(".content2-placeholder").append(a.toWanderHtml());
console.log('the line after Wanderappendtohtml');

  });

// scriptView.handleDateFilter();
  scriptView.populateFilters();

// console.log('pop filter first');
};

$(document).ready(function(){

  scriptView.initIndexPage();
});
