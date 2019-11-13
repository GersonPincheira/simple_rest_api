const {Schema, model} = require('mongoose');

const AnimalSchema = new Schema({
	tipo:{
		type:String
	},
	color:{
		type:String
	},
	peso:{
		type:Number
	}
});
module.exports = model('Animal',AnimalSchema);
