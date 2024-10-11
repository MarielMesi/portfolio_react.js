import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UC3jcZ6e_-kpYLV48td2fFRw"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Marjel Meshi</span>
          </h2>
        </a>

        <a
          href="mailto:marielmesi11@gmail.com?subject = Feedback&body = Message"
          className="contact whatsapp"
          target={"blank"}
        >
          <IoMailOutline className="icon" />
          <h2>
          e-mail <span>Send Feedback</span>
          </h2>
        </a>

        <a href="https://www.linkedin.com/in/mariel-mesi/" className="contact instagram" target="_blank">
          <AiOutlineLinkedin className="icon" />
          <h2>
            linkedin <span>Marjel Meshi</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
