const projects=[
['LiviPlay','Website','Site criado para apresentar uma empresa de locação de brinquedos infantis e facilitar reservas e contatos.','yellow-bg'],
['TransPower','Website','Site desenvolvido para apresentar serviços de forma profissional e facilitar pedidos de orçamento.','blue-bg'],
['NutriFases','Projeto Web','Projeto desenvolvido com foco em clareza, organização e experiência visual.','pink-bg'],
['AquaPlan','Projeto Web','Experiência web criada com foco em organização, usabilidade e apresentação de informações.','green-bg'],
['Dashfy','Projeto Web','Interface digital desenvolvida para apresentar informações de forma visual e organizada.','lilac-bg'],
['AdMetric','Projeto Web','','blue-bg'],['Lumina','Website','','yellow-bg'],['Guru Studio','Landing Page','','peach-bg'],['Sales Impact','Landing Page','','lilac-bg'],['Dieta Inteligente','Projeto Web','','green-bg'],['Faturamento Operacional','Landing Page','','blue-bg'],['Instagram Creative','Landing Page','','pink-bg']];
const grid=document.querySelector('#project-grid');
grid.innerHTML=projects.map((p,i)=>'<article class="project reveal visible" data-index="'+i+'"><div class="project-cover '+p[3]+'"><div class="project-meta"><div><div class="project-cat">'+p[1]+'</div><h3>'+p[0]+'</h3></div>'+(p[2]?'<p class="project-desc">'+p[2]+'</p>':'')+'</div></div></article>').join('');
const modal=document.querySelector('#project-modal');const content=document.querySelector('#modal-content');
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
function openModal(i){const p=projects[i];content.innerHTML='<div class="modal-content-cover '+p[3]+'"></div><div class="modal-cat">'+p[1]+'</div><h2>'+p[0]+'</h2><p>'+(p[2]||'Projeto visual criado com atenção à clareza, organização e personalidade da marca.')+'</p><p><strong>Objetivo:</strong> apresentar o negócio de forma profissional, com uma experiência visual clara e direcionada para contato.</p><div class="modal-thumbs"><div></div><div></div><div></div></div><a class="button button-dark" href="#orcamento">Quero um site assim ↗</a>';modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
grid.querySelectorAll('.project').forEach(el=>el.addEventListener('click',()=>openModal(Number(el.dataset.index))));
document.querySelector('.modal-close').addEventListener('click',closeModal);document.querySelector('.modal-backdrop').addEventListener('click',closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const testimonials=document.querySelector('#testimonial-list');testimonials.innerHTML='<div class="testimonial-empty">Depoimentos reais aparecerão aqui quando forem cadastrados.</div>';
