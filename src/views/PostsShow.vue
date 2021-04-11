<template>
  <div class="recipes-show">
    <h1>{{ message }}</h1>
    {{ post.title }}
    <hr />
    {{ post.body }}
    <hr />
    <img v-bind:src="post.image" />
    <hr />
    <router-link v-bind:to="`/posts/${this.$route.params.id}/edit`">Edit Post</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Seach for a post!",
      post: {},
    };
  },
  created: function () {
    console.log(this.$route.params.id);
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {},
};
</script>
