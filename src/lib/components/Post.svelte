<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { IPost } from "../services/post-service";
  export let post: IPost;

  const toggleLike = (_e) => {
    dispatch("toggleLike", { postID: post.id });
  };

  const dispatch = createEventDispatcher();
</script>

<div class="container">
  <img src={post.imageURL} alt={post.title} />
  <header>
    <h1>{post.title}</h1>
    <button class="like-button" on:click={toggleLike}>
      <!-- License: CC Attribution. Made by remartwork: https://dribbble.com/remartwork -->
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 9.07503C22 10.7199 21.2857 12.1591 20.1633 13.2899L12.5102 20.7944C12.3061 20.8972 12.2041 21 12 21C11.7959 21 11.5918 20.8972 11.4898 20.7944L3.83673 13.1871C2.71429 12.0563 2 10.5142 2 8.86943C2 7.3274 2.71429 5.88818 3.83673 4.75737C5.06122 3.62655 6.59184 2.90694 8.22449 3.00974C9.55102 3.00974 10.7755 3.52375 11.7959 4.34616C14.2449 2.39293 17.7143 2.59853 19.9592 4.86017C21.2857 5.88818 22 7.4302 22 9.07503Z"
          stroke="black"
          fill={post.liked ? "#ed4956" : ""}
        />
      </svg>
    </button>
  </header>
  <p>{post.description}</p>
  <p class="date">{post.date}</p>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 1em;
    border-radius: 7.5px;
    background-color: #fafafa;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .like-button {
    background-color: Transparent;
    border: none;
    cursor: pointer;
    margin: 0.25em 0;
  }
  .like-button:hover {
    opacity: 50%;
  }
  .like-button:active {
    background: none;
  }

  /* only applies on keyboard triggered focus (for accessibilty) */
  .like-button:focus-visible {
    outline: none;
    box-shadow: 0 0 2px 2px #51a7e8;
  }

  .date {
    font-size: 0.75em;
    color: #8e8e8e;
  }

  h1 {
    font-size: 1.5em;
  }

  p {
    margin-top: 0;
  }

  img {
    display: block;
    margin: 0 auto;
    border: 1px solid #d2d2d2;
    max-width: 100%;
    height: auto;
  }
</style>
