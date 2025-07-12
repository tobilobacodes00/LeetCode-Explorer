📚 LeetCode Explorer
A sleek, responsive frontend for documenting LeetCode problem solutions—complete with theme toggles, social links, and beginner-friendly code breakdowns.

🌐 Live Demo
Check it out: https://tobilobacodes00.github.io/LeetCode-Explorer/

🧩 Overview
LeetCode Explorer is a documentation platform built from scratch (HTML, CSS, vanilla JavaScript) to present clean, readable solutions to LeetCode problems—one problem per page. It features:

🕶 Dark/Light Theme Toggle (Blue themes)

📱 Responsive design (mobile, tablet, desktop)

🧠 Clear problem breakdown: Intro, statement, example, explanation, solution

📲 Social links for networking and portfolio building

🗂️ Project Structure
vbnet
Copy
Edit
LeetCode-Explorer/
├── index.html                ← Homepage
├── problems/
│   └── question-1.html       ← Problem 2667 (Hello World Function)
├── styles.css                ← Shared CSS & theming
├── script.js                 ← Theme toggler & small behaviors
└── LICENSE                   ← MIT license
🚀 Features
🎨 Light & Dark Blue Themes
Smoothly switch themes while preserving readability and contrast.

📐 Responsive
Fluid layouts, flexible header, and mobile-aligned elements.

📘 LeetCode Breakdown Format
Structured sections: Introduction, Statement, Example, Explanation, Solution.

🔗 Social & Navigation
Easily navigate home/problems and connect via social platforms.

🛠️ How to Use
Clone repository

bash
Copy
Edit
git clone https://github.com/tobilobacodes00/LeetCode-Explorer.git
cd LeetCode-Explorer
Open in browser

Double-click index.html, or

Serve locally with a simple HTTP server:

bash
Copy
Edit
npx http-server . -o
Explore the site

Toggle between light/dark themes

Click through problem pages

Inspect how explanations and code are structured

🧃 Add a New Problem
Create a new HTML file in /problems/, e.g., question-2.html

Copy the format from question-1.html:

Add <link rel="stylesheet" href="../styles.css">

Structured sections (Intro → Solution)

Link it on homepage (index.html)

Commit & push:

bash
Copy
Edit
git add .
git commit -m "Add problem 0002 – <Your Title>"
git push
📦 Technologies
HTML5 – semantic markup

CSS3 – theming, variables, media queries

JavaScript – vanilla ES6 for theme toggling

Font Awesome – icons for visuals

GitHub Pages – static site hosting

📄 License
Published under the MIT License. Feel free to reuse the layout, markup, theming, and docs!

👤 Author
Tobiloba Sulaimon
Frontend enthusiast building clean, responsive web experiences.

🔗 Portfolio

✉️ Pronouns: He/Him

🔮 Next Up
Add more problems, navigation UI

Implement search/filter for problem pages

Polish mobile header with hamburger menu

Experiment with dark-mode auto-switch based on system preference

💬 Feedback & Collaboration
Found a bug or want to suggest enhancements?
Let’s connect:

Raise an issue on GitHub

Connect via X/Twitter: @tobilobacodes

