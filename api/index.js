// Customize this file to fit the api structure of your CMS. The default is
// wordpress, but just customize the filtered data objects and the baseUrl

import axios from 'axios';
import humps from 'humps';

export const API_URL = process.env.baseUrl;

axios.defaults.baseURL = API_URL;

const handleRes = (response, resolve) => {
  const { data } = response;
  const camelizedResponse = humps.camelizeKeys(data);
  resolve(camelizedResponse);
};
const handleErr = (error, reject) => {
  reject(error);
};
const request = (requestType, url, data = null) => (
  new Promise((resolve, reject) => {
    axios[requestType](url, data)
      .then((response) => { handleRes(response, resolve); })
      .catch((error) => { handleErr(error, reject); });
  })
);

export const getPage = slug => (request('get', `pages?slug=${slug}`));
export const getPost = slug => (request('get', `posts?slug=${slug}`));
export const getPosts = () => (request('get', 'posts'));
export const getCategory = slug => (request('get', `categories?slug=${slug}`));
export const getCateogryPosts = id => (request('get', `posts?categories=${id}`));

export const getCategories = () => (request('get', 'categories'));
