import { useEffect, useState } from 'react'
import './App.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function App() {
  const [displayText,setDisplayText]=useState('');
  const [currentIndex,setCurrentIndex]=useState(0);
  const fullText='BHARADWAJ'
  useEffect(()=>{
    if(currentIndex<fullText.length)
    {
      const timeout=setTimeout(()=>{
        setDisplayText(prev=> prev+fullText[currentIndex]);
        setCurrentIndex(ind=>ind+1)
      },400);
      return ()=> clearTimeout(timeout);
    }
  },[currentIndex,fullText]);
  return (
    <>
      <div className='top-section'>
        <section className='fullname-section'>
          <span className='typewriter'>{displayText}</span>
          <span className='cursor'>|</span>
        </section>
      
        <section className='logo--section'>
          <div className='logo'>
            <div className='logo-b'>B</div>
            <div className='logo-j'>J</div>
          </div>
        </section>
      </div>

      <div className='about-section'>
        <p className='about-me'>
        I graduated in 2017 and began my career at Zoho, where I worked as a full-stack developer. Afterward, I took a three-year break to prepare for UPSC, during which I freelanced and built Android apps that reached over 100k downloads, along with a website for a transport company. Later, I joined Measured as a Technical Operations Engineer, working on data-driven applications. Having recently concluded my role there, I'm now focusing on strengthening my skills in backend development, data structures and algorithms, and system design — preparing for my next big opportunity in tech.</p>
      </div>

      <div className='timeline-section'>
        <div className='timeline-item'>
          <div className='timeline-title'>RMD Engineering College</div>
          <div className='timeline-subtitle'>BE Electrical And Electronics Engineering</div>
          <div className='timeline-time'>2013-2017</div>
        </div>
        <div className='timeline-item'>
          <div className='timeline-title'>Zoho Corporation</div>
          <div className='timeline-subtitle'>Member of Technical Staff</div>
          <div className='timeline-time'>2017-2018</div>
        </div>
        <div className='timeline-item'>
          <div className='timeline-title'>UPSC preparation</div>
          <div className='timeline-subtitle'>Economics Sociology</div>
          <div className='timeline-time'>2019-2021</div>
        </div>
        <div className='timeline-item'>
          <div className='timeline-title'>Measured India private limited</div>
          <div className='timeline-subtitle'>Technical Operations Engineer</div>
          <div className='timeline-time'>2022-2025</div>
        </div>
      </div>
      
      
      <div className='social-media-icons-stack'>
        <a href="https://www.linkedin.com/in/bharadwajdaya/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='icon linkedin-icon' />
        </a>
        <a href="https://github.com/bharadwajdaya" target="_blank" rel="noopener noreferrer">
          <FaGithub className='icon github-icon' />
        </a>
        <a href="https://leetcode.com/u/bharadwajdaya/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className='icon leetcode-icon' />
        </a>
      </div>

      
    </>
  )
}

export default App
