var car = require('../models/car');
// List of all car
exports.car_list = function(req, res) {
res.send('NOT IMPLEMENTED: car list');
};
// for a specific car.
exports.car_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await car.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle car create on POST.
exports.car_create_post =async function(req, res) {
    console.log(req.body)
    let document = new car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"car_type":"goat", "cost":12, "size":"large"}
    document.model = req.body.model;
    document.year = req.body.year;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    console.log(err);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle car delete form on DELETE.
exports.car_delete = function(req, res) {
res.send('NOT IMPLEMENTED: car delete DELETE ' + req.params.id);
};
// Handle car update form on PUT.
exports.car_update_put =async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await car.findById( req.params.id)
    // Do updates of properties
    if(req.body.model) toUpdate.model = req.body.model;
    if(req.body.year) toUpdate.year = req.body.year;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

// List of all car
exports.car_list = async function(req, res) {
    try{
    thecar = await car.find();
    res.send(thecar);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.car_view_all_Page = async function(req, res) {
    try{
    thecars = await car.find();
    res.render('car', { title: 'car Search Results', carslist: thecars });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    