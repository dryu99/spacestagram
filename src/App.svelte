<script lang="ts">
  import { onMount } from "svelte";
  import type { Post } from "./lib/services/post-service";
  import postService from "./lib/services/post-service";

  let posts: Post[] = [];

  onMount(async () => {
    posts = await postService.getSome(2);
    console.log({ posts });
  });
</script>

<main>
  <h1>Spacestagram</h1>
  <ul>
    {#each posts as post, i (post.imageURL + i)}
      <!-- TODO read this https://svelte.dev/tutorial/keyed-each-blocks -->
      <li>
        <div class:post>
          <p>{post.title}</p>
          <p>{post.description}</p>
          <p>{post.liked}</p>
          <img src={post.imageURL} alt={post.title} />
        </div>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .post > img {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
