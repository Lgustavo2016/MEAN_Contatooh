/**
 * 
 * This module file configures Express...
 * 
 */

//Creating a variable that assigns the express module, using the function 'require'
let express = require('express');

/**
 * Passing a function as parameter to the 'exports' property of the module.
 * Everything that's been added to this property can be seen outside the module.
*/
module.exports = function () {

    //Calling for a 'express' instance, and assigning the result to the 'app' variable
    let app = express();

    return app;

}