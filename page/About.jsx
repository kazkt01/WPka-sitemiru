import {
  FaFigma,
  FaHtml5,
  FaPhp,
  FaReact,
  FaWordpressSimple,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/about.css";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAstro,
  SiBlender,
  SiCss3,
  SiJquery,
  SiSupabase,
  SiTypescript,
  SiUnrealengine,
  SiVite,
  SiWebgl,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";

function About() {
  return (
    <div>
      <Header />

      <section>
        <figure className="a-box">
          <video className="a-video" autoPlay loop>
            <source src="../src/assets/video/siro.mp4" />
          </video>
          <figcaption>
            <h2>Kazuki Tachibana</h2>
            <p>{/* <strong>Web Developper</strong> */}</p>
            <a
              className="git-link"
              href="https://github.com/kazkt01"
              target="_blank"
            >
              <AiFillGithub className="icon-git" size="3em" />
            </a>
            <p>
              大阪府出身→渋谷区在住
              <br />
              主にフロントエンドやデザインに関する学習をしています <br />
              プログラミング自体は、2024年の7月から始めました
              <br />
              今まで独学で学習してきたのですが実際に実務を経験してみたいと{" "}
              <br />
              考え現在は、実務経験を積める環境を探し始めています
              <br />
            </p>
            <p className="skills-title">Skills</p>
            <div className="skills-box">
              <div className="skills-box">
                <FaHtml5 className="icon" size="2em" />
                <SiCss3 className="icon" size="1.7em" />
                <IoLogoJavascript className="icon" size="2em" />
                <SiJquery className="icon" size="2em" />
                <FaReact className="icon" size="2em" />
                <SiTypescript className="icon" size="2em" />
                <div className="skills-box">
                  <IoLogoFirebase className="icon" size="2em" />
                  <SiSupabase className="icon" size="2em" />
                  <SiVite className="icon" size="2em" />
                  <SiAstro className="icon" size="2em" />
                  <FaWordpressSimple className="icon" size="2em" />
                  <FaPhp className="icon" size="3em" />
                  <SiWebgl className="icon" size="3em" />
                </div>
              </div>
              <FaFigma className="icon" size="2em" />
              <SiAdobeillustrator className="icon" size="2em" />
              <SiAdobephotoshop className="icon" size="2em" />
              <SiAdobeaftereffects className="icon" size="2em" />
              <SiBlender className="icon" size="2em" />
              <SiUnrealengine className="icon" size="2em" />
            </div>
          </figcaption>
        </figure>
      </section>

      <Footer />
    </div>
  );
}

export default About;
