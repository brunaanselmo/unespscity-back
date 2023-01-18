const newvoluntary = require("../model/newvoluntary");
const mongoose = require("mongoose");

module.exports = {
	name: "newvoluntary",
	version: 1,
	actions: {
		create: {
			async handler(ctx) {
				const _id = mongoose.Types.ObjectId();
				const timeElapsed = Date.now();
				const today = new Date(timeElapsed);
				console.log("Data received: " + ctx.params.data.userId);
				console.log("Data received: " + ctx.params.data.name);
				console.log("Data received: " + ctx.params.data.date);
				console.log("Data received: " + ctx.params.data.cpf);
				console.log("Data received: " + ctx.params.data.car);
				console.log("Data received: " + ctx.params.data.sign);			
				console.log("Data received: " + ctx.params.data.street);
				console.log("Data received: " + ctx.params.data.streetNumber);
				console.log("Data received: " + ctx.params.data.referencePoint);
				console.log("Data received: " + ctx.params.data.latitude);
				console.log("Data received: " + ctx.params.data.longitude);
			

				if (ctx.params.data) {
					if (
						ctx.params.data.userId &&
						ctx.params.data.name &&
						ctx.params.data.date &&
						ctx.params.data.cpf &&
						ctx.params.data.car &&
						ctx.params.data.sign &&
						ctx.params.data.street &&
						ctx.params.data.streetNumber &&
						ctx.params.data.referencePoint &&
						ctx.params.data.latitude &&
						ctx.params.data.longitude 
						
					) {
						return newvoluntary.create({
							_id,
							userId: ctx.params.data.userId,
							name: ctx.params.data.name,
							cpf: ctx.params.data.cpf,
							date: ctx.params.data.date,
							car: ctx.params.data.car,
							sign: ctx.params.data.sign,
							cityid: ctx.params.data.cityid,
							street: ctx.params.data.street,
							streetNumber: ctx.params.data.streetNumber,
							referencePoint: ctx.params.data.referencePoint,
							latitude: ctx.params.data.latitude,
							longitude: ctx.params.data.longitude,
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
				return await newvoluntary.find();
			},
		},

		getById: {
			async handler(ctx) {
				if (ctx.params && ctx.params.id) {
					return await newvoluntary.find({
						_id: ctx.params.id,
					});
				}
				return false;
			},
		},

		update: {
			async handler(ctx) {
				if (ctx.params.data && ctx.params.data.id) {
					return await newvoluntary.updateOne(
						{ _id: ctx.params.id },
						{
							$set: {
								userId: ctx.params.data.userId,
								name: ctx.params.data.name,
								cpf: ctx.params.data.cpf,
								date: ctx.params.data.date,
								car: ctx.params.data.car,
								sign: ctx.params.data.sign,
								cityid: ctx.params.data.cityid,
								street: ctx.params.data.street,
								streetNumber: ctx.params.data.streetNumber,
								referencePoint: ctx.params.data.referencePoint,
								latitude: ctx.params.data.latitude,
								longitude: ctx.params.data.longitude,
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
					return await newvoluntary.updateOne(
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
					return await newvoluntary.deleteOne({
						_id: ctx.params.id,
					});
				}
				return false;
			},
		},
	},
};
