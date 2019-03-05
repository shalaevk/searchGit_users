class Git{
	constructor(){
		this.client_id = "0dfac0a309e31d971a87";
		this.client_secret ="3fc082d93fca1a74dfc59763a5de83d60f2f10f6";
	}

	//Get user by name
	GetUser(name){
		return new Promise ((resolve, reject) => {
			fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`, {method: 'GET'})
			.then(res => {res.json()
			.then(user => resolve(user))
			.catch(err => reject(err))	
			})
		})
	}

	//Get repos
	GetRepos(user){
		return new Promise ((resolve, reject) => {
			if(!user.login) reject('User not found');

			fetch(`https://api.github.com/users/${user}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`, {method: 'GET'})
			.then(res => {res.json()
			.then(repos => resolve(repos))
			.catch(err => reject(err))	
			})
		})
	}

}