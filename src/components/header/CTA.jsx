import CvTr from "assets/CV_Atif_Simsek_TR.pdf";
import CvEn from "assets/CV_Atif_Simsek_EN.pdf";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  return (
    <div className="cta">
      <a
        className="btn"
        href={i18n?.language === "tr" ? CvTr : CvEn}
        download={
          i18n?.language === "tr" ? "CV_Atif_Simsek_TR" : "CV_Atif_Simsek_EN"
        }
      >
        {t("HEADER.cv")}
      </a>
      <a className="btn btn-primary" href="#contact">
        {t("HEADER.contactButton")}
      </a>
    </div>
  );
};

export default CTA;
