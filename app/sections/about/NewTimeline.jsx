"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";

const TimelineData = [
	{
		year: 2010,
		text: "Started self-teaching foundational programming concepts, learning languages like Visual Basic, C++, HTML, SQL, and PHP."
	},
	{
		year: 2014,
		text: "Developed WordPress sites and built skills in scripting, automation, and website optimization."
	},
	{
		year: 2018,
		text: "Began mastering mordern JavaScript frameworks (React, Node.js) and returned to college for Computer Science."
	},
	{
		year: 2020,
		text: "Expanded skills to include Python, Flask, and MongoDB, while contributing to backend development for internal applications."
	},
	{
		year: 2021,
		text: "Deepened knowledge in Java, Next.js, and AWS, with a focus on cloud infrastructure."
	},
	{
		year: 2023,
		text: "Promoted to Lead Software Engineer, architecting and deploying AWS-based infrastructures, automating workflows, and leading the development of modern applications."
	},
	{
		year: 2024,
		text: "Earned a B.S. in Computer Science. Actively seeking opportunities to make a larger impact in tech-focused roles."
	}
];

export function NewTimeline() {
	const timelineRef = useRef(null);
	const isInView = useInView(timelineRef, { once: true });
	const { theme, systemTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<LazyMotion features={domAnimation}>
			<ol ref={timelineRef} className="items-center sm:flex">
				<>
					{TimelineData.map((item, index) => {
						return (
							<li
								key={index}
								className="relative mb-6 sm:mb-0"
								style={{
									transform: isInView
										? "none"
										: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
									opacity: isInView ? 1 : 0,
									transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1) ${
										index === 0 ? 0.2 : 0.6 * index
									}s`
								}}
							>
								<div className="flex items-center">
									<div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
										<svg
											className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill={currentTheme === "dark" ? "#fff" : "#232332"}
											viewBox="0 0 20 20"
										>
											<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
										</svg>
									</div>
									<div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
								</div>
								<div className="mt-3 sm:pe-8">
									<h3 className="text-lg font-bold">{`${item.year}`}</h3>

									<p className="text-base font-normal ">{item.text} </p>
								</div>
							</li>
						);
					})}
				</>
			</ol>
		</LazyMotion>
	);
}
