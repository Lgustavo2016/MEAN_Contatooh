
//This Controller is responsible for redirecting the user to the requested page...
module.exports = function () {

    let controller = {};

    //If the users requests the Index. Req means Requisition and Res, Response...
    controller.index = function (req, res) {

        res.render('index', { nome: 'Express' });

    };

    return controller;
}