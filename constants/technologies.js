import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiWindows, DiLinux } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaPython, FaTrello, FaNodeJs } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiSanity } from "react-icons/si";
// import { RiFlutterFill } from "react-icons/ri";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
// import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	// {
	// 	category: "Mobile",
	// 	items: [{ name: "Flutter", icon: <RiFlutterFill size={32} /> }]
	// },
	{
		category: "Front-end",
		items: [
			{ name: "JS", icon: <IoLogoJavascript size={64} /> },
			{ name: "React", icon: <FaReact size={64} /> },
			{ name: "Next.js", icon: <TbBrandNextjs size={64} /> },
			{ name: "MUI", icon: <MuiIcon width={64} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={64} /> },
			{ name: "HTML", icon: <AiFillHtml5 size={64} /> },
			{ name: "CSS", icon: <DiCss3 size={64} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={64} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={64} /> },
			{ name: "Styled Components", icon: <StyledIcon width={64} /> }
		]
	},
	{
		category: "Backend",
		items: [
			{ name: "Node.js", icon: <FaNodeJs size={64} /> },
			{ name: "Python", icon: <FaPython size={64} /> }
			// { name: "XD", icon: <AdobeXDIcon width={64} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Sanity", icon: <SiSanity size={64} /> },
			{ name: "Jira", icon: <JiraIcon width={64} /> },
			{ name: "Trello", icon: <FaTrello size={64} /> },
			{ name: "Github", icon: <AiFillGithub size={64} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={64} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={64} /> },
			{ name: "WebStorm", icon: <WebstormIcon width={64} /> },
			{ name: "WordPress CMS", icon: <FaWordpressSimple size={64} /> },
			{ name: "Windows", icon: <DiWindows size={64} /> },
			{ name: "Linux", icon: <DiLinux size={64} /> }
		]
	}
];
