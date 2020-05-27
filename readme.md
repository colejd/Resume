# Jon's Resume

This repo holds the tooling I use to create my resume.

My resume is currently built on top of [HackMyResume](https://github.com/hacksalot/HackMyResume).

## Installation

You'll need [`npm`](https://www.npmjs.com/get-npm).
Clone this repo and run the following:

```sh
npm install # Install local dependencies
npm run initialize # Basically runs `npm install` in theme directory
```

You'll also need to make sure to install [`wkhtmltopdf`](https://wkhtmltopdf.org/) if you want PDF output.

## Usage

Make your edits to `draft.resume.json`. You can then run the following in your terminal:

* `npm run develop` - generates an HTML render of the website and serves it in a web browser. Changes to the json are reflected live in the browser.
* `npm run build-all` - Builds the resume to every output format supported by HackMyResume. Files are stored in `./build/`.
* `npm run build-pdf` - Builds just the PDF version into `./build/resume.pdf`.
* `npm run build-html` - Builds just the HTML version into `./build/resume.html`.
* `npm run test` - Test `draft.resume.json` for correctness.

You can also edit the `theme` key in package.json to change to another theme if you pull one. This can point either to a local theme or one you've installed with NPM. If you pull a theme locally, make sure to run `npm install` in its own directory, or hackmyresume will give you a pretty cryptic error. `npm run initialize` automates this step for the theme specified by the `theme` key.

## Troubleshooting

* `Applying ./THEMES/JSONRESUME-THEME-SOMETHEMENAME theme (? formats)`: Make sure you've gone into the theme folder and run `npm install`. Alternatively, run `npm run initialize` to do the same thing.