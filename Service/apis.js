import { commonRequest } from './axiosCall';
import { BASE_URL } from './helper';

// user contact us form handler
export const userContactMessage = async (data, header) => {
  return await commonRequest('POST', `${BASE_URL}/user/contact`, data, header);
};

// Sell property form handler 
export const userSellPropertyHandle = async(data, header) => {
  return await commonRequest('POST', `${BASE_URL}/property/sell`, data, header);
};

// Buy Properties handler 
export const buyPropertyHandle = async () => {
  return await commonRequest('GET', `${BASE_URL}/property/buy`, '');
};

// View Property By Id Handler
export const viewPropertyByIdHandle = async (id) => {
  return await commonRequest('GET', `${BASE_URL}/property/view/${id}`, '');
};