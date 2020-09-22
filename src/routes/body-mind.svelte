<script>
  import humanize from "humanize-duration";
  import t from "../get-data";
  let meditationTime = humanize(
    (new Date().getTime() - new Date("2011-03-04").getTime()) / 144,
    { round: true, units: ["d", "h", "m"] }
  );
</script>

<style>
  h1 {
    margin-top: 0;
  }
  .big {
    font-weight: lighter;
    font-size: 200%;
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
    src="https://stethoscope.js.org/embed/?repo=CarloBadini/life&api=rescuetime-time-tracking&latest=top-overview.weeks" />
  <p>
    {@html t('Text', 'body.productivity.content')}
  </p>
  <h2>
    {@html t('Text', 'body.meditation.title')}
  </h2>
  <p>
    {@html t('Text', 'body.meditation.subtitle')}
  </p>
  <div class="big">{meditationTime}</div>
  <hr />
  <h2>
    {@html t('Text', 'body.sleep.title')}
  </h2>
  <p>
    {@html t('Text', 'body.sleep.subtitle')}
  </p>
  <iframe
    title="Sleep data"
    src="https://stethoscope.js.org/embed/?repo=CarloBadini/life&api=oura-sleep&latest=total.weeks&color=%2395389E" />
</div>
