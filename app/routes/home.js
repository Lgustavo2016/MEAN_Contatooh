/**
 * This module configures a access route to the index page...
 */

 //Requiring the home controller and assigning it to the controller variable...
let controller = require('../controllers/home.controller');

 module.exports= function (app) {  

    //Express will take a look at the current URL and finds out if there's a '/' there...
    app.get('/', controller.index);

 }