import "./projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container members-container">
      <h1 className="member-txt">Projects</h1>
      <div className="member member-1">
        <div className="member-img1"></div>
        <div className="member-info">
          <h1 className="name">MM</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
            This is an informational website about cryptocurrencies with accurate pricing of those cryptocurrencies on the market at the moment! 
          </h4>
          <a href="https://darkel.epizy.com/index.php" className="contact-member" target="_blank">
            <span>Check it out</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img2"></div>
        <div className="member-info">
          <h1 className="name">MM</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
            This is a music streaming website with admin dashboard included to easily customize any of the content. Included there is the database in SQL!
          </h4>
          <a href="https://github.com/MarielMesi/darkify" className="contact-member" target="_blank">
            <span>Check it out</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img3"></div>
        <div className="member-info">
          <h1 className="name">MM</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
            This is mobile app made with Flutter and Dart. It is an informational application which you can customize its content and use it as a Diary with online database using Firebase!
          </h4>
          <a href="https://www.youtube.com/watch?v=XBXW82V-wJ4" className="contact-member" target="_blank">
            <span>Check it out</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img4"></div>
        <div className="member-info">
          <h1 className="name">MM</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
            This is a whole project which is around NFT's and all the project was done my team Cosmos!
          </h4>
          <a href="https://www.youtube.com/watch?v=vIpYbC5Kn7E" className="contact-member" target="_blank">
            <span>Check it out</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img6"></div>
        <div className="member-info">
          <h1 className="name">MM</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
            This is an executable game which you can play on your PC. It is created with the help of Unity and the coding is done in C#!
          </h4>
          <a href="https://github.com/MarielMesi/unity_racing_game" className="contact-member" target="_blank">
            <span>Check it out</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
