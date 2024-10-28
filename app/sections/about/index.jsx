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
				<HeadingDivider title="About me" />
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
							Throughout my career, I have served as both{" "}
							<b>Chief Operating & Technology Officer</b> in the nonprofit sector and as a{" "}
							<b>Senior Software Engineer</b>, spearheading initiatives that streamlined operations
							and empowered teams through accessible, user-centered solutions. With a strong
							foundation rooted in <b>system design</b> and <b>modern tech stacks</b>, my experience
							in development, combined with active involvement in corporate and open-source
							communities, showcases my ability to <b>innovate</b> and <b>lead</b> within
							technology-driven environments.
						</p>
						<p className="my-3.5">
							My technical expertise spans <b>full-stack development</b>, encompassing advanced
							skills in <b>Javascript (React, Next.js), Node.js, Python, C++, Java, and PHP</b>, as
							well as strong proficiency in <b>MongoDB, PostgreSQL</b>, and{" "}
							<b>cloud technologies</b>. I bring a practical understanding of{" "}
							<b>AWS cloud infrastructure</b> and <b>real-time systems</b>, as well as{" "}
							<b>microservices architecture</b> and <b>containerization (Docker)</b>, and have
							experience with <b>continuous integration and continuous deployment (CI/CD)</b>{" "}
							pipelines. I am passionate about leveraging technology to overcome complex challenges,
							enhance user experiences, and achieve impactful business outcomes.
						</p>
						<p className="my-3.5">
							I hold a <b>B.S. in Computer Science </b>
							from California State University, Northridge, where I honed my skills in{" "}
							<b>algorithms, data structures</b>, and <b>software engineering</b> principles. As a
							specialist in software development, I focus on full-stack engineering and cloud
							solutions, with the ability to adapt to just about any situation presented to me.
						</p>
						<p className="my-3.5">
							Based in <b>Pasadena, CA</b>, I am a California native fully authorized to work for
							any employer in the US. Let&apos;s connect to discuss how I can bring value to your
							team.
						</p>
					</div>
				</div>
				<NewTimeline />
			</section>
		</LazyMotion>
	);
}
