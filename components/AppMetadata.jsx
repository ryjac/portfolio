const author = "Ryan Jacobs";
const description =
	"Passionate software developer from Pasadena, CA who lives to use engineering, critical thinking, and problem solving to create beautiful things with technology.";
const url = "https://ryanjacobs.io";
export const AppMetadata = {
	metadataBase: new URL("https://ryanjacobs.io"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Ryan Jacobs",
		"Ryan Jacobs - software developer",
		"Ryan Jacobs - software engineer",
		"Ryan Jacobs - senior software developer",
		"Ryan Jacobs - senior software engineer",
		"Ryan Jacobs - computer science",
		"Ryan Jacobs - computer science major",
		"frontend developer",
		"backend developer",
		"fullstack developer",
		"software engineer",
		"software developer",
		"senior software engineer",
		"senior software developer",
		"cloud architect",
		"computer science"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://portfolio-git-dev-natwharton.vercel.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://portfolio-git-dev-natwharton.vercel.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
