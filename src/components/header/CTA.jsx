import Cv from "assets/Atıf Şimşek Cv Tr.pdf";
import CvEng from "assets/Atıf Şimşek Cv Eng.pdf";
import { useSelector } from "react-redux";

const CTA = () => {
  const { language } = useSelector((state) => state.languageReducer);
  return (
    <>
      {language === "tr" ? (
        <div className="cta">
          <a className="btn" href={Cv} download="Atıf Şimşek Cv Tr">
            Cv İndir
          </a>
          <a className="btn btn-primary" href="#contact">
            İletişime Geç
          </a>
        </div>
      ) : (
        <div className="cta">
          <a className="btn" href={CvEng} download="Atıf Şimşek Cv Eng">
            Downland Cv
          </a>
          <a className="btn btn-primary" href="#contact">
            Contact With Me
          </a>
        </div>
      )}
    </>
  );
};

export default CTA;
