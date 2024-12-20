"use client";

import {
	WelcomeSection,
	AboutSection,
	TechnologiesSection,
	ProjectsSection,
	GithubSection
} from "app/sections";

export default function Page() {
	return (
		<div>
			<div className="container-full">
				<WelcomeSection />
			</div>
			<div className="container-md">
				<AboutSection />
				<ProjectsSection />
				<TechnologiesSection />
				<GithubSection />
			</div>
		</div>
	);
}
