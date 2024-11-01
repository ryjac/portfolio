const author = "Ryan Jacobs";
const description =
	"Passionate software developer from Pasadena, CA who loves to use engineering, critical thinking, and problem solving to create cool things with technology.";
const url = "https://www.ryanjacobs.io";
export const AppMetadata = {
	metadataBase: new URL("https://www.ryanjacobs.io"),
	title: {
		default: `${author} | Portfolio`,
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
				url: "https://cdn.sanity.io/images/brpry9zq/production/522a803d1a6034f133ec3d5394bef8d49d6fc9c9-1729x1069.png",
				width: 800,
				height: 600,
				alt: "Ryan Jacobs | Portfolio"
			},
			{
				url: "https://cdn.sanity.io/images/brpry9zq/production/522a803d1a6034f133ec3d5394bef8d49d6fc9c9-1729x1069.png",
				width: 1800,
				height: 1600,
				alt: "Ryan Jacobs | Portfolio"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
