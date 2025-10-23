// Dark Mode Toggle
const toggle = document.getElementById('modeToggle');
toggle.addEventListener('change', () => { document.body.classList.toggle('dark-mode'); });

// Collapsible Sections
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Fade-in Animation ao rolar
const sections = document.querySelectorAll('section, .header');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('appear'); }});
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

// Barras de habilidades animadas
const skills = document.querySelectorAll('.fill');
window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < window.innerHeight - 50){
            skill.style.width = skill.style.getPropertyValue('--width');
        }
    });
});

// Botão Download PDF
const downloadBtn = document.getElementById('downloadPdf');
downloadBtn.addEventListener('click', () => {
    const element = document.body;
    html2pdf().from(element).set({
        margin:0.5, 
        filename:'Curriculo_Erick_Monteiro.pdf', 
        image:{type:'jpeg', quality:0.98}, 
        html2canvas:{scale:2}, 
        jsPDF:{unit:'in', format:'letter', orientation:'portrait'}
    }).save();
});
