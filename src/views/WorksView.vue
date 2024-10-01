<script>
import axios from 'axios';
export default {
  name: 'WorksView',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios.get(`${this.$apiUrl}`)
      .then(response => {
        console.log(response.data);
        
        this.posts = response.data;
    })
  }
}
</script>

<template>
  <div class="about">
    <h1>Progetti</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<style>

</style>
