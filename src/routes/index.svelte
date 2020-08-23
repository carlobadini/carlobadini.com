<script>
  import t from "../get-data";
</script>

<style>
  hr {
    width: 5rem;
    margin: 0;
    border-width: 0.1rem;
    border-color: #95389e;
  }
  h1 {
    margin-top: 0;
  }
  .f {
    display: flex;
  }
  img {
    margin: 0 auto;
    margin-right: 2.5rem;
    max-width: 350px;
    display: block;
  }
  @media (max-width: 900px) {
    img {
      margin: 0 auto 2.5rem;
      max-width: 100%;
    }
    .f {
      display: block;
    }
  }
</style>

<svelte:head>
  <title>Carlo Badini</title>
</svelte:head>

<div class="f">
  <div>
    <img alt="" src="/carlo.png" />
  </div>
  <div>
    <h1>{t('Text', 'about.title')}</h1>
    <p>{t('Text', 'about.subtitle')}</p>
    <hr />
    {t('Text', 'about.content')}
  </div>
</div>
