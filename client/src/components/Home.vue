<template>
    <div class="container">
       <button v-on:click="toggleForm" v-if="!formActive" class="btn btn-outline-primary btn-lg mt-3">Open Form</button>
      <button v-on:click="toggleForm" v-if="formActive" class="btn btn-outline-primary btn-lg mt-3">Close Form</button>
    <form class="form" @submit.prevent="createPost" v-if="showForm">
      <h3 class="display-4 text-center">Create A Post</h3>
       <hr>
  <h2>
    <label for="body" class="font-weight-bold">Post</label>
  </h2>
    <div class="form-group">
    <textarea class="form-control form-control-lg"  v-model="body"
    rows="3"></textarea>
  </div>
<button type="submit" class="btn btn-success" v-if="!submittingPost">Submit</button>
<div class="spinner-grow text-success" role="status" v-if="submittingPost">
    </div>
<hr>
  </form>
      <h3 class="display-4 text-center">Posts ({{posts.length}})</h3>
      <div class="alert alert-warning mt-2" v-if="loading">
      <h3><div class="spinner-border" role="status">&nbsp;&nbsp;
  <span class="sr-only"></span></div> Loading Posts</h3>
    </div>
        <hr>
        <p class="error" v-if="error">{{error}}</p>
       <div class="card mb-3" v-for="post in posts"
        v-bind:key="post._id">
        <div class="card-body">
              <b><h3 class="">{{ post.date |  moment("ddd Do MMMM YYYY") }}</h3></b>
              <hr>
            <h4 class="mt-0">{{post.body}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import PostService from "../PostService.js";
import axios from "axios";
const url = "http://localhost:5000/api/posts/";
export default {
  name: "Home",
  data() {
    return {
      posts: [],
      error: "",
      body: "",
      title: "",
      author: "",
      loading: false,
      submittingPost:false,
      showForm: false,
      formActive: false,
    };
  },
  async created() {
     this.getPosts();
  },
  methods: {
    async createPost() {
      if (this.body){
       this.submittingPost = !this.submittingPost;
       await PostService.addPost(this.body);
       this.posts = await PostService.getPosts();
       this.submittingPost = !this.submittingPost;
         this.$toasted.show("Your post was submitted succesfully", { 
            theme: "bubble", 
            position: "top-center", 
        duration : 5000,
        icon: "success"
        });
       this.body = '';
      } 
      else this.$toasted.show("Please fill in this field", { 
	 theme: "", 
	 position: "bottom-center", 
   duration : 2000,
   icon: "warning"
});
        
    },
    async delPost(id) {
      await axios.delete(`${url}${id}`);
      this.posts = await PostService.getPosts();
    },
    async getPosts(){
    this.loading = true;
     this.submittingPost = false;
    try {
      this.posts = await PostService.getPosts();
      this.loading = false;
      this.submittingPost = false;
    } catch (err) {
      this.error = err.message;
      this.loading = false;
    }
    },
     toggleForm() {
      this.showForm = !this.showForm;
      this.formActive =! this.formActive;
    },
}
};
</script>
<style>


</style>


