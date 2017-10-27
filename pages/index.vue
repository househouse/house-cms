<template lang="html">
  <div :class="['network',online ? 'online' : 'offline']">
    {{ online ? 'online' : 'offline' }}
  </div>
</template>

<script>
import api from '@/api';

  export default {
    async asyncData({ params }) {
      const { data } = await api.getPosts();

      return {
        posts: data,
      };
    },
    data () {
      return {
        online: true,
      };
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine);
      window.addEventListener('offline', this.toggleNetworkStatus);
      window.addEventListener('online', this.toggleNetworkStatus);
    },
    methods: {
      toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this.toggleNetworkStatus)
      window.removeEventListener('online', this.toggleNetworkStatus)
    }
  }
</script>

<style lang="css">
</style>
