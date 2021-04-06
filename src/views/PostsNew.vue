<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <p>
        Title:
        <input v-model="newPostTitle" />
      </p>
      <p>
        Body:
        <input v-model="newPostBody" />
      </p>
      <p>
        Image Url:
        <input v-model="newPostImage" />
      </p>
      <button v-on:click="createPost()">Create New Post</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Create a New Blog Post!",
      posts: [],
      newPostTitle: "",
      newPostBody: "",
      newPostImage: "",
    };
  },
  created: function () {},
  methods: {
    createPost: function () {
      var params = {
        title: this.newPostTitle,
        body: this.newPostBody,
        image_url: this.newPostImage,
      };
      axios.post("/api/posts", params).then((response) => {
        console.log("creating post", response);
        this.posts.push(response.data);
        this.newPostTitle = "";
        this.newPostBody = "";
        this.newPostImage = "";
      });
    },
  },
};
</script>
