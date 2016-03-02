(function(module){

  var scriptView = {};



  // scriptView.populateFilters = function(){
  //   console.log('pop filters run');
  //
  //   $('article').each(function(){
  //     console.log('each');
  //     if(!$(this).hasClass('date')){
  //       console.log('if pop');
  //       var val = $(this).find('#date').text();
  //     // console.log(this);
  //       var optionTag = '<option value ="'+ val + '">'+ val + '</option>';
  //     // console.log(optionTag);
  //       if ($('#date-filters option[value="' + val + '"]').length === 0) {
  //         console.log('if date');
  //         $('#date-filters').append(optionTag);
  //
  //       }
  //     }
  //   });
  // };

var render = function(article){
  var template = Handlebars.compile($('#script-template').text());

  return template(article);
};

  scriptView.populateFilters = function(){
    var template = Handlebars.compile($('#option-template').text());
    console.log('popfilters on2');
    Article.allTitles(function(rows){
      if($('#title-filters option').length < 2){
        $('#title-filters').append(
          rows.map(function(row){
            // console.log(row.blogDate);
            return template({val:row.blogTitle});
          })
        );
      };
    });
  };


scriptView.handleDateFilter = function(){
  $('#filters').one('change', 'select', function(){
    resource = this.id.replace('-filters', '');
    console.log(resource);
    console.log(this);
    page('/' + resource + '/' + $(this).val().replace(/\W+/g, '+'));
  });
};

  //
  // scriptView.handleVisited = function(){
  //   $('#visited').on('click', function(){
  //     $('.github-display').hide();
  //     $('#display-about').show();
  //   });
  // };
  //
  // scriptView.handleResume = function(){
  //   $('#resume').on('click', function(){
  //     $('#display-about').hide();
  //     $('.github-display').show();
  //   });
  // };



  scriptView.initIndexPage = function(articles){
    console.log('initIndex run');
$('#blog-date').show();

$('#blog-date article').remove();

articles.forEach(function(a){
  $('#blog-date').append(render(a));
  // console.log(a);
});


  scriptView.populateFilters();
  scriptView.handleDateFilter();
  // scriptView.handleAbout();
  // scriptView.handleResume();
  // scriptView.placeCheck();

};

// $(document).ready(function(){
//   $('#display-about').hide();
//   scriptView.initIndexPage();
// });

module.scriptView = scriptView;

})(window);
