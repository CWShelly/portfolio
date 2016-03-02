(function(module){

  var scriptView = {};


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


  scriptView.initIndexPage = function(articles){

    $('#blog-date').show();
    $('#blog-date article').remove();
    articles.forEach(function(a){
      $('#blog-date').append(render(a));
    });


    scriptView.populateFilters();
    scriptView.handleDateFilter();

  };


  module.scriptView = scriptView;

})(window);
