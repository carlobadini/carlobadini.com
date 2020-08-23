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
  .list li div:last-child div:nth-child(2) {
    opacity: 1;
    margin-bottom: 0;
  }
  ul {
    margin-top: 2rem;
  }
</style>

<svelte:head>
  <title>{t('Text', 'investments.title')} · {t('Text', 'name')}</title>
</svelte:head>

<div class="text">
  <h1>{t('Text', 'investments.title')}</h1>
  <p>
    {@html t('Text', 'investments.subtitle')}
  </p>
  <ul class="list">
    {#each t('Investments') as investment}
      <li>
        <div>
          <div class="img">
            <img alt="" src={investment.fields.Icon[0].url} />
          </div>
        </div>
        <div>
          <div>{investment.fields.Name}</div>
          <div>{investment.fields.Description}</div>
        </div>
      </li>
    {/each}
  </ul>
</div>
