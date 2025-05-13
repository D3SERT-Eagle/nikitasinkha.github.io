import './App.scss';
import Header from './Components/Header/header';
import StackIcon from 'tech-stack-icons';
import Letter from './Components/LetterRecommend/letter';
import Projects from './Components/Projects/projects';
import Chetan from './Assets/chetan.jpeg';
import Chris from './Assets/chris.jpeg';
import { use, useEffect, useState } from 'react';

function App() {
  const techStacks = 
  ["azure", "aws", "python", 'openai',"csharp", "reactjs", "vuejs", "angular", "vitejs", "nextjs",
  "nodejs", "java", "js", "typescript", "php", "github", "gitlab", "git", "flask", "docker", 
  "pytorch", "html5", "css3", "sass", "tailwindcss", "linux", "kubernetes", "wordpress", "mysql",
  "laravel", "microsoft", "swagger"]
  const [theme, setTheme] = useState('dark')
  const [show, setShow] = useState('show')
  const [stackIcon, setStackIcon] = useState('azure')
  const [click, setClick] = useState(false)
  const [position, setPosition] = useState('right')
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      if (newWidth <= 645) {
        setPosition('bottom');
      } else {
        setPosition('right'); // Reset if above threshold
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setShow(prevShow => (prevShow === '' ? 'show' : ''));
    }, 2000); // Adjust the interval (in milliseconds) for the pulse speed
  
    return () => clearInterval(pulseInterval); // Cleanup on unmount
  }, []); // Empty dependency array for the pulsing effect
  
  useEffect(() => {
    if (show === '') {
      const timeout = setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * techStacks.length);
        console.log(randomIndex)
        setStackIcon(techStacks[randomIndex]);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [show]); // Update stackIcon only when 'show' is empty
  const setCurrentTheme = () => {
    setTheme(theme === 'dark'?'light':'dark')
  }
  return (
    <div className={`App ${theme}`}>
      <Header setCurrentTheme={setCurrentTheme}/>
      <div className='MainContainer'>
        <div className='About'>;
          <div className='SectionTitle'>
            <h1 id='SectionText'>About</h1>
            <div id='Underline'></div>
          </div>
          <div className='AboutContent'>
              <div className='AboutLeft'>
                <div className='Photo'></div>
                <div className='Text'>
                  <p>I’m a highly skilled Full Stack Developer and Software Engineer with 14 years of experience — including 6 years at Fulcrum Digital and 8 years delivering custom projects for small businesses and building personal solutions. I specialize in designing, developing, and delivering robust, customer-focused applications tailored to real-world needs. Throughout my career, I've consistently met deadlines while adhering to the highest standards of coding, cybersecurity, and scalable architecture. Whether working independently or collaborating within a team, I focus on creating secure, efficient, and innovative solutions that drive real business success. I'm passionate about leveraging technology to solve complex problems — and even more passionate about delivering results that exceed expectations.</p>
                  <p id='GuideText'>Click the circle on the {position} to see what tech stacks i have worked with!</p>
                </div>
              </div>
              <div className='AboutRight'>
                <div onClick={()=>setClick(!click)} className='StackIconBorder'>
                  <div id='AnimatedStacks' className={`stack ${show}`}>
                    <StackIcon onClick={()=>setClick(!click)} style={{padding:'25px', borderRadius:'100%'}} id='StackIcon' name={stackIcon}/>
                  </div>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'reactjs'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'python'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'csharp'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'azure'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'aws'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'html5'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'css3'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'docker'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'kubernetes'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'wordpress'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'mysql'}></StackIcon></li>
                  <li className='showcase-item' id={click?'showcase-transform':null}><StackIcon style={{width:'35px'}} name={'linux'}></StackIcon></li>
                </div>
              </div>
          </div>
        <div className='Projects'>
          <div className='ProjectsContent'>
            <Projects/>
          </div>
        </div>
        <div style={{marginBottom:'20px'}} className='LettersOfRecommendation'>
        <div style={{marginTop:'20px'}} className='SectionTitle'>
            <h1 id='SectionText'>Recommendations</h1>
            <div id='Underline'></div>
          </div>
        <div style={{width:'100%', display:'flex', justifyContent:'end'}} className='letter1'>
          <Letter
            image={Chetan}
            name="Chetan Kerhalkar"
            title="Director of Technology @ Fulcrum Digital Inc | Azure Solution Architect, Azure AI Associate Certified, AI Expert, VIBE Coder, Generative AI"
            company="Fulcrum Digital"
            linkedIn="https://www.linkedin.com/in/chetan-kerhalkar-9a5a6856/"
            content={"I’ve had the opportunity to work closely with Nikita Sinkha on multiple platform development initiatives, and he has consistently impressed me with his technical depth and problem-solving ability. As a skilled full-stack developer, Nikita brings strong expertise in Python and ReactJS, with a clear focus on writing clean, scalable, and maintainable code. He quickly understands complex requirements, delivers solutions with minimal supervision, and often goes the extra mile to improve system performance and user experience. His proactive attitude, collaborative mindset, and ability to work across the stack—from backend APIs to frontend UI—make him a valuable asset to any tech team. Whether it's building from scratch or optimizing existing systems, Nikita approaches every task with professionalism and dedication. I highly recommend him for any engineering role that demands both technical excellence and team-oriented execution."}
          />
        </div>
        <div style={{width:'100%', display:'flex', justifyContent:'start'}} className='letter1'>
          <Letter
            image={Chris}
            name="Christopher Yin"
            title="Executive Leader | Creative Director | UI/UX Expert | AR, VR, XR, AI, CV, NFT, Web3 | Metaverse Visionary | Producer | Content Creator"
            company="Fulcrum Digital"
            linkedIn="https://www.linkedin.com/in/christopheryin/"
            content={"I am pleased to write this letter of recommendation for Nikita Sinkha, a highly capable Full Stack Developer and AI Software Engineer with whom I had the pleasure of working at Fulcrum Digital.\n\n" +
  "During our collaboration, Nikita played a pivotal role in a transformative initiative that applied computer vision and Python to optimize graphic processing within our supply chain pipeline. The project involved converting raster image files such as; BMP, JPG, PDF, or PNG into scalable vector graphics (SVGs), enabling us to automate a previously manual process. This innovation dramatically reduced our order-to-shipment cycle by nearly three weeks, a milestone that significantly improved both operational efficiency and customer satisfaction.\n\n" +
  "Nikita’s contribution was not limited to coding, though his fluency in Python, PyTorch, and modern frameworks is exceptional. He consistently demonstrated an analytical mindset, excellent problem-solving ability, and a keen understanding of how to bridge business goals with technical solutions. His work ethic is matched by his ability to collaborate cross-functionally and deliver clean, scalable code even under tight deadlines.\n\n" +
  "Beyond technical execution, what truly sets Nikita apart is his curiosity and commitment to innovation. He is a developer who not only meets expectations but often exceeds them by proactively exploring new ways to add value.\n\n" +
  "I highly recommend Nikita Sinkha for any role that requires deep technical expertise, creativity, and a strong drive to deliver measurable impact. He would be an asset to any forward-thinking team."}
          />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
