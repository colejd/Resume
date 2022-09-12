const package = require("./package.json");
const puppeteer = require("puppeteer");
const path = require("path");
const filePath = path.resolve(__dirname, "build/resume.html");
console.log(`Pointing Puppeteer at ${filePath}`);
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file:///${filePath}`, {waitUntil: 'networkidle2'}); // Wait for network resources to load, unbreaks font-awesome
  await page.pdf({
    path: "build/resume.pdf",
    format: "Letter",
    printBackground: true,
    displayHeaderFooter: false,
    margin: {
      top: "10mm",
      left: "10mm",
      right: "10mm",
      bottom: "10mm"
    }
  });
  await browser.close();
})();