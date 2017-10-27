// Customize this file to fit the api structure of your CMS. The default is
// wordpress, but just customize the filtered data objects and the baseUrl

import axios from 'axios';

export default {
  baseUrl: 'http://localhost:8888/wp-json/wp/v2/',
  getPage(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseurl = this.baseUrl;
      axios.get(`pages?slug=${slug}`)
        .then((response) => {
          const data = [...response.data];
          const filtered = {
            content: data.content.rendered,
            author: data.author,
            date: data.date,
            date_gmt: data.date_gmt,
            excerpt: data.excerpt.rendered,
            featured_media: data.featured_media,
            guid: data.guid.rendered,
            link: data.link,
            slug: data.slug,
            title: data.title.rendered,
          };
          resolve(filtered);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getPost(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseurl = this.baseUrl;
      axios.get(`posts?slug=${slug}`)
        .then((response) => {
          const data = [...response.data];
          const filtered = {
            content: data.content.rendered,
            author: data.author,
            date: data.date,
            date_gmt: data.date_gmt,
            excerpt: data.excerpt.rendered,
            featured_media: data.featured_media,
            guid: data.guid.rendered,
            link: data.link,
            slug: data.slug,
            title: data.title.rendered,
          };
          resolve(filtered);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getPosts() {
    return new Promise((resolve, reject) => {
      axios.defaults.baseurl = this.baseUrl;
      axios.get('http://localhost:8888/wp-json/wp/v2/posts')
        .then((response) => {
          const data = [...response.data];
          const filtered = {
            total: response.headers['x-wp-total'],
            totalPages: response.headers['x-wp-totalpages'],
            data: data.map(item => ({
              id: item.id,
              title: item.title.rendered,
              content: item.content.rendered,
              excerpt: item.excerpt.rendered,
              slug: item.slug,
            })),
          };
          resolve(filtered);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getCategory(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseurl = this.baseUrl;
      axios.get(`categories?slug=${slug}`)
        .then((response) => {
          const data = [...response.data];
          return {
            id: data.id,
            name: data.name,
            slug: data.slug,
          };
        })
        .then((category) => {
          axios.get(`posts?categories=${category.id}`)
            .then((response) => {
              const data = [...response.data];
              const categoryPosts = data.map(item => ({
                id: item.id,
                title: item.title.rendered,
                content: item.content.rendered,
                excerpt: item.excerpt.rendered,
                slug: item.slug,
              }));
              resolve(categoryPosts);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getCategories() {
    return new Promise((resolve, reject) => {
      axios.defaults.baseurl = this.baseUrl;
      axios.get('categories')
        .then((response) => {
          const data = [...response.data];
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
