import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Follow below to check more!{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/marjel_meshi/" target="_blank">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/mariel.messi" target="_blank">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://www.linkedin.com/in/mariel-mesi/" target="_blank">
          {" "}
          <AiOutlineLinkedin className="social" />
        </a>

        <a href="https://www.youtube.com/channel/UC3jcZ6e_-kpYLV48td2fFRw" target="_blank">
          <TiSocialYoutube className="social" />
        </a>

        <a href="https://github.com/MarielMesi" target="_blank">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
