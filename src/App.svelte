<script lang="ts">
  import { onMount } from "svelte";
  import type { IPost } from "./lib/services/post-service";
  import postService from "./lib/services/post-service";
  import Post from "./lib/components/Post.svelte";
  import InfiniteScroll from "./lib/components/InfiniteScroll.svelte";

  const API_FETCH_AMOUNT = 10;

  let posts: IPost[] = [];

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

  // fetch initial batch
  onMount(async () => {
    // fetchPosts();
    posts = [
      {
        id: "1",
        date: "1999-03-19",
        description:
          'This month, the Mars Global Surveyor (MGS) spacecraft began its primary mission to the red planet. Orbiting about once every two hours at an altitude of over 200 miles, instruments onboard MGS now regularly explore the Martian surface and atmosphere. This MGS polar mapping orbit was set up to achieve a favorable "afternoon" sun-angle for imaging as the spacecraft crosses over the day side of the planet. Mars\' rotation will allow complete coverage of the surface roughly once every week with mapping operations planned for one Martian year (687 Earth days). These two opposite hemisphere views of Mars were pieced together from MGS wide-angle camera scans made in early March (blue and red lines mark the scan edges). Water-ice clouds can be seen hovering over the surface while the north polar cap is visible at the top of each image.',
        title: "Mapping Mars",
        imageURL: "https://apod.nasa.gov/apod/image/9903/marsm_msssmgs.jpg",
        liked: false,
      },
      {
        id: "2",
        date: "2004-01-05",
        description:
          "After a seven month voyage of nearly 500 million kilometers through interplanetary space, NASA's Spirit Rover has reached the surface of Mars. Scroll right and see a mosaic panorama of Spirit's first images returned from its landing site in Gusev Crater! Taken by Spirit's navigation camera, the panorama covers 360 degrees, with the spacecraft in the foreground and the floor of Gusev Crater, thought to be an ancient lake bed, extending to the horizon. The entry, descent, and landing phase of Spirit's mission - referred to by mission planners as \"Six Minutes of Terror\" - began Saturday night around 8:30pm PST as Spirit entered the martian atmosphere at about 20,000 kilometers per hour.  Updates on Spirit's status will be posted throughout the day.",
        title: "Spirit Pan from Gusev Crater",
        imageURL: "https://apod.nasa.gov/apod/image/0401/spiritpan_f1.jpg",
        liked: false,
      },
    ];
  });
</script>

<main>
  <h1>Spacestagram</h1>
  <ul>
    {#each posts as post (post.id)}
      <li>
        <Post {post} on:toggleLike={toggleLike} />
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
    margin-bottom: 3em;
  }
</style>
