import "./skills.css";
import { useTranslation } from "react-i18next";
import { FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsLayers } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import {
  DevExtremeIcon,
  FigmaIcon,
  ZustandIcon,
  ReactQueryIcon,
  ReactHookFormIcon,
  StyledComponentsIcon,
  MantineIcon,
  GitHubIcon,
} from "assets/icons/icons";

const Skills = () => {
  const { t } = useTranslation();

  const skillsData = [
    {
      category: "categories.frontend",
      skills: [
        {
          name: "React",
          icon: <FaReact size={20} style={{ color: "#61DAFB" }} />,
        },
        {
          name: "Next.js",
          icon: <TbBrandNextjs size={22} style={{ color: "#000000" }} />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={20} style={{ color: "#007ACC" }} />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript size={20} style={{ color: "#F7E018" }} />,
        },
      ],
    },
    {
      category: "categories.stateManagement",
      skills: [
        {
          name: "Redux",
          icon: <SiRedux size={20} style={{ color: "#764ABC" }} />,
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux size={20} style={{ color: "#764ABC" }} />,
        },
        { name: "Zustand", icon: <ZustandIcon /> },
        {
          name: "Context API",
          icon: <FaReact size={20} style={{ color: "#61DAFB" }} />,
        },
      ],
    },
    {
      category: "categories.dataForms",
      skills: [
        { name: "React Query", icon: <ReactQueryIcon /> },
        { name: "React Hook Form", icon: <ReactHookFormIcon /> },
        {
          name: "REST API",
          icon: <BsLayers size={20} style={{ color: "#FF6C37" }} />,
        },
      ],
    },
    {
      category: "categories.styling",
      skills: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={20} style={{ color: "#06B6D4" }} />,
        },
        {
          name: "SCSS / Sass",
          icon: <FaSass size={20} style={{ color: "#CD6799" }} />,
        },
        { name: "Styled Components", icon: <StyledComponentsIcon /> },
      ],
    },
    {
      category: "categories.uiLibraries",
      skills: [
        {
          name: "Material UI",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 36 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                fill="#007FFF"
              />
            </svg>
          ),
        },
        { name: "Mantine UI", icon: <MantineIcon /> },
        { name: "DevExtreme", icon: <DevExtremeIcon /> },
      ],
    },
    {
      category: "categories.tools",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt size={20} style={{ color: "#F05033" }} />,
        },
        { name: "GitHub", icon: <GitHubIcon /> },
        { name: "Figma", icon: <FigmaIcon /> },
      ],
    },
    {
      category: "categories.other",
      skills: [
        {
          name: "Component-Based Architecture",
          icon: <BsLayers size={20} style={{ color: "#4A9EFF" }} />,
        },
        {
          name: "Responsive Design",
          icon: <MdDevices size={20} style={{ color: "#FF6B6B" }} />,
        },
        {
          name: "Agile & Scrum",
          icon: <AiOutlineProject size={20} style={{ color: "#00C853" }} />,
        },
      ],
    },
  ];

  return (
    <section id="skills">
      <h5>{t("SKILLS.title")}</h5>
      <h2>{t("SKILLS.subtitle")}</h2>

      <div className="container skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{t(`SKILLS.${category.category}`)}</h3>
            <div className="skills-content">
              {category.skills.map((skill, skillIndex) => (
                <article key={skillIndex} className="skill-item">
                  <div className="skill-icon-name">
                    {skill.icon}
                    <h4>{skill.name}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
