import "./contact.css"
import { BsPhone, BsWhatsapp } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { useSelector } from "react-redux"
import { useRef, useState } from 'react';
import { BsCheckCircle } from "react-icons/bs"
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef()

  const { language } = useSelector(state => state.languageReducer)

  const [send, setSend] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_USER_ID}`)

    e.target.reset()
    setSend(true)

    setTimeout(() => {
      setSend(false)

    }, 1700)

  };



  return (
    <>
      {
        language === "tr" ?
          <section id="contact">
            <h5>Bağlantı Kurun</h5>
            <h2>İletişim</h2>

            <div className="container contact-container">
              <div className="contact-options">
                <article className="contact-option">
                  <BsPhone className="contact-option-icon" />
                  <h4>Telefon</h4>
                  <h5>0 537 623 3857</h5>
                  <a href="tel:+905376233857" target="_blank" rel="noreferrer">Aramak İçin Tıklayın</a>
                </article>
                <article className="contact-option">
                  <MdOutlineEmail className="contact-option-icon" />
                  <h4>Email</h4>
                  <h5>dev.atifsimsek@gmail.com</h5>
                  <a href="mailto:dev.atifsimsek@gmail.com" target="_blank" rel="noreferrer">Email Gönderin</a>
                </article>
                <article className="contact-option">
                  <BsWhatsapp className="contact-option-icon" />
                  <h4>WhatsApp</h4>
                  <h5>0537 623 38 57</h5>
                  <a href="https://wa.me/905376233857?text=Atıf%20Şimşek" target="_blank" rel="noreferrer">Mesaj Gönderin</a>
                </article>
              </div>
              {/* Contact Options End */}

              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Adınız Soyadınız" required />
                <input type="email" name="email" placeholder="Email Adresiniz" required />
                <textarea name="message" placeholder="Mesajınız" rows="7" required></textarea>
                <button type="submit" className="btn btn-primary">Email Gönder</button>
              </form>
            </div>


            <div className={`email-send ${send ? "email-send-show" : ""}`}>
              <BsCheckCircle className="icon" />
              <span>Mesajınız Gönderildi</span>
            </div>



          </section>
          :
          <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact-container">
              <div className="contact-options">
                <article className="contact-option">
                  <BsPhone className="contact-option-icon" />
                  <h4>Mobile Number</h4>
                  <h5>0 537 623 3857</h5>
                  <a href="tel:+905376233857" target="_blank" rel="noreferrer">Click For Call</a>
                </article>
                <article className="contact-option">
                  <MdOutlineEmail className="contact-option-icon" />
                  <h4>Email</h4>
                  <h5>dev.atifsimsek@gmail.com</h5>
                  <a href="mailto:dev.atifsimsek@gmail.com" target="_blank" rel="noreferrer">Send a Email</a>
                </article>
                <article className="contact-option">
                  <BsWhatsapp className="contact-option-icon" />
                  <h4>WhatsApp</h4>
                  <h5>0537 623 38 57</h5>
                  <a href="https://wa.me/905376233857?text=Atıf%20Şimşek" target="_blank" rel="noreferrer">Send a Message</a>
                </article>
              </div>
              {/* Contact Options End */}

              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
                <button type="submit" className="btn btn-primary">Send a Email</button>
              </form>
            </div>

            <div className={`email-send ${send ? "email-send-show" : ""}`}>
              <BsCheckCircle className="icon" />
              <span>The message has been sent</span>
            </div>

          </section>
      }
    </>
  )
}

export default Contact