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
            <h3>{t("EXPERIENCE.projects.daimlerTruck")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.daimlerTruck.desc1")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.daimlerTruck.desc2")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.daimlerTruck.desc3")}</p>
            </li>
          </ul>
        </article>

        {/* ARTİCLE 2 */}
        <article className="education">
          <div className="education_head">
            <h3>{t("EXPERIENCE.projects.implikaEsg")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.implikaEsg.desc1")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.implikaEsg.desc2")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.implikaEsg.desc3")}</p>
            </li>
          </ul>
        </article>

        {/* ARTİCLE 3 */}
        <article className="education">
          <div className="education_head">
            <h3>{t("EXPERIENCE.projects.bshMilkrun")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.bshMilkrun.desc1")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.bshMilkrun.desc2")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.bshMilkrun.desc3")}</p>
            </li>
          </ul>
        </article>

        {/* ARTİCLE 4 */}
        <article className="education">
          <div className="education_head">
            <h3>{t("EXPERIENCE.projects.cosmosModernization")}</h3>
          </div>
          <ul className="education_list">
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.cosmosModernization.desc1")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.cosmosModernization.desc2")}</p>
            </li>
            <li>
              <BiCheck className="education_list-icon" />
              <p>{t("EXPERIENCE.projectDesc.cosmosModernization.desc3")}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
