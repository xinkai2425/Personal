(function () {
  const content = window.PORTFOLIO_CONTENT;
  if (!content) return;

  document.querySelectorAll("[data-profile-link]").forEach((link) => {
    link.href = content.github;
  });
  document.querySelector("[data-avatar]").src = content.avatar;
  document.querySelector("[data-intro]").textContent = content.intro;
  document.querySelector("[data-roles]").textContent = content.roles;
  document.querySelector("[data-about]").textContent = content.about;
  document.querySelector("[data-contact-link]").href = `mailto:${content.email}`;
  document.querySelector("[data-contact-email]").textContent = content.email;
  document.querySelector("[data-contact-phone]").textContent = content.phone;
  document.querySelector("[data-contact-qq]").textContent = content.qq;
  document.querySelector("[data-name]").textContent = content.name;
  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  const keywords = document.querySelector("[data-keywords]");
  content.keywords.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "keyword";
    chip.textContent = item;
    keywords.appendChild(chip);
  });

  const traits = document.querySelector("[data-traits]");
  content.traits.forEach((item, index) => {
    const p = document.createElement("p");
    p.className = "reveal";
    p.innerHTML = `<span class="p-idx">${String(index + 1).padStart(2, "0")}</span>${item}`;
    traits.appendChild(p);
  });

  const acadStats = document.querySelector("[data-acad-stats]");
  const statItems = [
    { label: "专业排名", value: content.academics.rank },
    { label: "GPA", value: content.academics.gpa },
    { label: "学科平均分", value: content.academics.avg },
    { label: "英语", value: content.academics.english },
    { label: "荣誉", value: content.academics.honors }
  ];
  statItems.forEach((item) => {
    const cell = document.createElement("div");
    cell.className = "acad-stat reveal";
    cell.innerHTML = `<dt>${item.label}</dt><dd>${item.value}</dd>`;
    acadStats.appendChild(cell);
  });

  const courses = document.querySelector("[data-courses]");
  content.academics.courses.forEach((course) => {
    const item = document.createElement("article");
    item.className = "course-item reveal";
    item.innerHTML = `
      <div class="course-name"><strong>${course.name}</strong><span>${course.score}</span></div>
      <div class="course-bar"><span style="width:${course.score}%"></span></div>`;
    courses.appendChild(item);
  });

  const skills = document.querySelector("[data-skills]");
  content.skills.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card reveal";
    card.innerHTML = `
      <h3>${skill.name}</h3>
      <p>${skill.desc}</p>
      <div class="skill-tags">${skill.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
    skills.appendChild(card);
  });

  const projects = document.querySelector("[data-projects]");
  content.projects.forEach((project, index) => {
    const item = document.createElement("article");
    item.className = "project-item reveal";
    item.innerHTML = `
      <div class="project-head">
        <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
        <div class="project-head-main">
          <h3>${project.href ? `<a class="project-link" href="${project.href}" target="_blank" rel="noreferrer">${project.name}</a>` : project.name}</h3>
          <p class="project-summary">${project.summary}</p>
          ${project.award ? `<span class="project-award">${project.award}</span>` : ""}
        </div>
        <div class="project-meta">
          <span>${project.period}</span>
          <span>${project.tags.join(" · ")}</span>
          <span>${project.status}</span>
        </div>
      </div>
      <ul class="project-points">
        ${project.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>`;
    projects.appendChild(item);
  });

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

  const backTop = document.querySelector("[data-back-top]");
  if (backTop) {
    const onScroll = () => {
      backTop.classList.toggle("is-visible", window.scrollY > 480);
    };
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
