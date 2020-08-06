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
    padding: 2.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .menu,
  .close {
    background-color: #eee;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
  }
  .menu {
    display: none;
    position: absolute;
    right: 2.5rem;
    top: 1.75rem;
  }
  @media (max-width: 1300px) {
    .menu {
      display: inline-block;
    }
    header {
      position: static;
      width: 100%;
    }
    nav,
    .close,
    .contact {
      display: none;
    }
    nav:target {
      display: block;
    }
    nav:target + .close {
      display: block;
    }
  }
  h1 {
    margin-top: 0;
  }
  p {
    color: #666;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    display: block;
    margin: 1rem 0;
  }
  a:hover {
    color: #000;
  }
  a span + span {
    margin-left: 0.5rem;
  }
  a[aria-current] {
    font-weight: bold;
    color: #95389e;
  }
  .linkedin {
    background-color: #0e75a8;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.66rem 1rem;
    margin-top: 1.5rem;
    text-align: center;
    position: relative;
  }
  .linkedin svg {
    position: absolute;
    left: 0.75rem;
    top: 0.75rem;
    height: 1.4rem;
    fill: #fff;
  }
  .linkedin:hover {
    background-color: #006191;
    color: #fff;
  }
</style>

<header>
  <div>
    <h1>Carlo Badini</h1>
    <p>
      Entrepreneur, Early Stage Investor. likes tech, design, economics,
      psychology, chestnuts
    </p>
  </div>
  <nav id="nav">
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          <span aria-hidden="true">🤝</span>
          <span>Intro</span>
        </a>
      </li>
      <li>
        <a aria-current={segment === 'work' ? 'page' : undefined} href="work">
          <span aria-hidden="true">💻</span>
          <span>Work</span>
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'learning' ? 'page' : undefined}
          href="learning">
          <span aria-hidden="true">📖</span>
          <span>Learning &amp; Education</span>
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'investments' ? 'page' : undefined}
          href="investments">
          <span aria-hidden="true">💸</span>
          <span>Investments</span>
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'body-mind' ? 'page' : undefined}
          href="body-mind">
          <span aria-hidden="true">🏃‍♂️</span>
          <span>Body &amp; Mind</span>
        </a>
      </li>
    </ul>
  </nav>
  <a href="#top" class="close">Close menu</a>
  <a href="#nav" class="menu">Menu</a>
  <div class="contact">
    <a target="_blank" rel="noopener" href="mailto:hello@carlobadini.com">
      <span aria-hidden="true">💌</span>
      <span>hello@carlobadini.com</span>
    </a>
    <a
      target="_blank"
      rel="noopener"
      class="linkedin"
      href="https://www.linkedin.com/in/carlobadini/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9
          480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4
          416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96
          102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1
          243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9
          54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0
          79.7 44.3 79.7 101.9V416z" />
      </svg>
      <span>LinkedIn</span>
    </a>
  </div>
</header>
