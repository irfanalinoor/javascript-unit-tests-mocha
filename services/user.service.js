const fetch = require('isomorphic-fetch');
const UserModel = require('../models/user.model');

class UserService {

	constructor() {
		this.url = 'http://www.mocky.io/v2/5c77422c30000051009d619a';
	}

	async getAll() {
		return fetch(this.url)
			.then(res => res.json());
	}

}
module.exports = UserService;