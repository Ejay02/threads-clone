// ~/composables/usePosts.js
import { useFetch } from "#app";

export const usePosts = () => {
  const getPosts = async () => {
    const res = await useFetch("/api/get-all-posts");
    return res.data;
  };

  return { getPosts };
};
