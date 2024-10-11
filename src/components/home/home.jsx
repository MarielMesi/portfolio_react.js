import './home.css';
import img from '../props/0333.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
        I am a detail-oriented and motivated individual with
        a passion for web and software development. I possess a strong proficiency
        in programming languages such as Python, C++, and Java and have a solid
        understanding of machine learning algorithms and techniques. Along with
        my technical skills, I also possess a range of valuable soft skills including
        professionalism, efficiency, reliability, accountability, as well as
        excellent customer service, problem-solving, decision-making skills and last but not least teamwork!
        I pride myself on being innovative and adaptable to new environments,
        with a resilient and imaginative mindset that allows me to tackle challenges
        with creativity and mindfulness.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
