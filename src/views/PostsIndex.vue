<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
      <br />
      {{ post.body }}
      <br />
      {{ post.image }}
      <hr />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "ALL OF THE POSTS!",
      posts: [],
    };
  },
  created: function () {
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      axios.get("/api/posts").then((response) => {
        console.log("posts index", response);
        this.posts = response.data;
      });
    },
  },
};
</script>
