<script>
  import t from "../get-data";
</script>

<style>
  h1 {
    margin-top: 0;
  }
  .text {
    max-width: 700px;
  }
</style>

<svelte:head>
  <title>{t('Text', 'body.title')} · {t('Text', 'name')}</title>
</svelte:head>

<div class="text">
  <h1>{t('Text', 'body.title')}</h1>
  <p>
    {@html t('Text', 'body.subtitle')}
  </p>
  <!-- <h2>{$t('Text', 'body.productivity.title')}</h2> -->
  <!-- <p>{$t('Text', 'body.productivity.subtitle')}</p>
  <p>{$t('Text', 'body.productivity.content')}</p> -->
</div>
