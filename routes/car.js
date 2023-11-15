var express = require('express');
const car_controlers= require('../controllers/car');
const cardetail_controller=require('../controllers/cardetail');
const carcreate_controller=require('../controllers/carcreate');
const carupdate_controller=require('../controllers/carupdate');
const cardelete_controller=require('../controllers/cardelete');


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
/* GET create car page */

try{
router.get('/create', carcreate_controller.car_create_Page);   
 }
catch(e){
console.error();
}
/* GET update car page */
try{
    router.get('/update', carupdate_controller.car_update_Page)}
catch(e){
     console.error();
}
/* GET delete car page */
try{
    router.get('/delete', cardelete_controller.car_delete_Page);
}
catch(e){
     console.error();
}

module.exports = router;

    
    