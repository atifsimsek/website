import "./navbar.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail,BiCodeBlock } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {

  const [activeNav, setActiveNav] = useState("#")


  return (
    <nav>
      <a onClick={() => { setActiveNav("#") }} className={activeNav === "#" ? "active" : ""} href="#"><AiOutlineHome /></a>
      <a className={activeNav === "#about" ? "active" : ""} onClick={() => { setActiveNav("#about") }} href="#about"><AiOutlineUser /></a>
      <a className={activeNav === "#experience" ? "active" : ""} onClick={() => { setActiveNav("#experience") }} href="#experience"><FaLaptopCode /></a>
      <a className={activeNav === "#education" ? "active" : ""} onClick={() => { setActiveNav("#education") }} href="#education"><BiBook /></a>
      <a className={activeNav === "#contact" ? "active" : ""} onClick={() => { setActiveNav("#contact") }} href="#contact"><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Navbar