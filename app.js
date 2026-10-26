(function () {
"use strict";
const c=window.PORTFOLIO_CONTENT;const esc=s=>String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
document.getElementById('intro-full').textContent=c.intro;document.getElementById('about-full').textContent=c.about;
document.getElementById('traits').innerHTML=c.traits.map(t=>'<span>'+esc(t.split(' · ')[0])+'</span>').join('');
document.getElementById('projects').innerHTML=c.projects.map((p,i)=>`<article class="project"><div class="project-side"><div class="project-label">${['AI Exam','SPC','G3'][i]}</div><p>${esc(p.period)}<br>${esc(p.status)}</p></div><div><h3>${esc(p.name)}</h3><p>${esc(p.summary)}</p><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>${p.award?`<p class="award">${esc(p.award)}</p>`:''}<details><summary>展开我的工作</summary><ul>${p.points.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></details>${p.href?`<a class="project-link" href="${esc(p.href)}">${i?'查看代码仓库':'访问项目'}</a>`:''}</div></article>`).join('');
document.getElementById('courses').innerHTML=c.academics.courses.map(t=>`<div class="course"><span>${esc(t.name)}</span><strong>${t.score}</strong></div>`).join('');
document.getElementById('skills').innerHTML=c.skills.map(t=>`<div class="skill"><h3>${esc(t.name)}</h3><p>${esc(t.desc)}</p><div class="tags">${t.tags.map(s=>`<span>${esc(s)}</span>`).join('')}</div></div>`).join('');
document.getElementById('recognition').innerHTML=c.recognition.map(t=>`<div class="honor"><time>${esc(t.year)}</time><span>${esc(t.title)}</span><strong>${esc(t.result)}</strong></div>`).join('');

// Keep editable profile fields in content.js as the single source of truth.
document.querySelector('.portrait img').src = c.avatar;
document.querySelectorAll('[data-stat]').forEach(el => el.textContent = c.academics[el.dataset.stat]);
document.getElementById('english').textContent = `英语水平：${c.academics.english}`;
document.getElementById('academic-honors').textContent = c.academics.honors;
document.querySelector('.contact-info').innerHTML = `<a href="mailto:${esc(c.email)}"><span>邮箱</span>${esc(c.email)}</a><a href="${esc(c.github)}"><span>GitHub</span>${esc(c.github.replace(/^https?:\/\//, ''))}</a><a href="tel:${esc(c.phone)}"><span>电话</span>${esc(c.phone)}</a><p><span>QQ</span>${esc(c.qq)}</p>`;
document.querySelector('.hello').href = `mailto:${c.email}`;
document.getElementById('year').textContent = new Date().getFullYear();
const backTop = document.querySelector('.back-top');
const updateBackTop = () => { backTop.hidden = window.scrollY < 480; };
window.addEventListener('scroll', updateBackTop, { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }));
updateBackTop();

})();
