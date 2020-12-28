
//init github
const github = new Github;

//init ui
const ui = new UI;

//SEARCH INPUT
const searchUser = document.getElementById('searchUser');


//add eventListener
searchUser.addEventListener('keyup', (e) => {
   //get input text
    const userText = e.target.value;
    if (userText !== '') {
        //make http request
        github.getUser(userText)
            .then((data) => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('Oops...User not found', 'alert alert-danger')
                } else {
                    //show profile render the profile ai the dom
                    //console.log('from appjs--->', data.profile)
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        ui.clearProfile();

    }
});
