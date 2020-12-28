//fetch api

class Github {
    constructor() {
        this.client_id = 'f521ea0e675cd78e6feb';
        this.client_secret = '116fb93c502999a113542377e65e71d9dedd5ce3';
        this.repos_count = 5;
        this.repos_sort ='created: asc';
    }

    //get user and repos
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json(),
            repos = await repoResponse.json();
        return {
            profile,
            repos
    }
    }
}
