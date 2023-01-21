const newvoluntaries = require("../model/NewVoluntaries");
const mongoose = require("mongoose");

module.exports = {
	name: "newvoluntaries",
	version: 1,
	actions: {
		create: {
			async handler(ctx) {
				const _id = mongoose.Types.ObjectId();
				const timeElapsed = Date.now();
				const today = new Date(timeElapsed);
				console.log("Data received: " + ctx.params.data.cityid);
				console.log("Data received: " + ctx.params.data.userId);			
				console.log("Data received: " + ctx.params.data.street);
				console.log("Data received: " + ctx.params.data.streetNumber);
				console.log("Data received: " + ctx.params.data.referencePoint);
				console.log("Data received: " + ctx.params.data.latitude);
				console.log("Data received: " + ctx.params.data.longitude);
				console.log("Data received: " + ctx.params.data.name);
				console.log("Data received: " + ctx.params.data.cpf);
				console.log("Data received: " + ctx.params.data.car);
				console.log("Data received: " + ctx.params.data.sign);		

				if (ctx.params.data) {
					if (
						ctx.params.data.cityid &&
						ctx.params.data.userId &&
						ctx.params.data.street &&
						ctx.params.data.streetNumber &&
						ctx.params.data.referencePoint &&
						ctx.params.data.latitude &&
						ctx.params.data.longitude &&
						ctx.params.data.name &&
						ctx.params.data.date &&
						ctx.params.data.cpf &&
						ctx.params.data.car &&
						ctx.params.data.sign 						
					) {
						return newvoluntaries.create({
							_id,
							userId: ctx.params.data.userId,
							cityid: ctx.params.data.cityid,
							street: ctx.params.data.street,
							streetNumber: ctx.params.data.streetNumber,
							referencePoint: ctx.params.data.referencePoint,
							latitude: ctx.params.data.latitude,
							longitude: ctx.params.data.longitude,
							name: ctx.params.data.name,
							cpf: ctx.params.data.cpf,
							date: ctx.params.data.date,
							car: ctx.params.data.car,
							sign: ctx.params.data.sign,
							isResolved: false,
							date: today,
						});
					}
				}
				return false;
			},
		},

		getAll: {
			async handler(ctx) {
				return await newvoluntaries.find();
			},
		},

		getById: {
			async handler(ctx) {
				if (ctx.params && ctx.params.id) {
					return await newvoluntaries.find({
						_id: ctx.params.id,
					});
				}
				return false;
			},
		},

		update: {
			async handler(ctx) {
				if (ctx.params.data && ctx.params.data.id) {
					return await newvoluntaries.updateOne(
						{ _id: ctx.params.id },
						{
							$set: {
								userId: ctx.params.data.userId,
								cityid: ctx.params.data.cityid,
								street: ctx.params.data.street,
								streetNumber: ctx.params.data.streetNumber,
								referencePoint: ctx.params.data.referencePoint,
								latitude: ctx.params.data.latitude,
								longitude: ctx.params.data.longitude,
								name: ctx.params.data.name,
								cpf: ctx.params.data.cpf,
								date: ctx.params.data.date,
								car: ctx.params.data.car,
								sign: ctx.params.data.sign
							},
						}
					);
				}
				return false;
			},
		},

		updateResolved: {
			async handler(ctx) {
				if (ctx.params && ctx.params.id) {
					return await newvoluntaries.updateOne(
						{ _id: ctx.params.id },
						{ $set: { isResolved: true } }
					);
				}
				return false;
			},
		},

		delete: {
			async handler(ctx) {
				if (ctx.params && ctx.params.id) {
					return await newvoluntaries.deleteOne({
						_id: ctx.params.id,
					});
				}
				return false;
			},
		},
	},
};
