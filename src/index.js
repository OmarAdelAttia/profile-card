import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
  return <div>
    <h1>Omar Adel</h1>
    <p>I am a frontend developer work in Knowledge Net company and an instructor in the ITI.
      When not coding I draw, go to the gym or hangover with my firends.</p>
  </div>;
}

function SkillList() {
  return <div className='skill-list'>
    <Skill skill='React' emoji='🏫' color='#934A5F' />
    <Skill skill='Angular' emoji='✌' color='#0C4A60' />
    <Skill skill='JavaScript' emoji='👌' color='#354649' />
    <Skill skill='Figma' emoji='❤' color='#9F4298' />
    <Skill skill='Adobe XD' emoji='😍' color='#7F056E' />
    <Skill skill='HTML+CSS' emoji='✔😉' color='#8E7C68' />
    <Skill skill='SCSS' emoji='💪' color='#E2495B' />
  </div>;
}

function Skill(props) {
  return <div className='skill' style={{ background: props.color, color: 'white' }}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
  </div>;
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
