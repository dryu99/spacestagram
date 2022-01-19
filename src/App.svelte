<script lang="ts">
  import { onMount } from "svelte";
  import type { IPost } from "./lib/services/post-service";
  import postService from "./lib/services/post-service";
  import Post from "./lib/components/Post.svelte";
  import InfiniteScroll from "./lib/components/InfiniteScroll.svelte";

  const API_FETCH_AMOUNT = 10;

  let posts: IPost[] = [];
  let newPosts: IPost[] = [];

  const fetchPosts = async () => {
    newPosts = await postService.getSome(API_FETCH_AMOUNT);
  };

  // fetch initial batch
  onMount(async () => {
    fetchPosts();
  });

  $: posts = [...posts, ...newPosts];
</script>

<main>
  <h1>Spacestagram</h1>
  <ul>
    {#each posts as post, i (post.imageURL + i)}
      <li>
        <Post {post} />
      </li>
    {/each}
  </ul>
</main>

<InfiniteScroll on:loadMore={() => fetchPosts()} />

<style>
  main {
    background-color: black;
    padding: 2em 20vw;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 2em;
  }
</style>
