// import { defineStore } from "pinia";
// // import getAllPosts from "~/server/api/get-all-posts";

// export const useUserStore = defineStore("user", {
//   state: () => ({
//     posts: [],
//     isMenuOverlay: false,
//     isLogoutOverlay: false,
//   }),

//   actions: {
//     async getAllPosts() {
//       let res = await useFetch("/api/get-all-posts.js");
//       this.posts = res.data;

//       return res.data;
//     },
//   },
// });

import { defineStore } from "pinia";
import { usePosts } from "~/composables/usePosts";

export const useUserStore = defineStore("user", {
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),
  actions: {
    async getAllPosts() {
      const { getPosts } = usePosts();
      this.posts = await getPosts();
    },
  },
});

// module.exports = useUserStore;
