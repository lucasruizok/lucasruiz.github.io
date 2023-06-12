const nav = document.getElementById('navbar');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0);
});

const skills = [
    {skillName:'HTML',
     src:'./assets/skills/html.svg'    
},
    {skillName:'CSS',
     src:'./assets/skills/css.svg'    
},
    {skillName:'Javascript',
     src:'./assets/skills/javascript.svg'    
},
    {skillName:'React',
     src:'./assets/skills/react.svg'    
},
    {skillName:'Git',
     src:'./assets/skills/git.svg'    
},
    {skillName:'GitHub',
     src:'./assets/skills/github.svg'    
},
    {skillName:'Bootstrap',
     src:'./assets/skills/bootstrap.svg'    
},
    {skillName:'Trello',
     src:'./assets/skills/trello.svg'    
},
    {skillName:'Slack',
     src:'./assets/skills/slack.svg'    
}
];

const skillsList = document.getElementById('skillsList');

skills.map(({skillName, src}) =>{
    skillsList.innerHTML += `
                            <div class='d-flex flex-column align-items-center'>
                                <img class='imgSkill' src='${src}' />
                                <span class="skillItem">${skillName}</span>    
                            </div>
                            `
                                })