/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css"
import { FaFacebook } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { IoLogoTwitter } from "react-icons/io"
import { useSelector } from "react-redux"
const Footer = () => {
  const { language } = useSelector(state => state.languageReducer)
  return (
    <footer>
      
      {
        language === "tr"
          ?
          <ul className="permalinks">
            <li><a href="#">Anasayfa</a></li>
            <li><a href="#about">Hakkımda</a></li>
            <li><a href="#experience">Yeteneklerim</a></li>
            <li><a href="#services">Eğitim ve Sertifikalar</a></li>
            <li><a href="#portfolio">Projeler</a></li>

            <li><a href="#contact">İletişim</a></li>
          </ul>
          :
          <ul className="permalinks">
            <li><a href="#">HomePage</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#services">Education and Certificates</a></li>
            <li><a href="#portfolio">Projects</a></li>

            <li><a href="#contact">Contact</a></li>
          </ul>

      }
      <div className="footer-socials">
        <a target="_blank" rel='noreferrer' href="https://www.facebook.com/atif.simsek">
          <FaFacebook />
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.instagram.com/atifsimsek/">
          <FiInstagram />
        </a>
        <a target="_blank" rel='noreferrer' href="https://twitter.com/atifsimsek_" >
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Atıf Şimşek</small>
      </div>
    </footer>
  )
}

export default Footer