const REST_API_KEY = "3bfb036a57b6100db7aff9142cc1c744";
const REDIRECT_URI = "http://54.180.148.170:3000/Redirect";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export { KAKAO_AUTH_URL };
