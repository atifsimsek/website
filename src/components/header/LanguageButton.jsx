import React from "react";
import "./header.css";
import { useTranslation } from "react-i18next";

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    if (i18n.language === "tr") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("tr");
    }
  };

  return (
    <div className="language-toggle-container">
      <button
        className={`language-toggle-btn ${isEnglish ? "english" : "turkish"}`}
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        <div className="language-toggle-slider">
          <div className="language-icon tr-icon">TR</div>
          <div className="language-icon en-icon">EN</div>
        </div>
      </button>
    </div>
  );
};

export default LanguageButton;
