const mongoose = require("mongoose");

const schema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	cityid: Number,
	userId: Number,
	street: String,
	streetNumber: String,
	referencePoint: String,
	latitude: Number,
	longitude: Number,	
	name: String,
	cpf: String,
	car: String,
	sign: String,
	isResolved: Boolean,
	date: Date,
});

module.exports = mongoose.model("NewVoluntaries", schema);
