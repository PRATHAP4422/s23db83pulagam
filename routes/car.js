var express = require('express');
const car_controlers= require('../controllers/car');
const cardetail_controller=require('../controllers/cardetail');
var router = express.Router();
/* GET cars */
try{
router.get('/', car_controlers.car_view_all_Page );
}
catch(e){
    console.error();
}

/* GET detail car page */
try{
router.get('/detail', cardetail_controller.car_view_one_Page);
}
catch(e){
    console.error();
}


module.exports = router;

    
    