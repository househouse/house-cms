import * as types from './mutation-types';

export default {
  [types.GET_PAGE]: (state, page) => {
    Object.assign({}, state.page, {
      ...page,
      content: page.content.rendered,
      excerpt: page.excerpt.rendered,
      guid: page.guid.rendered,
      title: page.title.rendered,
    });
  },
  [types.GET_POST]: (state, post) => {
    Object.assign({}, state.post, {
      ...post,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      guid: post.guid.rendered,
      title: post.title.rendered,
    });
  },
  [types.GET_POSTS]: (state, posts) => {
    Object.assign({}, state.posts, {
      posts: posts.map(post => ({
        id: post.id,
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        slug: post.slug,
      })),
    });
  },
  [types.GET_CATEGORY]: (state, category) => {
    Object.assign({}, state.category, {
      ...category,
    });
  },
  [types.GET_CATEGORIES]: (state, categories) => {
    Object.assign({}, state.categories, {
      ...categories,
    });
  },
};
