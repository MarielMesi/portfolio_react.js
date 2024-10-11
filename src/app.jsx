import Header from "./components/header/header";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      
      <Header />
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
