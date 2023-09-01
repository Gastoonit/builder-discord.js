{}
/* const mongoose = require("mongoose");
const config = require(`${process.cwd()}/src/json/client/bot.json`)

module.exports = (client) => {
	client.mongoose = async () => {
		* Mongoose *
		mongoose.connect(config.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => console.log('✅️ | Mongoose'))
		.catch(err => console.error(err));
	}
} */