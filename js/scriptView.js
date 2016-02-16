(function(module){

var scriptView = {};



scriptView.populateFilters = function(){
  console.log('pop filters run');

  $('article').each(function(){
    if(!$(this).hasClass('date')){
      var val = $(this).find('#date').text();
      // console.log(this);
      var optionTag = '<option value ="'+ val + '">'+ val + '</option>';
      // console.log(optionTag);
      if ($('#date-filters option[value="' + val + '"]').length === 0) {
        $('#date-filters').append(optionTag);

      }
    }
  });
};


scriptView.handleDateFilter = function(){
  $('#date-filters').on('change', function(){
    // console.log('changed fires');
    if($(this).val()){
      console.log($(this).val());
      $('article').hide();
      $('article[data-date="'+ $(this).val() + '"]').show();
    }
  });
};

// scriptView.handleAbout = function(){
//   console.log('about');
//   $('#about').on('click', function(){
//     // $('.feature-template').hide();
//     // $('#work-template').show();
//     $('.github-display').hide();
//     $('#display-about').show();
//   });
// };

scriptView.handleVisited = function(){
  $('#visited').on('click', function(){
    $('.github-display').hide();
    $('#display-about').show();
  });
}

scriptView.handleResume = function(){
  $('#resume').on('click', function(){
    $('#display-about').hide();
    $('.github-display').show();
  });
};



scriptView.initIndexPage = function(){
  console.log('initIndex run');
  // scriptView.populateFilters();

  Article.all.forEach(function(a){
    // var content3placeholder = $('.content3-placeholder');
    // console.log(content3placeholder);
    // console.log(a);

  var template = Handlebars.compile($('#script-template').text());
  var template2 = Handlebars.compile($('#wander-template').text());

    $('.content3-placeholder').append(a.toHtml());
    // console.log('the line after appendtohtml');

    $('.content2-placeholder').append(a.toWanderHtml());
    // console.log('the line after Wanderappendtohtml');

  });

scriptView.handleDateFilter();
  scriptView.populateFilters();
  // scriptView.handleAbout();
  scriptView.handleResume();
  // scriptView.placeCheck();

};

// $(document).ready(function(){
//   $('#display-about').hide();
//   scriptView.initIndexPage();
// });

module.scriptView = scriptView;

})(window);
