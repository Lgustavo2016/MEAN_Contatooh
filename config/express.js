/**
 * 
 * This module file configures Express...
 * 
 */

//Creating a variable that assigns the express module, using the function 'require'
let express = require('express');

//Importing the home module...
let home = require('../app/routes/home');

/**
 * Passing a function as parameter to the 'exports' property of the module.
 * Everything that's been added to this property can be seen outside the module.
*/
module.exports = function () {

    //Calling for a 'express' instance, and assigning the result to the 'app' variable
    let app = express();

    //Seting the 3000 port as default port, using enviroment variables (set('var-name', 'setting'))...
    app.set('port',3000); 

    //Seting the public folder reachable by the web navigator...
    app.use(express.static('./public'));

    //Seting the ejs as view engine
    app.set('view engine', 'ejs');

    //Seting the directory with the views
    app.set('views', './app/views');

    //Calling the home module, passing the app(express) as parameter
    home(app);

    return app;

}