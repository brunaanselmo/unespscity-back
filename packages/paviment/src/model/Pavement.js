const mongoose = require('mongoose')

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: Number,
    cityId: Number, 
    street: String,
    streetNumber: Number,
    referencePoint: String, 
    latitude: Number,
    longitude: Number, 
    description: String,
    images: [String], 
    isResolved: Number,
    date: Date
})

module.exports = mongoose.model("Pavimentacao", schema);