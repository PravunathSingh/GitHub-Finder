class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3 mb-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}" alt="">
          <div class="d-grid gap-2">
            <a href="${user.html_user}" target="_blank" class="btn btn-primary rounded">View Profile</a>
          </div>
        </div>
        <div class="col-md-9">
          <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge bg-dark text-white">Gists: ${user.public_gists}</span>
          <span class="badge bg-success">Followers: ${user.followers}</span>
          <span class="badge bg-info">Following: ${user.following}</span>
          <br>
          <br>
          <br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>

    <h3 class="page-heading">Latest Repos</h3>
    <div id="repos"></div>
  `;
  }

  showRepos(repos) {
    let output = '';
    repos.forEach((repo) => {
      output += `
          <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-6 mb-4">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge bg-dark text-white">Watchers: ${repo.watchers_count}</span>
              <span class="badge bg-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
          </div>
      `;
    });

    document.getElementById('repos').innerHTML = output
  }

  showAlert(message, className) {
    this.clearAlert();

    const alertDiv = document.createElement('div');
    alertDiv.className = `${className}`;
    alertDiv.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(alertDiv, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2500);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML =  '';
  }
}
