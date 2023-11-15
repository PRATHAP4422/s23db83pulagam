var car=require('../models/car');

// Handle a delete one view with id from query
exports.car_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await car.findById(req.query.id)
    res.render('cardelete', { title: 'car Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   