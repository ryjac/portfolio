"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { NewTimeline } from "./NewTimeLine";

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
							With a robust foundation in <b>AWS cloud infrastructure</b> and{" "}
							<b>real-time systems</b>, my career spans roles from an IT Solutions Specialist to
							Nonprofit Chief Operating/Technology Officer to a Senior Software Engineer. In the
							nonprofit space, I spearheaded initiatives to enhance employee efficiency through
							automation and fostered an inclusive environment with accessible, user-centric
							solutions. My expertise in <b>full-stack development</b>, combined with a proactive
							approach in open-source communities, highlights my capability to innovate and lead in
							tech-driven environments.
						</p>
						<p className="my-3.5">
							My technical toolkit is extensive, encompassing advanced skills in{" "}
							<b>Javascript (React.js, Next.js), Node.js, C++, Java, and PHP</b>, alongside a strong
							command of <b>PostgreSQL</b> and cloud technologies. This technical prowess is
							complemented by a practical understanding of <b>microservices architecture</b> and{" "}
							<b>containerization (Docker, Kubernetes)</b>, with a robust proficiency in{" "}
							<b>continuous integration and continuous deployment (CI/CD) processes</b>. I am
							passionate about leveraging technology to solve complex problems, enhance user
							experiences, and drive business outcomes.
						</p>
						<p className="my-3.5">
							I earned my <b>B.S. in Computer Science </b>
							from California State University, Northridge, leveraging a strong foundation in
							algorithms, data structures, and software engineering principles. As a specialist in
							software development, I focus on cloud solutions and full-stack engineering, with
							extensive experience in Node.js, React, and AWS.
						</p>
						<p className="my-3.5">
							Based in Pasadena, CA, I am fully authorized to work for any employer in the US. Let's
							connect to discuss how I can contribute to your team and projects.
						</p>
					</div>
				</div>
				<NewTimeline />
			</section>
		</LazyMotion>
	);
}
