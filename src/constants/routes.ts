
const BASE_API_URL = "http://localhost:3000/api";
// const BASE_API_URL = "http://api.nft.com/api";

const authRoutes = {
    login: `${BASE_API_URL}/user/auth/login`,
    register: `${BASE_API_URL}/user/auth/register`
};


export {
    authRoutes
}

