import GitHubCalendar from "react-github-calendar";

function Github() {
	return (
		<div className="flex justify-center pb-2.5 flex-col items-center">
			<GitHubCalendar
				username="dankewaffle"
				blockSize={15}
				blockMargin={5}
				color="blue"
				fontSize={16}
			/>
		</div>
	);
}

export default Github;
