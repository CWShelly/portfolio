page('/', articlesController.loadAll, articlesController.index);

page('/about', aboutController.index);

page('/title/:blogTitle', articlesController.loadByDate, articlesController.index);

page('/title', '/');



page();