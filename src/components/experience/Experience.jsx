import "./experience.css";
import { BiCheck } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience">
      <h5>{t("EXPERIENCE.title")}</h5>
      <h2>{t("EXPERIENCE.subtitle")}</h2>

      <div className="container education_container">
        {/* ARTİCLE 1  */}
        <article className="education ">
          <div className="education_head">
            <h3>{t("EXPERIENCE.projects.nttData1")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData1.desc1")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData1.desc2")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData1.desc3")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData1.desc4")}</p>
            </li>
          </ul>
        </article>

        {/* ARTİCLE 2 */}
        <article className="education">
          <div className="education_head">
            <h3>{t("EXPERIENCE.projects.nttData2")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData2.desc1")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData2.desc2")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData2.desc3")}</p>
            </li>
          </ul>
        </article>

        {/* ARTİCLE 3 */}
        <article className="education ">
          <div className="education_head">
            <h3>{t("EXPERIENCE.projects.nttData3")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData3.desc1")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData3.desc2")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.nttData3.desc3")}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
