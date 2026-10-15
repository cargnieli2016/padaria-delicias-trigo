# Delícias do Trigo

Site institucional da padaria Delícias do Trigo, em Monte Mor - SP, com
informações sobre produtos, localização e formas de contato.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages

The standalone page in `static/index.html` is published to GitHub Pages by the
workflow in `.github/workflows/deploy-pages.yml` whenever changes to `static/`,
`img/`, or the workflow itself are pushed to `main`.

In the repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**. The published site will be available at
https://cargnieli2016.github.io/padaria-delicias-trigo/ after the workflow
completes.
