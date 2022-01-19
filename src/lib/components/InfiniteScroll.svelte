<script lang="ts">
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  const threshold = 100; // i.e. offset from bottom of page (including overflow)
  const dispatch = createEventDispatcher();

  let isLoadingMore = false; // used to avoid spamming api requests

  onMount(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
  });

  const onScroll = (e: Event) => {
    const element = (e.target as any).scrollingElement as HTMLElement;

    // i.e. y-pos of browser window bottom relative to total page height
    const offset =
      element.scrollHeight - element.clientHeight - element.scrollTop;

    if (offset <= threshold) {
      if (!isLoadingMore) {
        dispatch("loadMore");
      }
      isLoadingMore = true;
    } else {
      isLoadingMore = false;
    }
  };

  onDestroy(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  });
</script>
