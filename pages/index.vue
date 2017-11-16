<template lang="html">
  <div :class="['network', online ? 'online' : 'offline']">
    {{ online ? 'online' : 'offline' }}
    <section>
      <h2 class="subtitle">
        Thingthingthing
      </h2>
    </section>
    <section>
      <div class="content">
        <PostList v-if="posts" :posts="posts" title="Recent Posts" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as api from '@/api';
import PostList from '../components/PostList';

  export default {
    components: {
      PostList,
    },
    async asyncData({ params }) {
      const posts = await api.getPosts();
      const formattedPosts = Object.assign({}, {
        posts: posts.map(post => ({
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered,
          excerpt: post.excerpt.rendered,
          slug: post.slug,
        })),
      })
      return {
        posts: formattedPosts.posts,
      };
    },
    data() {
      return {
        title: 'default',
        online: true,
      };
    },
    mounted() {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.$store.dispatch('getCategories');
      this.online = Boolean(window.navigator.onLine);
      window.addEventListener('offline', this.toggleNetworkStatus);
      window.addEventListener('online', this.toggleNetworkStatus);
    },
    methods: {
      toggleNetworkStatus ({ type }) {
        this.online = type === 'online';
      }
    },
    destroyed () {
      window.removeEventListener('offline', this.toggleNetworkStatus)
      window.removeEventListener('online', this.toggleNetworkStatus)
    },
  }
</script>

<style lang="css">
</style>
