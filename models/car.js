const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
model: String,
year: Number,

})
module.exports = mongoose.model("car",
carSchema)