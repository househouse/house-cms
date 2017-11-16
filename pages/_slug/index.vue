<template lang="html">
  <article class="">
    <h2>{{ post.title }}</h2>
      <p v-html='post.content' />
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import * as api from '@/api';

export default {
  async asyncData({ params }) {
    const post = await api.getPost(`${params.slug}`)
    const formattedPost = Object.assign({}, {
      ...post[0],
      content: post[0].content.rendered,
      excerpt: post[0].excerpt.rendered,
      guid: post[0].guid.rendered,
      title: post[0].title.rendered,
    });
    return {
      post: formattedPost,
    }
  },
  mounted() {
    this.$store.dispatch('getPosts');
    this.$store.dispatch('getCategories');
  },
  computed: {
    ...mapGetters([
      'posts',
      'categories',
    ])
  },
}
</script>

<style lang="css">
</style>
