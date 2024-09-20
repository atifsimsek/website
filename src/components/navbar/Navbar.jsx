/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./navbar.css";
import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { FaLaptopCode, FaToolbox, FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const sections = [
    { id: "#home", selector: "#home" },
    { id: "#about", selector: "#about" },
    { id: "#skills", selector: "#skills" },
    { id: "#experience", selector: "#experience" },
    { id: "#portfolio", selector: "#portfolio" },
    { id: "#education", selector: "#education" },
    { id: "#contact", selector: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.querySelector(section.selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveNav(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <a
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#home");
          scrollToSection("#home");
        }}
        className={activeNav === "#home" ? "active" : ""}
        href="#home"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#about");
          scrollToSection("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#skills");
          scrollToSection("#skills");
        }}
        className={activeNav === "#skills" ? "active" : ""}
        href="#skills"
      >
        <FaToolbox />
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#experience");
          scrollToSection("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
        href="#experience"
      >
        <FaUserTie />
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#portfolio");
          scrollToSection("#portfolio");
        }}
        className={activeNav === "#portfolio" ? "active" : ""}
        href="#portfolio"
      >
        <FaLaptopCode />
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#education");
          scrollToSection("#education");
        }}
        className={activeNav === "#education" ? "active" : ""}
        href="#education"
      >
        <BiBook />
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#contact");
          scrollToSection("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
