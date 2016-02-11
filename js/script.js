


function Article (opts) {
  this.schoolURL = opts.schoolURL;
  this.githubURL = opts.githubURL;
  this.facebookURL = opts.facebookURL;
  this.publishedDate = opts.publishedDate;
  this.title = opts.title;
  this.blog = opts.blog;
}

console.log(Article);
// console.log(Article.all);

Article.all = [];
// console.log(Article.all);

Article.prototype.toHtml = function(){
  var template = Handlebars.compile($('#article-template').text());
  console.log('toHtml');
  return template(this);
};


Article.loadAll = function(rawData){
  console.log('loadAll');
  rawData.forEach(function(ele){
    Article.all.push(rawData);
    console.log(rawData);
  });
  console.log(Article.all);
};


Article.getAll = function(){
  $.getJSON('/data/scriptData.json', function(rawData){
    Article.loadAll(rawData);
    localStorage.rawData = JSON.stringify(Article.all);
  // articleView.initIndexPage();
  });
};

Article.fetchAll = function(){
  console.log('fetch all');
  console.log(Article.all);

  $.ajax({
    type:'HEAD',
    url:'data/scriptData.json',
    success:function(data, message, xhr){
      console.log(xhr);
      var eTag = xhr.getResponseHeader('eTag');
      console.log(eTag);
      if(!localStorage.eTag || eTag !== localStorage.etag){
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
    console.log(localStorage);
  });
};
