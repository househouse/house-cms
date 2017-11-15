// Vuex is included in the nuxt package but eslint gets angry if we don't
// have it in our package.json
// eslint-disable-next-line
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const store = () => (
  new Vuex.Store({
    state: {
      page: {
        author: null,
        date: null,
        dateGmt: null,
        excerpt: null,
        featuredMedia: null,
        guid: null,
        link: null,
        slug: null,
        title: null,
        content: null,
      },
      posts: null,
      post: {
        title: null,
        content: null,
      },
      category: {
        id: null,
        name: null,
        slug: null,
      },
      categories: [],
    },
    actions,
    getters,
    mutations,
  })
);

export default store;
