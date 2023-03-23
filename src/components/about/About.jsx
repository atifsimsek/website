import "./about.css"
import img1 from "assets/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg"
import { FaAward } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb"
import { VscFolderLibrary } from "react-icons/vsc"
import { useSelector } from "react-redux"

const About = () => {
  const { language } = useSelector(state => state.languageReducer)

  return (
    <section id="about">
      <h5>{language === "tr" ? "Beni Tanıyın" : "Get To Know"}</h5>
      <h2>{language === "tr" ? "Hakkımda" : "About Me"}</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>{language === "tr" ? "Deneyim" : "Experience"}</h5>
              <small>{language === "tr" ? "1+ yıl kodlama deneyimi" : "1+ year of coding experience"}</small>

            </article>
            <article className="about-card">
              <TbCertificate className="about-icon" />
              <h5>{language === "tr" ? "Sertifikalar" : "Certificates"}</h5>
              <small>{language === "tr" ? "Front-End alanında 9 sertifika" : "9 Certificates in the front-end field"}</small>

            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>{language === "tr" ? "Projeler" : "Projects"}</h5>
              <small>{language === "tr" ? "40+ Tamamlanan proje" : "40+ Completed project"}</small>

            </article>
          </div>

          <p>
            {language === "tr" ? " 1995 Sinop-Merkez doğumluyum, 2018 Haziran ayında işletme fakültesinden mezun olduktan sonra çocukluğumdan beri ilgi duyduğum ve dünyanın geleceğine yön vereceğini düşündüğüm yazılım alanına yöneldim, bu yönde ilk adımım Sakarya Üniversitesi Bilişim Sistemleri bölümünde yüksek lisans yapmaya başlamak oldu. Mezun olup Askerliğimi yaptıktan sonra kendimi geliştirmeye başladım. Seyahat engelim bulunmamaktadır." : "I was born in 1995 in Sinop, and after graduating from the business faculty in June 2018, I tended to the software field which I have been interested in programming which  will shape the future of the world since childhood. In this direction My first step was to start a Master's degree in Computer Systems at Sakarya University. After I completed Master's degree about information systems, I served out miliary service. I commenced to work software developing skills.  I have no travel restrictions."}

          </p>
          <p className="detail">
            {language === "tr" ? "Yaklaşık bir yıldan fazla süredir front-end alanında kendimi geliştiriyorum. Html Css ve Javascript'te belirli bir seviyeye geldikten sonra React öğrenip geliştirmeler yapmaya başladım. Git, npm, vscode, visual studio gibi araçları kullanıyorum,  Redux, React-Router-Dom, Formik, Yup gibi paketleri ve Context Api kullanabiliyorum. Şu anda, Next.js ve TypeScript öğrenmeye çalışıyorum." : "    I have been developing myself about the front-end field  about approximately 1+ year. After I reached a certain level in Html Css and Javascript, I started learning React and making improvements., I started learning React and making improvements. I can use tools as like Git, npm, vscode, and visual studio, and I am able to use packages like Redux, React-Router-Dom, Formik, Yup, and the Context Api. Currently, I am trying to learn Next.js and TypeScript."}
          </p>
          <p className="detail">
            {language === "tr" ? "Yaptığım projeleri github hesabımda paylaşmaktayım. Bazı projelerimi aşağıdaki projelerim kısmından inceleyebilirsiniz." : "I share my projects on my github account. You can review some of my projects from the following projects section."}
          </p>

          <a href="#contact" className="left btn btn-primary">{language === "tr" ? "İletişime Geç" : "Contact With Me"}</a>

        </div>
      </div>

    </section>
  )
}

export default About