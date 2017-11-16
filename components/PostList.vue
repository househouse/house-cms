<template lang="html">
  <div>
    <div class="post" v-for="post in posts">
      <h3><nuxt-link :to="slugToUrl(post.slug)">{{ post.title }}</nuxt-link></h3>
      <div v-html="post.excerpt"></div>
      <strong class="more"><nuxt-link :to="slugToUrl(post.slug)">read more</nuxt-link></strong>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts', 'title'],
  methods: {
    slugToUrl(slug) {
      return `/${slug}`;
    }
  },
  mounted() {
    this.$store.dispatch('getCategories');
  },
}
</script>

<style lang="css">
</style>
