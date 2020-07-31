<script>
  export let segment;
</script>

<style>
  header {
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
    width: 20rem;
    padding: 2rem;
    box-sizing: border-box;
  }
  h1 {
    margin-top: 0;
  }
</style>

<header>
  <h1>Carlo Badini</h1>
  <p>
    Entrepreneur, Early Stage Investor. likes tech, design, economics,
    psychology, chestnuts
  </p>
  <nav>
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          Intro
        </a>
      </li>
      <li>
        <a aria-current={segment === 'work' ? 'page' : undefined} href="work">
          Work
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'learning' ? 'page' : undefined}
          href="learning">
          Learning
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'investments' ? 'page' : undefined}
          href="investments">
          Investments
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'body-mind' ? 'page' : undefined}
          href="body-mind">
          Body &amp; Mind
        </a>
      </li>
    </ul>
  </nav>
</header>
