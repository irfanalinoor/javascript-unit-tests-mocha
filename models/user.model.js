class UserModel{
	constructor(username, password){
		this.username = username;
		this.password = password;
	}
	toJson(){
		return {
			username: this.username,
			password: this.password
		}
	}
}
module.exports = UserModel;