const mongoose = require("mongoose");

const schema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	userId: Number,
	cityid: Number,
	name: String,
	cpf: String,
	car: String,
	sign: String,
	street: String,
	streetNumber: Number,
	referencePoint: String,
	latitude: Number,
	longitude: Number,	
	isResolved: Boolean,
	date: Date,
});

module.exports = mongoose.model("NewVoluntary", schema);
