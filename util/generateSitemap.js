import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import Filer from "@cloudcannon/filer";
import { SitemapStream, streamToPromise } from 'sitemap';

import { TOP_QUESTIONS_SUBJECTS } from '../constant/topQuestions.contant.js';
import {  APP_URL } from '../constant/app.constant.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sitemap = new SitemapStream({ hostname: `https://quicktakes.io` });
// const writeStream = fs.createWriteStream(path.join(__dirname, '../', 'sitemap.xml'));

const filer = new Filer({ path: 'content' });

// subject
TOP_QUESTIONS_SUBJECTS.forEach(subject => {
  sitemap.write({ url: `/learn/${subject.key}`, changefreq: 'daily', priority: 0.7 });
});

// questions
for (const subject of TOP_QUESTIONS_SUBJECTS) {
  const { key } = subject;
  
  const folderPath = `learn/${key}`;
  const files = await filer.listItemSlugs(folderPath);
  const filteredFiles = files.filter(file => !file.includes('.DS_Store'));
  
  filteredFiles.forEach(file => {
    const fileUrl = `https://quicktakes.io/learn/${key}/questions/${file}`;
    sitemap.write({ url: fileUrl, changefreq: 'daily', priority: 0.7 });
  });
}

sitemap.end();

streamToPromise(sitemap).then(data => {
  fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), data);
  console.log('Sitemap has been generated successfully!');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});