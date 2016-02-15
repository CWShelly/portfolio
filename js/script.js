

(function(module){

  function Article(opts){
    Object.keys(opts).forEach(function(e, index, keys){
      this[e] = opts[e];
    },this);
  }

var notPlaces = ['Middle Earth', 'The Delta Quadrant', 'Mypos'];




  Article.all = [];

  Article.prototype.toHtml = function(){
    var template = Handlebars.compile($('#script-template').text());
    console.log(this);
    console.log("handlebars compiled");
    return template(this);

  };

  Article.prototype.toWanderHtml = function(){
    var template = Handlebars.compile($('#wander-template').text());
    console.log(this);
    console.log("handlebars compiled");
    return template(this);

;

  };


  Article.allX = function(){
    var notPlaces = ["Middle Earth", "The Delta Quadrant", "Mypos"];
    return Article.all(function(x){
      return x.placesVisited;
      return x.placesNotVisited;
      return x.placesVisted.concat(placesNotVisited);
    })
    .reduce(function(a,b){
      return a + b;
    });
  };

  Article.loadAll = function(rawData){
    console.log('loadAll run');
    Article.all = rawData.map(function(ele){
      return new Article(ele);
    });
  };

// Article.getAll = function(){
//   console.log('getAll run');
//   $.getJSON('/data/scriptData.js', function(rawData){
//     localStorage.rawData = JSON.stringify(Article.all);
//     scriptView.initIndexPage();
//
//
//   });
// };

  Article.fetchAll = function(){
    console.log('fetchAll run');
    $.ajax({
      type:'HEAD',
      url:'data/scriptData.json',
      success:function(data, message, xhr){
        console.log(xhr);
        var eTag = xhr.getResponseHeader('eTag');
        console.log(eTag);
        if(!localStorage.eTag || eTag !== localStorage.eTag){
          console.log('after localStorage');
          localStorage.eTag = eTag;
            // Article.getAll();
        }
      }
    });
      //
      // Article.getAll();
    $.getJSON('data/scriptData.json', function(data){
      console.log('get jsoned');
      Article.loadAll(data);
      console.log(data);
      localStorage.setItem('rawData', JSON.stringify(Article.all));
      console.log('localStorage set');
      scriptView.initIndexPage();
    });
  };

  module.Article = Article;

})(window);
