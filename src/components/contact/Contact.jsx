import "./contact.css";
import { BsPhone, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [send, setSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      `${process.env.REACT_APP_SERVICE_ID}`,
      `${process.env.REACT_APP_TEMPLATE_ID}`,
      form.current,
      `${process.env.REACT_APP_USER_ID}`
    );

    e.target.reset();
    setSend(true);

    setTimeout(() => {
      setSend(false);
    }, 1700);
  };

  return (
    <section id="contact">
      <h5>{t("CONTACT.subtitle")}</h5>
      <h2>{t("CONTACT.title")}</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <BsPhone className="contact-option-icon" />
            <h4>{t("CONTACT.phone")}</h4>
            <h5>0 537 623 3857</h5>
            <a href="tel:+905376233857" target="_blank" rel="noreferrer">
              {t("CONTACT.clickToCall")}
            </a>
          </article>
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>{t("CONTACT.email")}</h4>
            <h5>dev.atifsimsek@gmail.com</h5>
            <a
              href="mailto:dev.atifsimsek@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {t("CONTACT.sendEmail")}
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>{t("CONTACT.whatsapp")}</h4>
            <h5>0537 623 38 57</h5>
            <a
              href="https://wa.me/905376233857?text=Atıf%20Şimşek"
              target="_blank"
              rel="noreferrer"
            >
              {t("CONTACT.sendMessage")}
            </a>
          </article>
        </div>
        {/* Contact Options End */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("CONTACT.form.name")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("CONTACT.form.email")}
            required
          />
          <textarea
            name="message"
            placeholder={t("CONTACT.form.message")}
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("CONTACT.form.submit")}
          </button>
        </form>
      </div>

      <div className={`email-send ${send ? "email-send-show" : ""}`}>
        <BsCheckCircle className="icon" />
        <span>{t("CONTACT.form.successMessage")}</span>
      </div>
    </section>
  );
};

export default Contact;
