var car=require('../models/car');
// Handle building the view for updating a car.
// query provides the id
exports.car_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await car.findById(req.query.id)
    res.render('carupdate', { title: 'Car Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };