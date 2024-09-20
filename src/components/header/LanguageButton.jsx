import React, { useState, useEffect } from "react";
import "./header.css";
import { useTranslation } from "react-i18next";

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState(i18n.language === "en");

  useEffect(() => {
    setChecked(i18n.language === "en");
  }, [i18n.language]);

  const toggleLanguage = () => {
    if (i18n.language === "tr") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("tr");
    }
  };

  const handleToggle = () => {
    toggleLanguage();
    setChecked(!checked);
  };

  return (
    <div className="language-button">
      <div className="switch">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">Tr</span>
        <span className="off">EN</span>
      </div>
    </div>
  );
};

export default LanguageButton;
