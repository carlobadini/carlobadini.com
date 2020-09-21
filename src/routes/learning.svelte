<script>
  import t from "../get-data";
</script>

<style>
  h1 {
    margin-top: 0;
  }
  .list:not(.e) li div:last-child div:nth-child(2) {
    opacity: 1;
    margin-bottom: 0;
  }
  .list.e li div:last-child div:nth-child(1) {
    opacity: 1;
    margin-bottom: 0;
  }
  ul {
    margin-top: 2rem;
  }
</style>

<svelte:head>
  <title>{t('Text', 'learning.title')} · {t('Text', 'name')}</title>
</svelte:head>

<div class="text">
  <h1>{t('Text', 'learning.title')}</h1>
  <p>
    {@html t('Text', 'learning.subtitle')}
  </p>
  <h2>{t('Text', 'learning.education.title')}</h2>
  <ul class="list e">
    {#each t('Education') as education}
      <li>
        <div>
          <div class="img">
            <img alt="" src={education.fields.Icon[0].url} />
          </div>
        </div>
        <div>
          <div>{education.fields.Name}</div>
          <div>{education.fields.Year}</div>
          <div>{education.fields.Description}</div>
        </div>
      </li>
    {/each}
  </ul>
  <h2>{t('Text', 'learning.books.title')}</h2>
  <ul class="blocks">
    {#each t('Books') as book}
      <li>
        <div
          class="i"
          style={`background-image: url("https://tse2.mm.bing.net/th?q=${encodeURIComponent(`${book.fields.Name} ${book.fields.Author} book cover`)}&w=70&h=100&c=7&rs=1&p=0&dpr=3&pid=1.7&mkt=en-IN&adlt=moderate")`} />
        <div>{book.fields.Name}</div>
        <div>{book.fields.Author}</div>
      </li>
    {/each}
  </ul>
  <h2>{t('Text', 'learning.podcasts.title')}</h2>
  <ul class="blocks square">
    {#each t('Podcasts') as podcast}
      <li>
        <div
          class="i"
          style={`background-image: url("https://tse2.mm.bing.net/th?q=${encodeURIComponent(`${podcast.fields.Name} ${podcast.fields.Author} podcast cover`)}&w=70&h=70&c=7&rs=1&p=0&dpr=3&pid=1.7&mkt=en-IN&adlt=moderate")`} />
        <div>{podcast.fields.Name}</div>
        <div>{podcast.fields.Author}</div>
      </li>
    {/each}
  </ul>
  <h2>{t('Text', 'learning.news.title')}</h2>
  <ul class="list">
    {#each t('News') as news}
      <li>
        <div>
          <div class="img"><img alt="" src={news.fields.Icon[0].url} /></div>
        </div>
        <div>
          <div>{news.fields.Name}</div>
          <div>{news.fields.Description}</div>
        </div>
      </li>
    {/each}
  </ul>
</div>
