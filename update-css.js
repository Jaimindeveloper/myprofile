const fs = require('fs');
const path = require('path');

const files = [
  'Stats.module.css',
  'Experience.module.css',
  'Skills.module.css',
  'Projects.module.css',
  'Contact.module.css',
  'AICopilot.module.css'
];

files.forEach(file => {
  const filePath = path.join(__dirname, 'components', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/rgba\(255, 255, 255/g, 'rgba(0, 0, 0');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
