page('/', articlesController.loadAll, articlesController.index);

page('/work', aboutController.index);
page('/stats', statsController.index);

page('/title/:blogTitle', articlesController.loadByDate, articlesController.index);

page('/title', '/');



page();
