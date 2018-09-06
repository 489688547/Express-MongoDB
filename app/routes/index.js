'use strict';

var ClickHandler = require(process.cwd() + '/app/controllers/clickController.server.js');

module.exports = (app, db) => {
    var clickHandler = new ClickHandler(db);

    app.route('/')
        .get(function (req,res) {
            res.sendFile(process.cwd() + '/public/index.html')
        });
    
    app.route('/api/clicks')
        .get(clickHandler.getClicks)
        .post(clickHandler.addClick)
        .delete(clickHandler.resetClicks);
}