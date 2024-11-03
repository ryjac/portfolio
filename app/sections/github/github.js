import GitHubCalendar from "react-github-calendar";

function Github() {
	const minimalTheme = {
		light: ["hsl(0, 0%, 92%)", "blue"],
		dark: ["hsl(0, 0%, 92%)", "blue"]
		// for `dark` the default theme will be used
	};

	return (
		<div className="flex justify-center pb-2.5 flex-col items-center">
			<div
				style={{
					width: "100%",
					overflow: "hidden",
					display: "flex",
					justifyContent: "center"
				}}
			>
				<GitHubCalendar
					username="ryjac"
					blockSize={15}
					blockMargin={5}
					fontSize={16}
					theme={minimalTheme}
				/>
			</div>
		</div>
	);
}

export default Github;
