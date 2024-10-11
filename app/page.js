"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";

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
			</div>
		</div>
	);
}
