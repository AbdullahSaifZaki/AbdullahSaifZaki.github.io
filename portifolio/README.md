# Abdullah Saif Zaki — Portfolio

A responsive, dependency-free portfolio for GitHub Pages. It includes your supplied photo, an introduction, GitHub and LinkedIn links, project cards that open their repositories, skills, contact details, and a light/dark theme.

## Your portfolio

Personalized with your photo, introduction, GitHub and LinkedIn profiles, email, both public projects, and the skills demonstrated in your repositories. Project descriptions were checked against their READMEs and dependencies on 6 October 2026.

This is the complete source package; publication to GitHub Pages is still pending GitHub account access.

Edit `portfolio.js` to add your information. Use your real repository links and descriptions. Example data shape:

```js
window.PORTFOLIO = {
  name: "Your name",
  focus: "Your professional focus",
  introduction: "A short introduction in your own voice.",
  about: ["A longer paragraph about your background, interests, or work."],
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_PROFILE/",
  email: "you@example.com",
  portraitCaption: "The person behind the projects",
  contactNote: "Tell visitors how you would like to connect.",
  projects: [
    {
      title: "Project name",
      description: "What it does, how you built it, and what you learned.",
      url: "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY",
      tags: ["Technology", "Topic"]
    }
  ],
  skills: [
    { category: "Languages", items: ["Your languages"] },
    { category: "Frameworks", items: ["Your frameworks"] },
    { category: "Tools", items: ["Your tools"] }
  ]
};
```

All repository cards are full clickable links. Data is rendered as plain text, and social links are restricted to GitHub and LinkedIn. Your supplied GitHub, LinkedIn, and email links are active.

## Preview

Open `index.html` in your browser, or run this command from the portfolio folder:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`. No package installation or build is required.

## Publish on GitHub Pages

1. Create a public repository named `abdullahsaifzaki.github.io` for a homepage at `https://abdullahsaifzaki.github.io`. A repository named `portfolio` instead produces `https://abdullahsaifzaki.github.io/portfolio/`.
2. Upload the **contents** of this folder to the repository root, including the `assets` folder. Do not nest them inside another `portfolio` folder.
3. In **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/ (root)**, and save.
4. GitHub will display the published URL after deployment finishes.

Relative asset paths support both forms of GitHub Pages URLs. The `.nojekyll` file makes GitHub publish the files directly.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Files

- `index.html`: page structure and personalized content
- `styles.css`: layout, responsive styles, and theme colors
- `portfolio.js`: your personal information, projects, and skills
- `app.js`: rendering and the theme toggle
- `assets/portrait.png`: your original supplied photo
- `assets/favicon.svg`: small custom code icon

Content sources:

- https://github.com/AbdullahSaifZaki/Aisle_e_commerce_assistant
- https://github.com/AbdullahSaifZaki/house_prices_predictor_ML

The reference portfolio informed the section order; its biography, projects, and skills are not copied into yours.
