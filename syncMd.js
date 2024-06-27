const axios = require('axios');
const path = require('path');
const fs = require('fs').promises;

const directoryPath = './content/posts';
const apiEndpoint = 'https://api.dev.quicktakes.io/api-node/quicktake/api/webhook/iap-ios';

// 获取目录中的所有文件
async function getFilesInDirectory(directoryPath) {
  const files = await fs.readdir(directoryPath);
  const filePaths = [];
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stat = await fs.stat(filePath);
    if (stat.isFile()) {
      filePaths.push(filePath);
    }
  }
  return filePaths;
}

async function getUserInfo(filePath) {
  try {
    const response = await axios.post(apiEndpoint, {
        test:`in cloud cannon`
    });
    console.log('response', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
async function convertMarkdownToJson(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const parts = fileContent.split('---');
    if (parts.length < 3) {
      throw new Error('Invalid markdown format');
    }
    
    const yamlContent = parts[1].trim();
    const content = parts.slice(2).join('---').trim();
    
    const metadata = parseYaml(yamlContent);
    
    const result = {
      ...metadata,
      content: content
    };

    return result;
  } catch (error) {
    console.error('Error reading or parsing file:', error.message);
  }
}

function parseYaml(yamlContent) {
  const lines = yamlContent.split('\n');
  const result = {};
  
  let currentKey = null;
  let currentValue = [];

  for (const line of lines) {
    if (line.match(/^[a-zA-Z0-9_-]+:/)) {
      if (currentKey) {
        result[currentKey] = currentValue.join('\n').trim();
      }
      const [key, ...rest] = line.split(':');
      currentKey = key.trim();
      currentValue = [rest.join(':').trim()];
    } else {
      currentValue.push(line.trim());
    }
  }
  
  if (currentKey) {
    result[currentKey] = currentValue.join('\n').trim();
  }

  return result;
}
// 主函数
async function main() {
//   try {
//     const files = await getFilesInDirectory(directoryPath);
//     console.log('files', files);

//     if (files.length > 0) {
//       // const content = await fs.readFile(files[0], 'utf8');
//       // console.log('content', content);

//       const jsonData = await convertMarkdownToJson(files[0]);
//       console.log('json data', jsonData)
//     } else {
//       console.log('No files found in directory');
//     }
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
    await getUserInfo();
}

main();