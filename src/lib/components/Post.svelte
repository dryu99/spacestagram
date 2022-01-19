<script lang="ts">
  import type { IPost } from "../services/post-service";
  export let post: IPost;
</script>

<div class="post-container">
  <img src={post.imageURL} alt={post.title} />
  <h1>{post.title}</h1>
  <p>{post.description}</p>
  <p>{post.liked}</p>
</div>

<style>
  .post-container {
    padding: 1em;
    border-radius: 7.5px;
    background-color: #fafafa;
  }

  h1 {
    font-size: 1.5em;
  }

  img {
    border: 1px solid #d2d2d2;
    max-width: 100%;
    height: auto;
  }
</style>
