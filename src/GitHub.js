const REST_API_KEY = "399d0fa02a0200f5b814";
const REDIRECT_URI = "http://localhost:3000/Redirect";
const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${REST_API_KEY}&scope=repo:status read:repo_hook user:email&redirect_uri=${REDIRECT_URI}`;

export { GITHUB_AUTH_URL };
