# Jon's Resume

This repo holds the tooling I use to create my resume.

My resume is currently built on top of [HackMyResume](https://github.com/hacksalot/HackMyResume).

## Installation

You'll need [`npm`](https://www.npmjs.com/get-npm).
Clone this repo and install HackMyResume:

```sh
npm install -g hackmyresume
```

You'll also need to make sure to install [`wkhtmltopdf`](https://wkhtmltopdf.org/) if you want PDF output.

## Usage

Make your edits to `draft.resume.json`. You can then run the following in your terminal:

* `npm run develop` - generates an HTML render of the website and serves it in a web browser. Changes to the json are reflected live in the browser.
* `npm run build-all` - Builds the resume to every output format supported by HackMyResume. Files are stored in `./build/`.
* `npm run build-pdf` - Builds just the PDF version into `./build/resume.pdf`.
* `npm run build-html` - Builds just the HTML version into `./build/resume.html`.
* `npm run test` - Test `draft.resume.json` for correctness.