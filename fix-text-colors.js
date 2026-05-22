const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app')
];

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // Replace hardcoded white colors with the text-primary variable
      content = content.replace(/color:\s*#fff(?:fff)?;/gi, 'color: hsl(var(--text-primary));');
      
      // In Hero.module.css there are buttons where we want text to stay white because the button is still gradient dark/purple.
      // But we will manually fix those after. The bulk should be text-primary.
      
      fs.writeFileSync(fullPath, content);
      console.log(`Updated colors in ${file}`);
    }
  });
}

directories.forEach(processDirectory);
