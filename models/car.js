const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
model: {
    type:String,
    minlength: 2,
    maxlength: 20
},
year: Number,
price: {
    type:Number,
    min:1000000,
    max:10000000
}
})
module.exports = mongoose.model("car",
carSchema)