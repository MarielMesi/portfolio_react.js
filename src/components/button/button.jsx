import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href={require("../props/CV_Marjel_Meshi.pdf")} target="_blank" className="btn pri">
        Resume
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;
