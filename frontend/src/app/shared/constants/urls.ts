const BASE_URL = 'http://localhost:4000';
// const BASE_URL = 'https://food-order-mean.onrender.com';

export const USER_LOGIN_URL = BASE_URL + '/api/user/login';
export const USER_REGISTER_URL = BASE_URL + '/api/user/register';
export const USER_REFRESH_TOKEN = BASE_URL + '/api/user/refreshToken';

const ORDER_BASE_URL = BASE_URL + '/api/order'
export const CREATE_ORDER = ORDER_BASE_URL + '/create';
export const GET_NEW_ORDER_CURRENT_USER = ORDER_BASE_URL + '/newOrderCurrentUser';
export const ORDER_PAY = ORDER_BASE_URL + '/pay';

const FOOD_BASE_URL = BASE_URL + '/api/foodItems'
export const GET_ALL_FOOD = FOOD_BASE_URL + '/foods'
export const FOOD_BY_ID = FOOD_BASE_URL + '/foods/'

