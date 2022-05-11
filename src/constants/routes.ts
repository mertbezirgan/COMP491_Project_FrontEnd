// const BASE_API_URL = "http://localhost:3000/api";
const BASE_API_URL = "http://localhost:3001/api";
// const BASE_API_URL = "http://api.nft.com/api";

const authRoutes = {
  login: `${BASE_API_URL}/user/auth/login`,
  register: `${BASE_API_URL}/user/auth/register`,
  me: `${BASE_API_URL}/user/auth/me`,
};

const productRoutes = {
  list: `${BASE_API_URL}/product/list`,
  create: `${BASE_API_URL}/product`,
};

export { authRoutes, productRoutes };
