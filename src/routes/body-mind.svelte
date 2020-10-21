<script>
  import humanize from "humanize-duration";
  import t from "../get-data";
  const data = t("Body").sort(
    (a, b) =>
      new Date(a.fields.Date).getTime() - new Date(b.fields.Date).getTime()
  );
  let meditationTime = humanize(
    (new Date().getTime() - new Date("2011-03-04").getTime()) / 144,
    { round: true, units: ["d", "h", "m"] }
  );
  let date = data[data.length - 1].fields.Date;
  let prev = null;
  let next = null;

  $: {
    const prevIndex = data.findIndex((i) => i.fields.Date === date) - 1;
    prev = data[prevIndex] ? prevIndex : null;
    const nextIndex = data.findIndex((i) => i.fields.Date === date) + 1;
    next = data[nextIndex] ? nextIndex : null;
  }
</script>

<style>
  h1 {
    margin-top: 0;
  }
  .big {
    font-weight: lighter;
    font-size: 200%;
  }
  .next-prev {
    padding: 0;
    background: none;
    font: inherit;
    border: none;
    margin: 0 0.5rem;
  }
  .next-prev:last-of-type {
    margin-right: 0;
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
    {@html t('Text', 'body.body.title')}
  </h2>
  <p>
    {@html t('Text', 'body.body.subtitle')}
  </p>
  {#each t('Body') as measurement}
    {#if date === measurement.fields.Date}
      <table>
        <thead>
          <tr>
            <th>Measurement</th>
            <th>
              {#if prev}
                <button
                  class="next-prev"
                  on:click={() => (date = data[prev].fields.Date)}
                  aria-label="Previous">&larr;</button>
              {/if}
              <span
                aria-live="polite">{new Date(date).toLocaleDateString()}</span>
              {#if next}
                <button
                  class="next-prev"
                  on:click={() => (date = data[next].fields.Date)}
                  aria-label="Next">&rarr;</button>
              {/if}
            </th>
          </tr>
        </thead>
        {#each Object.keys(measurement.fields).filter((key) => key !== 'Date') as field}
          <tbody>
            <tr>
              <td>{field}</td>
              <td>{measurement.fields[field]}</td>
            </tr>
          </tbody>
        {/each}
      </table>
    {/if}
  {/each}
  <h2>
    {@html t('Text', 'body.sleep.title')}
  </h2>
  <p>
    {@html t('Text', 'body.sleep.subtitle')}
  </p>
  <iframe
    title="Sleep data"
    src="https://stethoscope.js.org/embed/?repo=CarloBadini/life&api=oura-sleep&latest=weeks" />
</div>
