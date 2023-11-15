const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
model: String,
year: Number,
price: Number
})
module.exports = mongoose.model("car",
carSchema)