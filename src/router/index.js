import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fun from "../views/Fun.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Posts from "../views/PostsIndex.vue";
import NewPost from "../views/PostsNew.vue";
import ShowPost from "../views/PostsShow.vue";
import EditPost from "../views/PostsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/fun",
    name: "Fun",
    component: Fun,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/posts/new",
    name: "New Post",
    component: NewPost,
  },
  {
    path: "/posts/:id",
    name: "Show Post",
    component: ShowPost,
  },
  {
    path: "/posts/:id/edit",
    name: "Edit Post",
    component: EditPost,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
