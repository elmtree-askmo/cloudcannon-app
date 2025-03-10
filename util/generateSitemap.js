import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import Filer from "@cloudcannon/filer";
import { SitemapStream, streamToPromise } from 'sitemap';
import { SitemapIndexStream } from 'sitemap';

import { TOP_QUESTIONS_SUBJECTS } from '../constant/topQuestions.contant.js';
import {  SITEMAP_DOMAIN } from '../constant/app.constant.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sitemap = new SitemapStream({ hostname: SITEMAP_DOMAIN });
// const writeStream = fs.createWriteStream(path.join(__dirname, '../', 'sitemap.xml'));

const filer = new Filer({ path: 'content' });

// 用于存储已处理的URL的文件
const PROCESSED_URLS_FILE = path.join(__dirname, '..', 'processed_urls.json');

// 读取已处理的URL
const getProcessedUrls = () => {
  try {
    if (fs.existsSync(PROCESSED_URLS_FILE)) {
      return new Set(JSON.parse(fs.readFileSync(PROCESSED_URLS_FILE, 'utf-8')));
    }
  } catch (error) {
    console.error('Error reading processed URLs:', error);
  }
  return new Set();
};

// 保存已处理的URL
const saveProcessedUrls = (urls) => {
  fs.writeFileSync(PROCESSED_URLS_FILE, JSON.stringify([...urls]), 'utf-8');
};

// 获取所有当前的URL
const getAllCurrentUrls = async () => {
  const urls = new Set();
  
  // 添加subject URLs
  TOP_QUESTIONS_SUBJECTS.forEach(subject => {
    urls.add(`/learn/${subject.key}`);
  });
  
  // 添加question URLs
  for (const subject of TOP_QUESTIONS_SUBJECTS) {
    const { key } = subject;
    const folderPath = `learn/${key}`;
    const files = await filer.listItemSlugs(folderPath);
    const filteredFiles = files.filter(file => !file.includes('.DS_Store'));
    
    filteredFiles.forEach(file => {
      urls.add(`/learn/${key}/questions/${file}`);
    });
  }
  
  return urls;
};

const generateSitemap = async () => {
  const currentDate = getCurrentDate();
  const sitemapFileName = `sitemap_${currentDate}.xml`;
  const sitemap = new SitemapStream({ hostname: SITEMAP_DOMAIN });
  
  // 获取已处理的URL和当前所有URL
  const processedUrls = getProcessedUrls();
  const currentUrls = await getAllCurrentUrls();
  
  // 找出新的URL
  const newUrls = [...currentUrls].filter(url => !processedUrls.has(url));
  
  // 如果有新的URL，则生成新的sitemap
  if (newUrls.length > 0) {
    newUrls.forEach(url => {
      sitemap.write({ url, changefreq: 'daily', priority: 0.7 });
      processedUrls.add(url);
    });
    
    sitemap.end();
    
    const sitemapData = await streamToPromise(sitemap);
    fs.writeFileSync(path.join(__dirname, '..', sitemapFileName), sitemapData);
    
    // 保存更新后的已处理URL列表
    saveProcessedUrls(processedUrls);
    
    // 更新sitemap index
    const sitemapIndex = new SitemapIndexStream();
    const files = fs.readdirSync(path.join(__dirname, '..'));
    const sitemapFiles = files.filter(file => file.startsWith('sitemap_') && file.endsWith('.xml'));
    
    sitemapFiles.forEach(file => {
      sitemapIndex.write({ url: `${SITEMAP_DOMAIN}/${file}`, lastmod: new Date() });
    });
    
    sitemapIndex.end();
    
    const sitemapIndexData = await streamToPromise(sitemapIndex);
    fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), sitemapIndexData);
    
    console.log(`Generated new sitemap with ${newUrls.length} new URLs`);
  } else {
    console.log('No new URLs found, skipping sitemap generation');
  }
};

// 执行生成过程
generateSitemap().catch(err => {
  console.error('Error generating sitemap:', err);
});