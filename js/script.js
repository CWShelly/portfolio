

(function(module){

  function Article(opts){
    Object.keys(opts).forEach(function(e, index, keys){
      this[e] = opts[e];
    },this);
  }

// var notPlaces = ['Middle Earth', 'The Delta Quadrant', 'Mypos'];




  Article.all = [];

  // Article.prototype.toHtml = function(){
  //   var template = Handlebars.compile($('#script-template').text());
  //   // console.log(this);
  //   // console.log("handlebars compiled");
  //   return template(this);
  //
  // };

//   Article.prototype.toWanderHtml = function(){
//     var template = Handlebars.compile($('#wander-template').text());
//     // console.log(this);
//     // console.log("handlebars compiled");
//     return template(this);
//
// ;



  //
  // Article.allX = function(){
  //   var notPlaces = ["Middle Earth", "The Delta Quadrant", "Mypos"];
  //   return Article.all(function(x){
  //     return x.placesVisited;
  //     return x.placesNotVisited;
  //     return x.placesVisted.concat(placesNotVisited);
  //   })
  //   .reduce(function(a,b){
  //     return a + b;
  //   });
  // };


  Article.createTable = function(callback){
    webDB.execute(
    'CREATE TABLE IF NOT EXISTS articles(' +
    'id INTEGER PRIMARY KEY,' +
    'placesVisited VARCHAR(255) NOT NULL,' +
    'placesNotVisited VARCHAR(255) NOT NULL,' +
    'blogDate DATETIME,' +
    'blog VARCHAR(255) NOT NULL,' +
    'blogTitle TEXT NOT NULL);',

  function(result){
    console.log('set up articles table', result);
    if (callback) callback();
  }
);
  };



  Article.truncateTable = function(callback){
    webDB.execute(
    'DELETE FROM articles;',
    callback
  );
  };

  Article.prototype.insertRecord = function(callback){
    webDB.execute(
      [
        {
          'sql':'INSERT INTO articles(placesVisited, placesNotVisited, blogDate,     blog, blogTitle) VALUES(?,?,?,?,?);',
          'data':[this.placesVisited, this.placesNotVisited, this.blogDate, this.blog, this.blogTitle],
        }
      ],
    callback
  );
  };

  Article.prototype.deleteRecord = function(callback){
    webDB.execute(
      [
        {
          'sql': 'DELETE FROM articles WHERE id = ?;',
          'data':[this.id]
        }
      ],
  callback
);
  };


  Article.prototype.updateRecord = function(callback){
    webDB.execute(
      [
        {
          'sql': 'UPDATE articles SET placesVisited = ?, placesNotVisited = ?, blogDate = ?, blog = ?, blogTitle =?;',
          'data':[this.placesVisited, this.placesNotVisited, this.blogDate, this.blog, this.blogTitle, this.id],
        }
      ],
    callback
  );
  };

  Article.loadAll = function(rows){
    console.log('loadAll run');
    Article.all = rows.map(function(ele){
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

  Article.fetchAll = function(next){
    console.log('fetchAll run');
    webDB.execute('SELECT * FROM articles ORDER BY blogDate DESC', function(rows){
      if (rows.length){
        Article.loadAll(rows);
        console.log(rows);
        next();
      } else{
        $.getJSON('data/scriptData.json', function(rawData){
          rawData.forEach(function(item){
            var article = new Article(item);
            article.insertRecord();
          });
          webDB.execute('SELECT * FROM articles', function(rows){
            Article.loadAll(rows);
            next();
          });
        });
      }
    });
  };



    // $.ajax({
    //   type:'HEAD',
    //   url:'data/scriptData.json',
    //   success:function(data, message, xhr){
    //     console.log(xhr);
    //     var eTag = xhr.getResponseHeader('eTag');
    //     console.log(eTag);
    //     if(!localStorage.eTag || eTag !== localStorage.eTag){
    //       // console.log('after localStorage');
    //       localStorage.eTag = eTag;
    //         // Article.getAll();
    //     }



  module.Article = Article;

})(window);
