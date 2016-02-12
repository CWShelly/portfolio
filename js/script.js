

(function(module){

  function Article(opts){
    Object.keys(opts).forEach(function(e, index, keys){
      this[e] = opts[e];
    },this);
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
    Article.all.map(function(x){return x.blog;}).reduce(function(blogs, blog){blogs.push(blog); console.log(blogs); return blogs;},[]);

    Article.all.map(function(x){return x.blog.match(/\b\w+/g).length;}).reduce(function(a, b){return a + b;});

  };

  Article.getAll = function(){
    $.getJSON('/data/scriptData.json', function(rawData){
      localStorage.rawData = JSON.stringify(rawData);
    });
  };

  Article.fetchAll = function(){
    $.ajax({
      type:'HEAD',
      url:'data/scriptData.json',
      success:function(data, message, xhr){
        console.log(xhr);
        var eTag = xhr.getResponseHeader('eTag');
        console.log(eTag);
        if(!localStorage.eTag || eTag !== localStorage.eTag){
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


  module.Article = Article;
}) (window);
