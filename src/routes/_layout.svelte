<script>
  import Header from "../components/Header.svelte";
  export let segment;
</script>

<style>
  main {
    margin: 2.5rem 0;
    margin-left: 20rem;
  }
  main > div {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>

<Header {segment} />

<main>
  <div>
    <slot />
  </div>
</main>
