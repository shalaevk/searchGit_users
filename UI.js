class UI{
	constructor(){
		this.profile = document.getElementById('profile');
		this.avatar = document.createElement('img');
		this.userName = document.createElement('h2');
		this.search_container = document.querySelector('.search-container');
		this.preloader = document.querySelector('.preloader');

	}
	//display profile
	showProfile(user){
		// this.userName.innerHTML = user.name;
			this.profile.innerHTML = `
			<div class="card card-body mb-3">
				<div class="row">
					 <div class="col-md-3">
						<img src="${user.avatar_url}" class="img-fluid mb-2">
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
					 </div>
					 <div class="col-md-9">
						<div class="user-info-header">
							<span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
							<span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
							<span class="badge badge-success">Followers: ${user.followers}</span>
							<span class="badge badge-info">Following: ${user.following}</span>
						</div>
						<ul class="list-group">
							<li class="list-group-item">Company: ${user.company ? user.company : 'N/A'}</li>
							<li class="list-group-item">Website/Blog: ${user.blog ? user.blog : 'N/A'}</li>
							<li class="list-group-item">Location: ${user.location ? user.location : 'N/A'}</li>
							<li class="list-group-item">Member since: ${user.created_at ? user.created_at : 'N/A'}</li>
						</ul>
					 </div>
				</div>
			</div>
			<h3 class="page-heading">Latest Repos</h3>
				<div id="repos"></div>
			`	
		};


	clearProfile(){
		this.profile.innerHTML = '';
	}	

	loader(){
		this.preloader.style.display = 'block';
		// console.log('ok')
	}
	loaderHide(){
		setTimeout(() => {
			this.preloader.style.display = 'none';
		}, 500)
		
	}

	//display repos
	showRepos(repos){
		let output = '';
		repos.forEach(repo => {
			if(repo){
			output += `
				<div class="card card-body mb-2">
					<div class="row">
						<div class="col-md-6">
							<a href="${repo.html_url}" target="_blank">${repo.name}</a>
						</div>
						<div class="col-md-6">
							<span class="badge badge-primary">Stas: ${repo.stargazers_count}</span>
							<span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
							<span class="badge badge-success">Forks: ${repo.forks_count}</span>
						</div>
					</div>
				</div>
			`
		  }})
		
		let reposDiv = document.getElementById('repos');
		reposDiv.innerHTML = output;
	}

	//Alert
	showAlert(message = ' ', className = 'alert alert-info'){
		//create template
		const alert = `<div class="${className}">${message}</div>`;
		this.search_container.insertAdjacentHTML('afterbegin', alert)

		setTimeout(() => {
			this.clearAlert()
		}, 2000)
	}

	clearAlert(){
		const currentAlert = document.querySelector('.alert');
		if(currentAlert){
			currentAlert.remove();
		}
	}
} 

