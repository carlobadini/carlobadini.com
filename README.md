# 🧔 [CarloBadini.com](https://carlobadini.com)

This repository contains the source code of Carlo Badini's personal website. It's build using [Sapper](https://github.com/sveltejs/sapper) and [Svelte](https://github.com/sveltejs/svelte) and hosted on GitHub Pages.

## ⭐️ Getting started

Before the local development server starts, all data is fetched from Airtable, then the site opens at http://localhost:3000.

```bash
npm run dev
```

When deploying for production:

```bash
npm run export
```

### Authentication

The following environment variables are required for both `dev` and `export` to fetch data from Airtable:

| Environment variable | Description |
| -------------------- | ----------- |
| `AIRTABLE_BASE_ID`   | Base ID     |
| `AIRTABLE_API_KEY`   | API key     |

These are saved locally in a `.env` file and using GitHub repository secrets.

A GitHub Actions [workflow](https://github.com/carlobadini/carlobadini.com/blob/master/.github/workflows/node.yml) build the website on push and once every day, and published the `__sapper__/export` directory to the `gh-pages` branch.

## 📄 License

- Text content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) © [Carlo Badini](https://carlobadini.com)
- Code: [MIT](./LICENSE) © [Carlo Badini](https://carlobadini.com)
