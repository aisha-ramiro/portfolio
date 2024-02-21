import logo from './logo.svg';
import MainContainer from './components/MainContainer';
import Introuction from './components/Introduction';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { AiOutlineDown } from 'react-icons/ai'
import './App.css';


function App() {
  return (
    <MainContainer>
      <div className="container">
        <Introuction />
        
      </div>
      <div className='containerLimit'>
      <a href="#about">
      <AiOutlineDown />
      </a>
      </div>
      <div  id="about" className="container">
        <About />
      </div>
      <div className='containerLimit'>
      <a href="#skills">
      <AiOutlineDown />
      </a>
      </div>
      <div id="skills" className="container">
        <Skills />
      </div>
      <div className='containerLimit'>
      <a href="#portfolio">
      <AiOutlineDown />
      </a>
      </div>
      <div id="portfolio" className="container">
        <Portfolio />
      </div>
      <div className='containerLimit'>
      <a href="#contact">
      <AiOutlineDown />
      </a>
      </div>
      <div id="contact" className="container">
        <Contact />
      </div>

    </MainContainer>
  );
}

export default App;
