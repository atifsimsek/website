import "./header.css"
import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from "redux/languageSlice"
const LanguageButton = () => {

    const dispatch = useDispatch()
    const { language } = useSelector(state => state.languageReducer)

    
    const toggleLanguage = () => {
        if (language === "tr") {
            dispatch(changeLanguage("en"))

        }
        else {
            dispatch(changeLanguage("tr"))
          

        }
    }

    return (
        <div className="language-button">
            <div className="switch">
                <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" />
                <label onClick={toggleLanguage} htmlFor="language-toggle"></label>
                <span className="on">Tr</span>
                <span className="off">EN</span>
            </div>
        </div>
    )
}

export default LanguageButton