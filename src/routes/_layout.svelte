<script>
  import Header from "../components/Header.svelte";

  export let segment;
</script>

<style>
  * {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>

<Header {segment} />

<main>
  <slot />
</main>
