(function () {
  const content = window.PORTFOLIO_CONTENT;
  if (!content) return;

  document.querySelectorAll("[data-profile-link]").forEach((link) => {
    link.href = content.github;
  });
  document.querySelector("[data-avatar]").src = content.avatar;
  document.querySelector("[data-intro]").textContent = content.intro;
  document.querySelector("[data-about]").textContent = content.about;
  document.querySelector("[data-contact-link]").href = `mailto:${content.email}`;
  document.querySelector("[data-contact-email]").textContent = content.email;
  document.querySelector("[data-contact-qq]").textContent = content.qq;
  document.querySelector("[data-name]").textContent = content.name;
  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  const facts = document.querySelector("[data-facts]");
  content.facts.forEach((item) => {
    const row = document.createElement("div");
    row.innerHTML = `<dt>${item.label}</dt><dd>${item.value}</dd>`;
    facts.appendChild(row);
  });

  const projects = document.querySelector("[data-projects]");
  content.projects.forEach((project, index) => {
    const row = document.createElement(project.href ? "a" : "article");
    row.className = "project-row reveal";
    if (project.href) {
      row.href = project.href;
      row.target = "_blank";
      row.rel = "noreferrer";
    }
    row.innerHTML = `
      <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="project-main"><strong>${project.name}</strong><small>${project.summary}</small></span>
      <span class="project-meta"><span>${project.period}</span><span>${project.language}</span><span>${project.status}</span></span>
      <span class="project-arrow" aria-hidden="true">${project.href ? "↗" : ""}</span>`;
    projects.appendChild(row);
  });

  const contributions = document.querySelector("[data-contributions]");
  if (content.contributions.length === 0) {
    contributions.innerHTML = `
      <div class="empty-state reveal">
        <strong>下一次贡献正在路上</strong>
        <p>这里将记录 Pull Request、Issue、文档与社区协作。</p>
      </div>`;
  } else {
    content.contributions.forEach((item) => {
      const article = document.createElement("article");
      article.className = "contribution-item reveal";
      article.innerHTML = `<span>${item.type}</span><h3>${item.title}</h3><p>${item.summary}</p>`;
      contributions.appendChild(article);
    });
  }

  const recognition = document.querySelector("[data-recognition]");
  content.recognition.forEach((item) => {
    const row = document.createElement("article");
    row.className = "recognition-row reveal";
    row.innerHTML = `<span>${item.year}</span><strong>${item.title}</strong><span>${item.result}</span>`;
    recognition.appendChild(row);
  });

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
})();
