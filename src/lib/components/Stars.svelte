<script lang="ts">
  type StarType = "small" | "medium" | "big";

  type Star = {
    type: StarType;
    left: string;
    bottom: string;
    animationDuration: string;
  };

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * max) + min;
  };

  const makeStars = (count: number, type: StarType): Star[] => {
    const stars: Star[] = [];

    for (let i = 0; i < count; i++) {
      stars.push({
        type,
        left: `${randomNumber(0, 99)}%`,
        bottom: `${randomNumber(0, 99)}%`,
        animationDuration: `${randomNumber(50, 200)}s`,
      });
    }

    return stars;
  };

  const stars: Star[] = [
    ...makeStars(100, "small"),
    ...makeStars(85, "medium"),
    ...makeStars(70, "big"),
  ];
</script>

<div>
  {#each stars as star}
    <div
      class:star
      class={star.type}
      style:left={star.left}
      style:bottom={star.bottom}
      style:animation-duration={star.animationDuration}
    />
  {/each}
</div>

<style>
  .star {
    position: fixed;
    background: #ffffff;
    border-radius: 50px;
    animation: move;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .small {
    width: 1px;
    height: 1px;
  }

  .medium {
    width: 2px;
    height: 2px;
  }

  .big {
    width: 3px;
    height: 3px;
  }

  @keyframes move {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1000px);
    }
  }
</style>
