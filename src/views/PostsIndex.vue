<template>
  <div class="home">
    <p>
      Search by keyword:
      <input v-model="searchTerm" />
    </p>
    <h1>{{ message }}</h1>
    <div v-for="post in orderBy(filterBy(posts, searchTerm, 'title', 'body'), 'title', 1)" :key="post.id">
      <strong>Title:</strong>
      {{ post.title }}
      <br />
      <strong>Body:</strong>
      {{ post.body }}
      <br />
      <img v-bind:src="post.image" />
      <hr />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "ALL OF THE POSTS!",
      posts: [],
      searchTerm: "",
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
