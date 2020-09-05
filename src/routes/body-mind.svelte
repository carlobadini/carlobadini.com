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
  <h2>
    {@html t('Text', 'body.productivity.title')}
  </h2>
  <p>
    {@html t('Text', 'body.productivity.subtitle')}
  </p>
  <iframe
    title="Sleep data"
    src="https://carlobadini.github.io/life/?repo=CarloBadini/life&api=rescuetime-time-tracking&latest=top-overview.days" />
  <p>
    {@html t('Text', 'body.productivity.content')}
  </p>
  <h2>
    {@html t('Text', 'body.sleep.title')}
  </h2>
  <p>
    {@html t('Text', 'body.sleep.subtitle')}
  </p>
  <iframe
    title="Sleep data"
    src="https://carlobadini.github.io/life/?repo=CarloBadini/life&api=oura-sleep&latest=total.days&color=%2395389E" />
</div>
