
(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    console.log('request has gone out');
    $.get('https://api.github.com/users/CWShelly/repos', function(data, message, xhr){
      repos.all = data;
      console.log(data);
    }).done(callback);
  };


  // repos.requestRepos = function(callback) {
  //   console.log('request has gone out');
  //
  //   $.get('/github/users/CWShelly/repos' +
  //   '?per_page=100' +
  //   '&sort=updated')
  //   .done(function(data, message, xhr){
  //     repos.all = data;
  //     console.log(data);
  //   })
  //   .done(callback);
  // };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
