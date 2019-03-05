//Init git
const git = new Git();
const ui = new UI();


// init search input
const searchInput = document.getElementById('searchUser');

//add eventListener
searchInput.addEventListener('keyup', (e) => {
	//Get input text
	const userText = e.target.value;
	if(userText !== " "){
		ui.loader();
		//make http request
		git.GetUser(userText)
			.then(user => {
				if(user.message === 'Not Found'){
					ui.clearAlert();
					ui.clearProfile();
					ui.loaderHide();
					ui.showAlert(`User: ${userText} not found`, 'alert alert-danger')					
				}else{
					ui.loaderHide();
					ui.showProfile(user)};					
			})
			.catch(err => {
				console.log(err)
			})

		git.GetRepos(userText)
			.then(repos => {
				ui.showRepos(repos);
			})
			.catch(err => {
				console.log(err)
			})
	}else {
		git.clearProfile();
	}

})