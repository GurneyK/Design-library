import { mkdir, writeFile } from "node:fs/promises";

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Design Library</title>
    <link rel="stylesheet" href="./assets/app.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/app.js"></script>
  </body>
</html>
`;

await mkdir("site", { recursive: true });
await writeFile("site/index.html", html, "utf8");
