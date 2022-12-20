import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"
import { useSelector } from "react-redux"
import ProgressBar from "./ProgressBar"
const Experience = () => {
  const { language } = useSelector(state => state.languageReducer)
  return (
    <section id="experience">
      <h5>{language === "tr" ? "Hangi Yeteneklere Sahibim" : "What Are My Skills"} </h5>
      <h2>{language === "tr" ? "Yeteneklerim" : "Skills"}</h2>

      <div className="container experience-container">
        <div className="experience-1">
          <h3>{language === "tr" ? "Frontend Geliştiriciliği" : "Frontend Development"}</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <ProgressBar progress={90} width={90} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <ProgressBar progress={85} width={85} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <ProgressBar progress={80} width={80} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>React</h4>
                <ProgressBar progress={75} width={75} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Redux</h4>
                <ProgressBar progress={70} width={70} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Tailwind</h4>
                <ProgressBar progress={85} width={85} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <ProgressBar progress={75} width={75} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Sass</h4>
                <ProgressBar progress={85} width={85} />
              </div>
            </article>
          </div>
        </div>
        <div className="experience-2">
          <h3>{language === "tr" ? "Kullandığım IDE ve Diğer Araçlar" : "My Used IDEs and Other Tools"} </h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>VS Code</h4>
                <ProgressBar progress={85} width={85} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4 className="vs">Visual Studio</h4>
                <ProgressBar progress={80} width={80} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>GİT</h4>
                <ProgressBar progress={60} width={60} />
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>NPM</h4>
                <ProgressBar progress={50} width={60} />
              </div>
            </article>
            <div className="content-language">
              <h3>{language === "tr" ? "Yabancı Dil" : "Language"}</h3>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>{language === "tr" ? "İnglizce B1" : "English B1"}</h4>
                  <span className="language-progress"><ProgressBar progress={60} width={60} /></span>
                </div>
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience