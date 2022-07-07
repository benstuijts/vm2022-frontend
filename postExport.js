const getPathsObject = require('./getPages');
const fs = require('fs');

const pathsObj = getPathsObject();

function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
  
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
  
    return [year, month, day].join("-");
  };

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://voornemakelaars.nl/sitemap.xml
Disallow:`;

fs.writeFileSync("robots.txt", robotsTxt);
console.log("robots.txt saved!");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pathsObj).map(
    path => `<url>
    <loc>https://embiem.me${path}</loc>
    <lastmod>${
      formatDate(new Date(pathsObj[path].lastModified))
    }</lastmod>
  </url>`
  )}
</urlset>`;

console.info("Creating Sitemap");

fs.writeFileSync("sitemap.xml", sitemapXml);