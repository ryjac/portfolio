import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	// {
	// 	category: "Mobile",
	// 	items: [{ name: "Flutter", icon: <RiFlutterFill size={32} /> }]
	// },
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={64} /> },
			{ name: "CSS", icon: <DiCss3 size={64} /> },
			{ name: "JS", icon: <IoLogoJavascript size={64} /> },
			{ name: "React", icon: <FaReact size={64} /> },
			{ name: "Next", icon: <TbBrandNextjs size={64} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={64} /> },
			{ name: "MUI", icon: <MuiIcon width={64} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={64} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={64} /> },
			{ name: "Chakra", icon: <ChakraIcon width={64} /> },
			{ name: "styled components", icon: <StyledIcon width={64} /> },
			{ name: "HeadlessUI", icon: <HeadlessUiIcon width={64} /> }
		]
	},
	{
		category: "UI tools",
		items: [
			{ name: "Figma", icon: <FaFigma size={64} /> },
			{ name: "Zeplin", icon: <ZeplinIcon width={72} /> },
			{ name: "XD", icon: <AdobeXDIcon width={64} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "WordPress CMS", icon: <FaWordpressSimple size={64} /> },
			{ name: "Jira", icon: <JiraIcon width={64} /> },
			{ name: "Trello", icon: <FaTrello size={64} /> },
			{ name: "Github", icon: <AiFillGithub size={64} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={64} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={64} /> },
			{ name: "WebStorm", icon: <WebstormIcon width={64} /> }
		]
	}
];
