const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');

const cssFiles = [
  path.join(srcDir, 'index.css'),
  path.join(srcDir, 'App.css'),
  path.join(componentsDir, 'Navbar.css'),
  path.join(componentsDir, 'Hero.css'),
  path.join(componentsDir, 'Services.css'),
  path.join(componentsDir, 'HowItWorks.css'),
  path.join(componentsDir, 'About.css'),
  path.join(componentsDir, 'Testimonials.css'),
  path.join(componentsDir, 'BookRepair.css'),
  path.join(componentsDir, 'Footer.css'),
];

let allCss = '';
for (const file of cssFiles) {
  if (fs.existsSync(file)) {
    allCss += fs.readFileSync(file, 'utf-8') + '\n';
  }
}

const jsxFiles = [
  path.join(componentsDir, 'Navbar.jsx'),
  path.join(componentsDir, 'Hero.jsx'),
  path.join(componentsDir, 'Services.jsx'),
  path.join(componentsDir, 'HowItWorks.jsx'),
  path.join(componentsDir, 'About.jsx'),
  path.join(componentsDir, 'Testimonials.jsx'),
  path.join(componentsDir, 'BookRepair.jsx'),
  path.join(componentsDir, 'Footer.jsx'),
  path.join(srcDir, 'App.jsx'),
];

let allJsx = '';
for (const file of jsxFiles) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    // Remove local imports
    content = content.replace(/import .* from '.\/.*';?\n?/g, '');
    content = content.replace(/import '.\/.*';?\n?/g, '');
    content = content.replace(/import .* from '\.\/.*';?\n?/g, '');
    
    // We will map react, framer-motion, lucide-react in importmap, so keep those imports
    
    // Rename default exports to const
    const componentName = path.basename(file, '.jsx');
    if (componentName !== 'App') {
      content = content.replace(/export default function (\w+)/g, 'function $1');
    }
    
    allJsx += content + '\n\n';
  }
}

// Ensure React imports are deduplicated and at the top
const reactImports = `
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Wrench, CircleDot, Settings, Zap, ShieldCheck, Bike, Star, MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
`;

allJsx = allJsx.replace(/import .* from 'react';?\n?/g, '');
allJsx = allJsx.replace(/import .* from 'framer-motion';?\n?/g, '');
allJsx = allJsx.replace(/import .* from 'lucide-react';?\n?/g, '');

const finalJsx = reactImports + '\n' + allJsx + `
const root = createRoot(document.getElementById('root'));
root.render(<App />);
`;

const htmlTemplate = \`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Black Spoke Bikes - Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
\${allCss}
    </style>
    <script type="importmap">
    {
        "imports": {
            "react": "https://esm.sh/react@18.2.0",
            "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
            "framer-motion": "https://esm.sh/framer-motion@10.16.4?deps=react@18.2.0,react-dom@18.2.0",
            "lucide-react": "https://esm.sh/lucide-react@0.294.0?deps=react@18.2.0"
        }
    }
    </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" data-type="module">
\${finalJsx}
    </script>
</body>
</html>\`;

fs.writeFileSync(path.join(__dirname, 'demo.html'), htmlTemplate);
console.log('demo.html created successfully');
