const content = {
    home: {
        title: 'Oi, eu sou <span>Kauã</span>',
        subtitle: 'Estudante de Sistemas de Informação',
        text: 'Sou estudante e entusiasta de tecnologia, com foco em desenvolvimento web e aprendizado contínuo. Tenho experiência com HTML, CSS, JavaScript, Node.js e sistemas ERP como o TOTVS Protheus.'
    },  
    skills: {
        title: 'Minhas <span>Skills</span>',
        subtitle: 'Tecnologias',
        text: 'HTML, CSS, JavaScript, Node.js, Express, SQL Server, MySQL, TOTVS Protheus.'
    },
    education: {
        title: 'Minha <span>Educação</span>',
        subtitle: 'Formação',
        text: 'Graduando em Sistemas de Informação, focado em desenvolvimento de software e sistemas corporativos.'
    },
    experience: {
        title: 'Minha <span>Experiência</span>',
        subtitle: 'Vivência Profissional',
        text: 'Atuação com suporte  do ERP TOTVS Protheus em ambiente corporativo.'
    },
    contact: {
        title: 'Entre em <span>Contato</span>',
        subtitle: 'Vamos conversar',
        text: 'Me chame pelo LinkedIn, GitHub ou Instagram.'
    }
};

function changeContent(section, el) {
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');

    const title = document.getElementById('main-title');
    const subtitle = document.getElementById('main-subtitle');
    const text = document.getElementById('main-text');

    title.style.opacity = subtitle.style.opacity = text.style.opacity = 0;

    setTimeout(() => {
        title.innerHTML = content[section].title;
        subtitle.innerText = content[section].subtitle;
        text.innerText = content[section].text;

        title.style.opacity = subtitle.style.opacity = text.style.opacity = 1;
    }, 300);
}
