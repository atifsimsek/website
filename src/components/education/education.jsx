/* eslint-disable jsx-a11y/anchor-has-content */
import "./education.css";
import { BiCheck } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { cercificatesData } from "data/certificates";

const Education = () => {
  const { t } = useTranslation();

  const numItemsToShow = 6;
  const [shownCertificates, setShownCertificates] = useState([]); // Başlangıçta 0 eleman gösteriliyor
  const [showMore, setShowMore] = useState(true);

  const handleLoadMore = () => {
    const currentNumItems = shownCertificates.length;
    const nextNumItems = currentNumItems + numItemsToShow;
    const newCertificates = cercificatesData.slice(0, nextNumItems);
    setShownCertificates(newCertificates);

    if (newCertificates.length === cercificatesData.length) {
      setShowMore(false); // Tüm elemanlar yüklendiyse "Daha fazla göster" butonunu gizle
    }
  };

  const handleShowLess = () => {
    setShownCertificates([]); // Gösterilen elemanları tekrar sıfırlıyoruz
    setShowMore(true);
  };

  return (
    <section id="education">
      <h5>{t("EDUCATION.title")}</h5>
      <h2>{t("EDUCATION.subtitle")}</h2>

      <div className="container education_container">
        {/* ARTİCLE 1  */}
        <article className="education ">
          <div className="education_head">
            <h3>{t("EDUCATION.sections.technicalCertificates")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("FMSS Front-End Practicum")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.certificates.patikaFrontend")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>NTT DATA {t("EDUCATION.certificates.projectManagement")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.items.modernWebDevelopment")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.items.reactContextAPI")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.items.completeWebDevelopment")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.items.reactCourses")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.items.webProgramming301")}</p>
            </li>
          </ul>
        </article>

        {/* ARTİCLE 2 */}
        <article className="education">
          <div className="education_head">
            <h3>{t("EDUCATION.sections.schoolLife")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.items.sinopHighSchool")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.items.sakaryaTourism")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.items.sakaryaMasters")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.items.anadoluAssociate")}</p>
            </li>
          </ul>
        </article>

        {/* ARTİCLE 3 */}
        <article className="education ">
          <div className="education_head">
            <h3>{t("EDUCATION.sections.softSkill")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EDUCATION.certificates.agile&Scrum")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>NTT DATA {t("EDUCATION.certificates.juniorNtt")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>NTT DATA {t("EDUCATION.certificates.innovation")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>NTT DATA {t("EDUCATION.certificates.consultantBasics")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>NTT DATA {t("QA")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>
                NTT DATA{" "}
                {t("EDUCATION.certificates.One-on-One Mentorship Program")}
              </p>
            </li>
          </ul>
        </article>

        {shownCertificates.map((certificate, index) => (
          <article className="education" key={index}>
            <div className="education_head">
              <h3>{t(certificate.name)}</h3>
            </div>
            <div className="education_list">
              <img src={certificate.image} alt={t(certificate.name)} />
            </div>
          </article>
        ))}

        {showMore && shownCertificates.length < cercificatesData.length && (
          <button className="btn btn-primary more" onClick={handleLoadMore}>
            {t("EDUCATION.loadMore")}
          </button>
        )}
        {!showMore && (
          <button className="btn btn-primary more" onClick={handleShowLess}>
            {t("EDUCATION.showLess")}
            <a className="btnLink" href="#education" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Education;
