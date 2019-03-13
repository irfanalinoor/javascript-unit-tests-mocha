const UserController = require('./ctrls/user.ctrl');
const ctrl = new UserController();


ctrl.getAll()
	.then(users => {
		console.log("List of users");
		console.log(users['users']);
	})
	.catch(err => {
		console.error(err)
	});
