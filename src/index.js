import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src='img.jpg' alt='Omar Adel' />;
}

function Intro() {
  return (
    <div>
      <h1>Omar Adel</h1>
      <p>I am a frontend developer work in Knowledge Net company and an instructor in the ITI.
        When not coding I draw, go to the gym or hangover with my firends.</p>
    </div>
  );
}

function SkillList() {
  const skillArray = skills;

  return (
    <div className='skill-list'>
      {skillArray.map(skill => <Skill skill={skill} />)}
    </div>
  );
}

function Skill({ skill }) {
  // let emoji = '';
  // if (skill.level === 'advanced') emoji = '💪🏼';
  // if (skill.level === 'intermediate') emoji = '✌🏼';
  // if (skill.level === 'beginner') emoji = '👍🏼';
  return (
    <div className='skill' style={{ background: skill.color, color: 'white' }}>
      <span>{skill.skill}</span>
      {/* <span>{emoji}</span> */}
      <span>
        {skill.level === 'advanced' && '💪🏼'}
        {skill.level === 'intermediate' && '✌🏼'}
        {skill.level === 'beginner' && '👍🏼'}
      </span>
    </div >
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
