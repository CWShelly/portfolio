
function Article (opts) {
  this.schoolURL = opts.schoolURL;
  this.githubURL = opts.githubURL;
  this.facebookURL = opts.facebookURL;
  this.publishedDate = opts.publishedDate;
  this.title = opts.title;
  this.blog = opts.blog;
}

Article.all = [];

Article.prototype.toHtml = function(){
  var template = Handlebars.compile($('#article-template').text());
  return template(this);
};


Article.loadAll = function(rawData){
  rawData.forEach(function(ele){
    Article.all.push(new Article(ele));
  });
};


Article.getAll = function(){
  $.getJSON('/data/scriptData.json', function(rawData){
    localStorage.rawData = JSON.stringify(rawData);
    // articleView.initIndexPage();
  });
};

Article.fetchAll = function(){
  console.log('fetch all');

  $.ajax({
    type:'HEAD',
    url:'data/scriptData.json',
    success:function(data, message, xhr){
      console.log(xhr);
      var eTag = xhr.getResponseHeader('eTag');
      console.log(eTag);
      if(!localStorage.eTag || eTag !== localStorage.eTag){
        console.log('changed json');
        localStorage.eTag = eTag;
        Article.getAll();
      }
    }
  });


  $.getJSON('data/scriptData.json', function(data){
    Article.loadAll(data);
    localStorage.setItem('rawData', JSON.stringify(Article.all));
    articleView.initIndexPage();
  });
};
