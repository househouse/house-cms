import * as api from '../api';
import * as types from './mutation-types';

export const getPage = ({ commit }, slug) => (
  new Promise((resolve, reject) => {
    api.getPage(slug).then((response) => {
      commit(types.GET_PAGE, response);
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  })
);

export const getPost = ({ commit }, slug) => (
  new Promise((resolve, reject) => {
    api.getPost(slug).then((response) => {
      commit(types.GET_POST, response);
    }).catch((error) => {
      reject(error);
    });
  })
);

export const getPosts = ({ commit }) => (
  new Promise((resolve, reject) => {
    api.getPosts().then((response) => {
      commit(types.GET_POSTS, response);
    }).catch((error) => {
      reject(error);
    });
  })
);

export const getCategory = ({ commit }, slug) => (
  new Promise((resolve, reject) => {
    api.getCategory(slug).then((response) => {
      commit(types.GET_CATEGORY, response);
    }).catch((error) => {
      reject(error);
    });
  })
);

export const getCategories = ({ commit }, slug) => (
  new Promise((resolve, reject) => {
    api.getCategories(slug).then((response) => {
      commit(types.GET_CATEGORIES, response);
    }).catch((error) => {
      reject(error);
    });
  })
);
