<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <p>
        Title:
        <input v-model="title" />
      </p>
      <p>
        Body:
        <input v-model="body" />
      </p>
      <p>
        Image Url:
        <input v-model="image" />
      </p>
      <button v-on:click="submit()">Edit Post</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Edit away bèbè",
      title: "",
      body: "",
      image: "",
      userId: "",
    };
  },
  created: function () {
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.title = response.data.title;
      this.body = response.data.body;
      this.image = response.data.image;
      this.UserId = response.data.user_id;
    });
  },
  methods: {
    submit: function () {
      var params = {
        title: this.title,
        body: this.body,
        image: this.image,
      };
      axios.patch(`/api/posts/${this.$route.params.id}`, params).then((response) => {
        console.log(response.data);
        this.$router.push(`/posts/${this.$route.params.id}`);
      });
    },
  },
};
</script>
