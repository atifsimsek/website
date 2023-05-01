import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaBootstrap, FaSass, FaNpm } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiVisualstudio,
  SiGit,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Experience = () => {
  const { language } = useSelector((state) => state.languageReducer);
  return (
    <section id="experience">
      <h5>
        {language === "tr" ? "Hangi Yeteneklere Sahibim" : "What Are My Skills"}{" "}
      </h5>
      <h2>{language === "tr" ? "Yeteneklerim" : "Skills"}</h2>

      <div className="container experience-container">
        <div className="experience-1">
          <h3>
            {language === "tr"
              ? "Frontend Geliştiriciliği"
              : "Frontend Development"}
          </h3>
          <div className="experience-content">
            <article className="experience-details">
              <div className="title">
                <AiFillHtml5
                  size={20}
                  style={{ color: "#E34E26" }}
                  className="experience-details-icon"
                />
                <h4>HTML</h4>
              </div>
              <div>
                <ProgressBar progress={90} width={90} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FaCss3Alt size={20} className="experience-details-icon" />
                <h4>CSS</h4>
              </div>
              <div>
                <ProgressBar progress={85} width={85} />
              </div>
            </article>

            <article className="experience-details">
              <div className="title">
                <SiJavascript
                  size={20}
                  style={{ color: "#F7E018" }}
                  className="experience-details-icon"
                />
                <h4>JavaScript</h4>
              </div>
              <div>
                <ProgressBar progress={70} width={70} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FaReact size={20} className="experience-details-icon" />
                <h4>React</h4>
              </div>
              <div>
                <ProgressBar progress={70} width={70} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <SiTypescript
                  size={20}
                  style={{ color: "#007ACC" }}
                  className="experience-details-icon"
                />
                <h4>TypeScript</h4>
              </div>
              <div>
                <ProgressBar progress={50} width={50} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <TbBrandNextjs
                  size={22}
                  style={{ color: "#000000" }}
                  className="experience-details-icon"
                />
                <h4>Next.js</h4>
              </div>
              <div>
                <ProgressBar progress={50} width={50} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <SiRedux
                  size={20}
                  style={{ color: "#764ABC" }}
                  className="experience-details-icon"
                />
                <h4>Redux</h4>
              </div>
              <div>
                <ProgressBar progress={70} width={70} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FaSass
                  size={20}
                  style={{ color: "#CD6799" }}
                  className="experience-details-icon"
                />
                <h4>Scss/Sass</h4>
              </div>
              <div>
                <ProgressBar progress={85} width={85} />
              </div>
            </article>
          </div>
        </div>
        <div className="experience-2">
          <h3>
            {language === "tr"
              ? "Kullandığım Diğer IDE, Kütüphane ve Paketler"
              : "My Used IDEs, Libraries and Packages"}{" "}
          </h3>
          <div className="experience-content">
            <article className="experience-details">
              <div className="title">
                <FaBootstrap
                  size={20}
                  style={{ color: "#764ABC" }}
                  className="experience-details-icon"
                />
                <h4>Bootstrap</h4>
              </div>
              <div>
                <ProgressBar progress={75} width={75} />
              </div>
            </article>

            <article className="experience-details">
              <div className="title">
                <SiTailwindcss size={20} className="experience-details-icon" />
                <h4>Tailwind</h4>
              </div>
              <div>
                <ProgressBar progress={85} width={85} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <SiVisualstudiocode
                  size={18}
                  className="experience-details-icon"
                />
                <h4>VS Code</h4>
              </div>
              <div>
                <ProgressBar progress={85} width={85} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <SiVisualstudio
                  size={18}
                  style={{ color: "#7351AC" }}
                  className="experience-details-icon"
                />
                <h4 className="vs">Visual Studio</h4>
              </div>
              <div>
                <ProgressBar progress={80} width={80} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <SiGit
                  style={{ color: "#F05033" }}
                  className="experience-details-icon"
                />
                <h4>GİT</h4>
              </div>
              <div>
                <ProgressBar size={20} progress={60} width={60} />
              </div>
            </article>
            <article className="experience-details">
              <div className="title">
                <FaNpm
                  size={22}
                  style={{ color: "#CC3534" }}
                  className="experience-details-icon"
                />
                <h4>NPM</h4>
              </div>
              <div>
                <ProgressBar progress={50} width={60} />
              </div>
            </article>
            <div className="content-language">
              <h3>{language === "tr" ? "Yabancı Dil" : "Language"}</h3>
              <article className="experience-details">
                <div className="title">
                  <BsPatchCheckFill className="experience-details-icon" />
                  <h4>{language === "tr" ? "İnglizce B1" : "English B1"}</h4>
                </div>
                <div>
                  <span className="language-progress">
                    <ProgressBar progress={60} width={60} />
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
