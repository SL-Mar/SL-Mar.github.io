# Sebastien M. Laignel - GitHub Pages

Professional website showcasing research and projects in quantitative finance, AI automation, and maritime applications.

**Live Site**: [https://sl-mar.github.io](https://sl-mar.github.io)

---

## 🌐 Overview

This repository contains the source code for my personal GitHub Pages website. The site serves as a professional entry point to my work in:

- **Quantitative Finance**: Algorithmic trading strategies and backtesting
- **AI & Automation**: Building intelligent agents for trading and research
- **Application Development**: Tools that bridge research and implementation
- **Maritime Applications**: AI applications in maritime law and operations

---

## 📁 Repository Structure

```
.
├── index.html           # Homepage with hero, about, and contact sections
├── publications.html    # Comprehensive list of articles and research papers
├── projects.html        # Portfolio of open-source projects and tools
├── styles.css          # Complete styling with responsive design
└── README.md           # This file
```

---

## 🚀 Features

### Homepage (`index.html`)
- **Hero Section**: Introduction with call-to-action buttons
- **About Section**: Professional background and expertise areas
- **Research Focus**: Grid showcasing main research domains
- **Featured Work**: Highlights of key projects and publications
- **Contact Section**: Social media links (GitHub, Medium, Substack, LinkedIn)

### Publications Page (`publications.html`)
- **Category Filtering**: JavaScript-powered filter for different publication types
- **Organized Sections**:
  - Trading Strategies
  - Quantitative Finance & AI Automation
  - Stock Analysis & Screening
  - Machine Learning & Forecasting
  - AI in Legal Reasoning
  - Maritime Law & Ship Operations
- **Rich Metadata**: Publication venue, tags, descriptions for each article
- **External Links**: Direct links to Medium, Substack, and other platforms

### Projects Page (`projects.html`)
- **Featured Project**: QuantCoder FS with detailed description
- **Project Cards**: Grid layout showcasing multiple projects
- **Technology Tags**: Visual indicators of tech stack for each project
- **Call-to-Action**: Collaboration invitation section

### Styling (`styles.css`)
- **Modern Design**: CSS variables for consistent theming
- **Responsive Layout**: Mobile-first design with breakpoints
- **Smooth Animations**: Hover effects and transitions
- **Gradient Accents**: Purple gradient hero and CTA sections
- **Professional Typography**: Inter font family throughout

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and variables
- **JavaScript**: Lightweight vanilla JS for publication filtering
- **Google Fonts**: Inter font family
- **GitHub Pages**: Static site hosting

---

## 📦 Deployment Instructions

### Step 1: Clone this repository locally

```bash
cd /home/slmar/projects
cp -r MC_github-pages SL-Mar.github.io
cd SL-Mar.github.io
```

### Step 2: Initialize Git (if not already a repo)

```bash
git init
git add .
git commit -m "Initial commit: Professional GitHub Pages site"
```

### Step 3: Connect to your GitHub Pages repository

```bash
git remote add origin https://github.com/SL-Mar/SL-Mar.github.io.git
git branch -M main
```

### Step 4: Push to GitHub

```bash
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/SL-Mar/SL-Mar.github.io`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be live at: **https://sl-mar.github.io** (usually takes 1-2 minutes)

---

## ✏️ Customization Guide

### Update Social Media Links

Edit the social links in `index.html` (line ~150) and `publications.html` footer:

```html
<a href="https://github.com/YOUR-USERNAME" ...>
<a href="https://medium.com/@YOUR-PROFILE" ...>
<a href="https://substack.com/@YOUR-PROFILE" ...>
<a href="https://www.linkedin.com/in/YOUR-PROFILE" ...>
```

### Add New Publications

Edit `publications.html` and add a new publication card in the appropriate section:

```html
<article class="publication-card">
    <h3 class="pub-title">
        <a href="YOUR_ARTICLE_URL" target="_blank" rel="noopener noreferrer">
            Your Article Title
        </a>
    </h3>
    <p class="pub-meta">Publication Venue</p>
    <p class="pub-description">
        Brief description of your article...
    </p>
    <span class="pub-tag">Tag1</span>
    <span class="pub-tag">Tag2</span>
</article>
```

### Add New Projects

Edit `projects.html` and add a new project card in the `.projects-grid` section:

```html
<article class="project-card">
    <h3 class="project-card-title">Project Name</h3>
    <p class="project-card-description">
        Brief project description...
    </p>
    <div class="project-tech">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">FastAPI</span>
    </div>
    <h4>Features:</h4>
    <ul class="project-list">
        <li><strong>Feature 1:</strong> Description</li>
        <li><strong>Feature 2:</strong> Description</li>
    </ul>
    <a href="PROJECT_URL" class="project-link">View Project →</a>
</article>
```

### Customize Colors

Edit the CSS variables in `styles.css` (line ~5):

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker shade */
    --primary-light: #3b82f6;      /* Lighter shade */
    --text-primary: #1e293b;       /* Main text color */
    /* ... */
}
```

---

## 🧪 Local Testing

To test the site locally before deploying:

### Option 1: Python HTTP Server

```bash
cd /home/slmar/projects/MC_github-pages
python3 -m http.server 8000
```

Open browser: `http://localhost:8000`

### Option 2: VS Code Live Server

1. Open the project folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

---

## 📊 Content Summary

### Publications Count
- **Trading Strategies**: 6 articles
- **AI & Automation**: 7 articles
- **Stock Analysis**: 3 articles
- **ML & Forecasting**: 2 articles
- **Legal AI**: 1 article
- **Maritime**: 2 series

**Total**: ~20 publications

### Projects Showcase
- **QuantCoder FS**: Featured project (AI-powered research automation)
- **MyShell AI Bots**: Trading and language assistants
- **Trading Strategy Library**: Open-source strategies
- **Market Data Tools**: Python utilities for data fetching
- **Algorithmic Trading Tutorials**: Educational resources
- **Maritime AI Applications**: LLM for maritime domain
- **n8n Automation Workflows**: Custom automation workflows

---

## 🔗 External Links

- **GitHub**: [https://github.com/SL-Mar](https://github.com/SL-Mar)
- **Medium**: [https://medium.com/@sebastien.laignel](https://medium.com/@sebastien.laignel)
- **Substack**: [https://substack.com/@sebastienlaignel](https://substack.com/@sebastienlaignel)
- **LinkedIn**: [https://www.linkedin.com/in/sebastien-laignel](https://www.linkedin.com/in/sebastien-laignel)

---

## 📝 Maintenance

### Adding Content
1. Update relevant HTML files with new publications or projects
2. Test changes locally
3. Commit and push to GitHub
4. Changes will be live within 1-2 minutes

### Updating Design
1. Edit `styles.css` for styling changes
2. Test responsiveness on different screen sizes
3. Commit and push changes

---

## 🤝 License

This website and its content are © 2025 Sebastien M. Laignel. All rights reserved.

Feel free to use the HTML/CSS structure as inspiration for your own GitHub Pages site, but please don't copy the content directly.

---

## 📞 Contact

For questions or collaboration inquiries, connect via:
- **GitHub**: [@SL-Mar](https://github.com/SL-Mar)
- **LinkedIn**: [sebastien-laignel](https://www.linkedin.com/in/sebastien-laignel)

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Last Updated: 2025-10-11*
