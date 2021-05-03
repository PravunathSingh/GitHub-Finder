class Github {
  constructor() {
    this.client_id = 'a4129131194fb6f92242';
    this.client_secret = 'd42c44675507f38f8219098b06694d9e656e59b2';
    this.repos_count = 10;
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();
    return {
      profile: profileData,
      repos: repoData
    }
  }
}