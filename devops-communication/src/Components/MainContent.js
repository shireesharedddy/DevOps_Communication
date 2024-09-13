import React, { useState } from 'react';
import './MainContent.css'; 
import devopsImage from './Assets/devops.png';

const MainContent = () => {
    const [selectedOption, setSelectedOption] = useState(''); 

    const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  return (
    <main className="main-content">
      <section className="highlighted-section">
      <div className="image-container">
           <img src={devopsImage} alt="DevOps" className="devops-image" /> 
        </div>
        <p>DevOps folks, let's be real—our world is full of tools, pipelines, and automation magic. But here’s a little secret we don’t talk about enough: Effective communication in English is the REAL game-changer in DevOps. Yep, I said it! </p>
        <p>Forget for a moment about the latest CI/CD tools or cloud platforms. Imagine trying to align with your team without clear communication. That’s like trying to push to production without running tests. </p>
        <h2>Why Communication Matters in DevOps:</h2>
        <ul>
          <li>
            <strong>Bridging the Gap:</strong> DevOps is all about breaking down barriers between development and operations. But even the best tools can’t help if we’re not on the same page. A well-phrased message or clear standup update can do wonders. It’s like deploying a hotfix without downtime—smooth and seamless. 
          </li>
          <li>
            <strong>Handling High-Stress Moments:</strong> When things go sideways (you know, like 3 a.m. server alerts), it’s effective communication that turns chaos into calm. Clear, concise updates can mean the difference between “We’re on it!” and “Wait, what’s happening?” 
          </li>
          <li>
            <strong>Documentation Doesn’t Have to be a Snooze Fest:</strong> Let’s ditch the jargon and speak human. Good docs make life easier for everyone, from onboarding new team members to revisiting old projects. It’s not just about writing; it’s about storytelling. 
          </li>
          <li>
            <strong>Feedback Loops That Actually Work:</strong> Continuous improvement isn’t just for code—it’s for people too. Giving and receiving feedback effectively keeps us all growing and adapting. And hey, nothing beats the power of a well-timed compliment or constructive tip. 
          </li>
          <li>
            <strong>Cross-Cultural Collaboration:</strong> In our global DevOps teams, clear English communication is the glue that holds us together. It’s what turns diverse teams into powerhouses of innovation. 
          </li>
        </ul>
        <p className="call-to-action">So here’s my call to action: Let’s sharpen our communication skills with the same enthusiasm we have for learning new tech. Because at the end of the day, the best pipelines, scripts, and platforms mean nothing if we can’t connect with each other. And that, my friends, is the true essence of DevOps.</p>
        <p>Let’s keep the convo going! What’s your #1 communication tip in DevOps? Drop it below!</p>
      
         {/* Dropdown Box */}
        <label htmlFor="communication-tips" className="dropdown-label">Choose your tip:</label>
        <select
          id="communication-tips"
          value={selectedOption}
          onChange={handleSelectChange}
          className="dropdown-select"
        >
          <option value="">Select an option</option>
          <option value="ClearDocumentation">Clear Documentation</option>
          <option value="RegularUpdates">Regular Updates</option>
          <option value="EffectiveFeedback">Effective Feedback</option>
          <option value="TeamCollaboration">Team Collaboration</option>
          <option value="GlobalCommunication">Global Communication</option>
        </select>
        {selectedOption && (
          <p className="selected-option">You selected: {selectedOption}</p>
        )}
      
      </section>
    </main>
  );
};

export default MainContent;
