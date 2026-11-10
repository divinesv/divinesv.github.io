# DivineSV

A Hindu devotional website. It has a page for each deity, stotras and slokas with their verses, a festival calendar,
a scripture library, a media page and a Bhagavad Gita reader. Text can be shown in Devanagari or Telugu script.

The site is a static Next.js export, so it needs no server. It is hosted on GitHub Pages.

## Pages

| Page | Content |
| --- | --- |
| Deities | Ganesha, Shiva, Vishnu, Krishna, Rama, Hanuman, Devi, Narasimha and Ayyappa: profile, prayers and images |
| Stotras, Slokas | Prayers with each verse on its own card |
| Library | Scripture PDFs and the Bhagavad Gita reader with featured verses |
| Festivals | Festival days, with the current day highlighted |
| Media | Videos and audio in embedded players |

## Run

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
```

## Deploy

`.github/workflows/deploy.yml` builds the site on each push and publishes `out/` to GitHub Pages at
`divinesv/divinesv.github.io`.

## Files

```
src/app/          one folder per page
src/components/   page sections, verse cards, the Gita reader, the media hub
src/lib/          content: deities, stotras, slokas, PDFs, media; Devanagari and Telugu conversion
src/data/         Bhagavad Gita text and site settings
public/           images and PDFs
```

Next.js App Router, TypeScript and custom CSS.
