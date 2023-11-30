const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
model: String,
year: Number,
price: {
    type:Number,
    min:1000000,
    max:10000000
}
})
module.exports = mongoose.model("car",
carSchema)