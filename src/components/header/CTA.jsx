import Cv from "assets/Atıf Şimşek Cv.pdf"
import CvEng from "assets/Atıf Şimşek Cv Eng.pdf"
import { useSelector } from "react-redux"


const CTA = () => {

    const { language } = useSelector(state => state.languageReducer)
    return (
        <>
            {
                language === "tr" ?
                    <div div className="cta">
                        <a className="btn" href={Cv} download="Atıf Şimşek Cv.pdf">Cv İndir</a>
                        <a className="btn btn-primary" href="#contact">İletişime Geç</a>
                    </div>
                    :
                    <div div className="cta">
                        <a className="btn" href={CvEng} download="Atıf Şimşek Cv Eng.pdf">Downland Cv</a>
                        <a className="btn btn-primary" href="#contact">Concat With Me</a>
                    </div>
            }
        </>
    )
}

export default CTA