import { FaJava } from "react-icons/fa";
import {
	SiSanity,
	SiDjango,
	SiExpress,
	SiMongodb,
	SiMysql,
	SiGit,
	SiApache,
	SiPhp,
	SiAmazonwebservices,
	SiJira,
	SiFlask,
	SiInsomnia,
	SiDocker,
	SiMui,
	SiStyledcomponents,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiHtml5,
	SiCss3,
	SiAntdesign,
	SiBootstrap,
	SiNodedotjs,
	SiPython,
	SiVisualstudiocode,
	SiWordpress,
	SiWindows,
	SiLinux,
	SiCplusplus,
	SiMicrosoftazure
} from "react-icons/si";

export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "JS", icon: <SiJavascript size={64} /> },
			{ name: "React", icon: <SiReact size={64} /> },
			{ name: "Next.js", icon: <SiNextdotjs size={64} /> },
			{ name: "MUI", icon: <SiMui size={64} /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss size={64} /> },
			{ name: "HTML", icon: <SiHtml5 size={64} /> },
			{ name: "CSS", icon: <SiCss3 size={64} /> },
			{ name: "AntD", icon: <SiAntdesign size={64} /> },
			{ name: "Bootstrap", icon: <SiBootstrap size={64} /> },
			{ name: "Styled Components", icon: <SiStyledcomponents size={64} /> }
		]
	},
	{
		category: "Backend",
		items: [
			{ name: "AWS", icon: <SiAmazonwebservices size={64} /> },
			{ name: "Node.js", icon: <SiNodedotjs size={64} /> },
			{ name: "Express", icon: <SiExpress size={64} /> },
			{ name: "Java", icon: <FaJava size={64} /> },
			{ name: "C++", icon: <SiCplusplus size={64} /> },
			{ name: "Python", icon: <SiPython size={64} /> },
			{ name: "Django", icon: <SiDjango size={64} /> },
			{ name: "Flask", icon: <SiFlask size={64} /> },
			{ name: "MongoDB", icon: <SiMongodb size={64} /> },
			{ name: "SQL", icon: <SiMysql size={64} /> },
			{ name: "Apache", icon: <SiApache size={64} /> },
			{ name: "PHP", icon: <SiPhp size={64} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Git", icon: <SiGit size={64} /> },
			{ name: "Docker", icon: <SiDocker size={64} /> },
			{ name: "Sanity", icon: <SiSanity size={64} /> },
			{ name: "Jira", icon: <SiJira size={64} /> },
			{ name: "VsCode", icon: <SiVisualstudiocode size={64} /> },
			{ name: "Azure", icon: <SiMicrosoftazure size={64} /> },
			{ name: "Insomnia", icon: <SiInsomnia size={64} /> },
			{ name: "WordPress CMS", icon: <SiWordpress size={64} /> },
			{ name: "Windows", icon: <SiWindows size={64} /> },
			{ name: "Linux", icon: <SiLinux size={64} /> }
		]
	}
];
