<template>
    <div class="container">
      <h3 class="display-4 text-center">Pending Posts ({{posts.length}})</h3>
        <hr>
        <p class="error" v-if="error">{{error}}</p>
       <div class="card mb-3" v-for="post in posts"
        v-bind:key="post._id">
        <div class="card-body">
        {{post._id}}
              <b><h3 class="">{{ post.date |  moment("ddd Do MMMM YYYY") }}</h3></b>
              <hr>
            <h4 class="mt-0">{{post.body}}</h4>
            <button v-on:click="approvePost(post._id)" class="btn btn-success btn-sm mt-2">Approve</button>
            <button v-on:click="delPost(post._id)" class="btn btn-danger btn-sm mt-2">Delete</button>

            </div>
        </div>
    </div>
</template>
<script>
import PostService from "../PostService.js";
import axios from "axios";
const url = "/api/posts/pg/";
export default {
  name: "Pending",
  data() {
    return {
      posts: [],
      error: "",
      body: "",
      title: "",
      author: "",
    };
  },
  async created() {
     this.getPosts();
  },
  methods: {
    async getPosts(){
    try {
      this.posts = await PostService.getPending();
    } catch (err) {
      this.error = err.message;
    }
    },
    async delPost(id) {
      await axios.delete(`${url}${id}`);
      this.posts = await PostService.getPending();
    },
},
};
</script>
<style>

</style>


