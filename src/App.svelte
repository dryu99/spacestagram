<script lang="ts">
  import type { Post } from "./lib/types";

  const posts: Post[] = [
    {
      title: "test title",
      description: "test descriptiotniotenioteaw",
      liked: false,
      imageCapturedAt: new Date(),
      imageURL: "https://i.redd.it/0mriegkicyl61.jpg",
    },
    {
      title: "test title 2222",
      description: "yes",
      liked: false,
      imageCapturedAt: new Date(),
      imageURL: "https://i.redd.it/0mriegkicyl61.jpg",
    },
  ];
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
