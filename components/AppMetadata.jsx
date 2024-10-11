const author = "Natalie Wharton";
const description =
	"Computer Science major and software engineer from Pasadena, CA who engineers, develops, and creates beautiful things with technology.";
const url = "https://portfolio-git-dev-natwharton.vercel.app";
export const AppMetadata = {
	metadataBase: new URL("https://portfolio-git-dev-natwharton.vercel.app"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Natalie Wharton",
		"Natalie Wharton - software developer",
		"Natalie Wharton - software engineer",
		"Natalie Wharton - computer science",
		"Natalie Wharton - computer science major",
		"Natalie Wharton - computer science student",
		"frontend developer",
		"software engineer",
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
