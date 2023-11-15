var car=require('../models/car');

// Handle building the view for creating a car.
// No body, no in path parameter, no query.
// Does not need to be async
exports.car_create_Page = function(req, res) {
console.log("create view")
try{
res.render('carcreate', { title: 'Car Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
