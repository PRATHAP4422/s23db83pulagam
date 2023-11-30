var express = require('express');
const car_controlers= require('../controllers/car');
const cardetail_controller=require('../controllers/cardetail');
const carcreate_controller=require('../controllers/carcreate');
const carupdate_controller=require('../controllers/carupdate');
const cardelete_controller=require('../controllers/cardelete');

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
var router = express.Router();
/* GET cars */
router.get('/', car_controlers.car_view_all_Page );


/* GET detail car page */
router.get('/detail', cardetail_controller.car_view_one_Page);
/* GET create car page */
router.get('/create',secured, carcreate_controller.car_create_Page);   
 
/* GET update car page */
    router.get('/update',secured, carupdate_controller.car_update_Page);

/* GET delete car page */
    router.get('/delete',secured, cardelete_controller.car_delete_Page);


module.exports = router;

    
    