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
