<script lang="ts">
  import { onMount } from "svelte";
  import type { IPost } from "./lib/services/post-service";
  import postService from "./lib/services/post-service";
  import Post from "./lib/components/Post.svelte";
  import InfiniteScroll from "./lib/components/InfiniteScroll.svelte";
  import Stars from "./lib/components/Stars.svelte";
  import Loader from "./lib/components/Loader.svelte";

  const API_FETCH_AMOUNT = 10;

  let posts: IPost[] = [];
  let showLoader = false;

  const fetchPosts = async () => {
    const newPosts = await postService.getSome(API_FETCH_AMOUNT);
    posts = [...posts, ...newPosts];
  };

  const toggleLike = (e: any) => {
    posts = posts.map((post) =>
      post.id === e.detail.postID
        ? {
            ...post,
            liked: !post.liked,
          }
        : post
    );
  };

  const loadMorePosts = async () => {
    showLoader = true;
    await fetchPosts();
    showLoader = false;
  };

  // fetch initial batch
  onMount(async () => {
    await fetchPosts();
  });
</script>

<main>
  <div class="content">
    <header>
      <h1>Spacestagram</h1>
    </header>
    <ul>
      {#each posts as post (post.id)}
        <li>
          <Post {post} on:toggleLike={toggleLike} />
        </li>
      {/each}
    </ul>
    {#if showLoader}
      <Loader />
    {/if}
  </div>
</main>

<Stars />
<InfiniteScroll on:loadMore={loadMorePosts} />

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    padding: 0 2em;
  }

  .content {
    max-width: 1000px;
  }

  header {
    text-align: center;
  }

  h1 {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  ul {
    list-style-type: none;
    padding: 0;

    /* ensure list is overlayed on top of stars  */
    position: relative;
    z-index: 99;
  }

  li {
    margin-bottom: 3em;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
