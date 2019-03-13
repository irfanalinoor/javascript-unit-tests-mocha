const UserService = require('../services/user.service');

class UserController{

	constructor(){
		this.api = new UserService();
	}

	async getAll(){
		try{
			let users = await this.api.getAll();
			return users;
		} catch(err){
			console.error(err.message);
			throw new Error('Service error - '+err.message);
		}
	}

}
module.exports = UserController;