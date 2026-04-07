
import '../Styles/About.css'
import Sidebar from '../Layout/Sidebar';
import Footer from '../Layout/Footer';
import Stars from '../common/stars';
import sbg from '../../assets/sbg.png';
import wandelen from '../../assets/Wandelen.png';
import { useEffect } from 'react';

const About = () => {
  useEffect (() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content-flex">
        <div className="laptop-screen"></div>
        <div className='content-about-page'>
          <div className="star1">
            <Stars num={10}/>
          </div>
          <div className="about-main">
            <p className="navbar"></p>
            <div className='box-content'>
              <h1 className="FirstName">Zakaria</h1>
              <h1 className="LastName">Tahiri</h1>
              <img className="sbg-img"src={sbg}/>
              <img className="wandel-img"src={wandelen}/>
              <h2 className="function">Software Developer</h2>
              <h1 className="about-me-title">About Me</h1>
              <p className="about-me-text-transparent">
                Ik doe dit, omdat Ik een stageplek wil veroveren. En dit geeft mij meer kans om die doel ook waar te maken. Daarnaast is mijn doel ook om aan te geven wat ik al kan en dat ik graag meer wil leren binnen het vak.
              </p>
              <p className="about-me-text">
                Ik doe dit, omdat Ik een stageplek wil veroveren. En dit geeft mij meer kans om die doel ook waar te maken. Daarnaast is mijn doel ook om aan te geven wat ik al kan en dat ik graag meer wil leren binnen het vak.
              </p>
            </div>
            <p className='footer'></p>
          </div>
        </div>
        <div className="hinge">
          <div className="hinge2"></div>
        </div>
        <div className="background-keyboard">
          .
        </div>
        <div className='TechStack'>
          <Stars num={20}/>
          <div className="Keyboard">
            <div className="keys">C#</div>
            <div className="keys">HTML 5</div>
            <div className="keys">CSS</div>
            <div className="keys">JavaScript</div>
            <div className="keys">TypeScript</div>
            <div className="keys">Python</div>
            <div className="keys">SQL</div>
            <div className="keys">Git</div>
            <div className="keys">React</div>
            <div className="keys">Rest API</div>
            <div className="keys">vs Code</div>
            <div className="keys">Nmap</div>
            <div className="keys">Metasploit</div>
            <div className="keys">Netcat</div>
            <div className="keys">Kali Linux</div>
            <div className="keys">Hashcat</div>
            <div className="keys">ctrl</div>
            <div className="keys">Window</div>
            <div className="keys">alt</div>
            <div className="spatie">spatie</div>
            <div className="keys">alt</div>
            <div className="keys">ctrl</div>
            <div className="scroller"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;