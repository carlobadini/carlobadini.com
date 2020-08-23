<script>
  import t from "../get-data";
</script>

<style>
  h1 {
    margin-top: 0;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  .text {
    max-width: 700px;
  }
  blockquote {
    margin: 0;
  }
  ul + h2 {
    border-top: 1px solid #dedede;
    margin-top: 2rem;
    padding-top: 2rem;
  }
</style>

<svelte:head>
  <title>{t('Text', 'work.title')} · {t('Text', 'name')}</title>
</svelte:head>

<div class="text">
  <h1>{t('Text', 'work.title')}</h1>
  <blockquote>
    <p>
      {@html t('Text', 'work.subtitle')}
    </p>
  </blockquote>
  <h2>{t('Text', 'work.experiences.title')}</h2>
  <ul class="list">
    {#each t('Experiences') as experience}
      <li>
        <div>
          <div class="img">
            <img alt="" src={experience.fields.Icon[0].url} />
          </div>
        </div>
        <div>
          <div>{experience.fields.Position}, {experience.fields.Company}</div>
          <div>{experience.fields.Date}</div>
          <div>{experience.fields.Description}</div>
        </div>
      </li>
    {/each}
  </ul>
  <h2>{t('Text', 'work.awards.title')}</h2>
  <ul class="list">
    {#each t('Awards') as award}
      <li>
        <div>
          <div class="img">
            <img alt="" src={award.fields.Icon[0].url} />
          </div>
        </div>
        <div>
          <div>{award.fields.Award}</div>
          <div>{award.fields.Year}</div>
          <div>{award.fields.Description}</div>
        </div>
      </li>
    {/each}
  </ul>
  <h2>{t('Text', 'work.speaking.title')}</h2>
  <p>
    {@html t('Text', 'work.speaking.content')}
  </p>
  <ul class="logos">
    {#each t('Speaking') as speaking}
      <li>
        <div
          class="img"
          style={`background-image: url("${speaking.fields.Icon[0].url}")`} />
        <div>{speaking.fields.Name}</div>
      </li>
    {/each}
  </ul>
  <h2>{t('Text', 'work.press.title')}</h2>
  <p>
    {@html t('Text', 'work.press.content')}
  </p>
  <ul class="logos">
    {#each t('Press') as press}
      <li>
        <div
          class="img"
          style={`background-image: url("${press.fields.Icon[0].url}")`} />
        <div>{press.fields.Name}</div>
      </li>
    {/each}
  </ul>
  <h2>{t('Text', 'work.volunteer.title')}</h2>
  <ul class="list">
    {#each t('Volunteer') as volunteer}
      <li>
        <div>
          <div class="img">
            <img alt="" src={volunteer.fields.Icon[0].url} />
          </div>
        </div>
        <div>
          <div>{volunteer.fields.Name}</div>
          <div>{volunteer.fields.Year}</div>
          <div>{volunteer.fields.Description}</div>
        </div>
      </li>
    {/each}
  </ul>
</div>
