<script>
  import t from "../get-data";
</script>

<style>
  hr {
    width: 5rem;
    margin: 0;
    border-width: 0.1rem;
    border-color: #95389e;
    background-color: #95389e;
  }
  h1 {
    margin-top: 0;
  }
  img {
    margin: 0 auto;
    width: 100%;
    margin-top: 2rem;
    max-width: 700px;
  }
</style>

<svelte:head>
  <title>{t('Text', 'name')}</title>
</svelte:head>

<div>
  <h1>
    {@html t('Text', 'about.title')}
  </h1>
  <p>
    {@html t('Text', 'about.subtitle')}
  </p>
  <hr />
  <p>
    {@html t('Text', 'about.content')}
  </p>
</div>

<div>
  <img
    alt=""
    src="https://dl.airtable.com/.attachmentThumbnails/cd676b6954c3ff979c254e9fe8c3ea9c/9c9ead7c" />
</div>
