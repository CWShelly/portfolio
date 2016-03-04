

(function(module){

  function Article(opts){
    Object.keys(opts).forEach(function(e, index, keys){
      this[e] = opts[e];
    },this);
  }

  Article.all = [];

  Article.createTable = function(callback){
    webDB.execute(
    'CREATE TABLE IF NOT EXISTS articles(' +
    'id INTEGER PRIMARY KEY,' +
    'placesVisited VARCHAR(255) NOT NULL,' +
    'placesNotVisited VARCHAR(255) NOT NULL,' +
    'blogDate VARCHAR(255) NOT NULL,' +
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

  Article.allDates = function(callback){
    webDB.execute('SELECT DISTINCT blogDate FROM articles;', callback);
  };

  Article.allTitles = function(callback){
    webDB.execute('SELECT DISTINCT blogTitle FROM articles;', callback);
  };


  Article.findWhere = function(field, value, callback){
    console.log(value);
    webDB.execute(
      [
        {
          sql:'SELECT * FROM articles WHERE ' + field + ' = ?;',
          data:[value]
        }
      ],
    callback
  );
  };


  Article.ipsumWords = function(){
    return Article.all.map(function(article){
      return article.blog.match(/\b\w+/g).length;
    })
    .reduce(function(a,b){
      console.log(a+b);
      return a + b;
    });
  };

  Article.allTheTitles = function(){
    return Article.all.map(function(Article){
      return Article.blogTitle;
      return{
        the_title:Article.blogTitle,
      };
    });
  };

  Article.numWordsByTitle = function(){
    return Article.allTheTitles().map(function(title){

      return{
        numWords: Article.all.map(function(article){
          if (article.blogTitle === title){
            return article.blog.match(/\b\w+/g).length;
          } else{
            return 0;
          }
        })
       .reduce(function(a,b){
         return a + b;
       })
      };
    });
  };

  module.Article = Article;

})(window);
