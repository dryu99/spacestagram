<script lang="ts">
  import type { IPost } from "../services/post-service";
  export let post: IPost;
</script>

<div class="post-container">
  <img src={post.imageURL} alt={post.title} />
  <p>{post.title}</p>
  <p>{post.description}</p>
  <p>{post.liked}</p>
</div>

<style>
  .post-container {
    border: 1px solid #ff3e00;
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
