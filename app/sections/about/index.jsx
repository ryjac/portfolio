"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { NewTimeline } from "./NewTimeline";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About Me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							I’m an <b>experienced full-stack engineer</b> with a strong foundation in{" "}
							<b>Python, React, and AWS</b>, passionate about solving complex technical challenges
							and driving innovation. I specialize in developing scalable applications, implementing{" "}
							<b>cloud infrastructure</b>, and automating workflows to optimize operational
							efficiency.
						</p>
						<p className="my-3.5">
							I recently earned a <b>B.S. in Computer Science</b>, where I honed my skills in{" "}
							<b>algorithms, data structures</b>, and <b>software engineering principles</b> while
							working full-time—demonstrating adaptability, problem-solving skills, and a commitment
							to excellence.
						</p>
						<p className="my-3.5">
							In my current role as <b>Lead Software Engineer</b>, I have architected and deployed{" "}
							<b>AWS-based infrastructures</b>, designed and implemented <b>CI/CD pipelines</b>, and
							developed user-friendly applications with <b>React</b> and <b>Next.js frontends</b>{" "}
							and <b>Python backends</b>. I focus on <b>full-stack engineering</b> and{" "}
							<b>cloud solutions</b> and possess a diverse skill set spanning multiple{" "}
							<b>languages, frameworks,</b> and <b>tools</b>. I excel at quickly learning new
							technologies, adapting to any situation, and consistently delivering impactful
							results.
						</p>

						<p className="my-3.5">
							Based in <b>Pasadena, CA</b>, I am fully authorized to work for any employer in the
							US. Let&apos;s connect to discuss how I can bring value to your team.
						</p>
					</div>
				</div>
				<NewTimeline />
			</section>
		</LazyMotion>
	);
}
