(() => {
  "use strict";
  const data = window.PORTFOLIO || {};
  const byId = (id) => document.getElementById(id);
  const setText = (id, value) => { if (value) byId(id).textContent = value; };
  const externalUrl = (value, host) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" && [host, `www.${host}`].includes(url.hostname) && !url.username && !url.password ? url.href : null;
    } catch { return null; }
  };
  const enableLink = (element, href) => {
    element.href = href;
    element.removeAttribute("aria-disabled");
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  };
  if (data.name) {
    setText("footer-name", data.name);
    byId("portrait").alt = `Portrait of ${data.name}`;
    document.title = `${data.name} — Portfolio`;
  }
  setText("introduction", data.introduction);
  setText("portrait-caption", data.portraitCaption);
  setText("contact-note", data.contactNote);
  if (data.introduction) document.querySelector('meta[name="description"]').content = data.introduction;
  ["github", "linkedin"].forEach((kind) => {
    const href = externalUrl(data[kind], kind === "github" ? "github.com" : "linkedin.com");
    if (href) document.querySelectorAll(`[data-link="${kind}"]`).forEach((link) => enableLink(link, href));
  });
  if (data.email && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(data.email)) {
    byId("email-link").href = `mailto:${data.email}`;
    setText("contact-email", `email: ${data.email}`);
    byId("email-link").removeAttribute("aria-disabled");
  }
  if (Array.isArray(data.about) && data.about.length) {
    byId("about").hidden = false;
    byId("about-copy").replaceChildren();
    data.about.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      byId("about-copy").append(p);
    });
  }
  const projects = Array.isArray(data.projects) ? data.projects.filter((project) => project.title && externalUrl(project.url, "github.com")) : [];
  if (projects.length) {
    byId("project-grid").replaceChildren();
    projects.forEach((project) => {
      const card = document.createElement("a");
      card.className = "project-card";
      enableLink(card, externalUrl(project.url, "github.com"));
      card.setAttribute("aria-label", `${project.title} — view repository on GitHub (opens in a new tab)`);
      const top = document.createElement("div");
      top.className = "card-top";
      top.innerHTML = '<span class="project-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/></svg></span><span class="card-arrow" aria-hidden="true">↗</span>';
      const title = document.createElement("h3");
      title.textContent = project.title;
      const description = document.createElement("p");
      description.textContent = project.description || "Explore the source code and documentation on GitHub.";
      const tags = document.createElement("div");
      tags.className = "tags";
      (Array.isArray(project.tags) ? project.tags : []).forEach((text) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = text;
        tags.append(tag);
      });
      card.append(top, title, description, tags);
      byId("project-grid").append(card);
    });
  }
  const skills = Array.isArray(data.skills) ? data.skills.filter((group) => group.category && Array.isArray(group.items) && group.items.length) : [];
  if (skills.length) {
    byId("skills-grid").replaceChildren();
    skills.forEach((group) => {
      const section = document.createElement("div");
      section.className = "skill-group";
      const heading = document.createElement("h3");
      heading.textContent = group.category;
      const list = document.createElement("ul");
      group.items.forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        list.append(item);
      });
      section.append(heading, list);
      byId("skills-grid").append(section);
    });
  }
  byId("year").textContent = new Date().getFullYear();
  const themeButton = document.querySelector(".theme-toggle");
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    themeButton.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    themeButton.setAttribute("aria-pressed", String(theme === "dark"));
    document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#171521" : "#ffffff";
  };
  try { applyTheme(localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light"); } catch { applyTheme("light"); }
  themeButton.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Theme still works without browser storage. */ }
  });
})();
