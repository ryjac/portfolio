"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { ParticlesHeader } from "./IntroParticles";
import { useScrollTo } from "hooks";

export function WelcomeSection() {
	const ref = useRef(null);
	const introRef = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { scrollToEl } = useScrollTo();

	let [count, setCount] = useState(0);
	const [text] = useState([
		"Software Developer",
		"Full Stack Engineer",
		"Open Source Contributor",
		"Cloud Engineer",
		"DevOps Enthusiast",
		"Problem Solver",
		"Technology Advocate",
		"Systems Architect",
		"User Experience Designer"
	]);

	const onClick = (e) => scrollToEl(e);

	useEffect(() => {
		let interval = setInterval(() => {
			setCount((prevCount) => (prevCount + 1) % text.length); // Cycles through all elements
		}, 2000);

		return () => clearInterval(interval);
	}, [text.length]);

	return (
		<LazyMotion features={domAnimation}>
			<section id="intro" className="section relative" ref={introRef}>
				<ParticlesHeader className="z-0" />
				<div className="container-md grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center z-10">
					<div className="py-5 md:py-10 z-10">
						<h1
							tabIndex="0"
							ref={ref}
							className="text-3xl md:text-5xl xl:text-6xl font-bold"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<p>
								Hi, I&apos;m <mark>Ryan</mark>.
							</p>
							<p className="py-2 md:py-4">
								A <mark>passionate</mark> and <mark>experienced</mark> software developer.
							</p>
						</h1>

						<div className="mt-3 relative flex flex-col overflow-hidden">
							<p
								ref={ref}
								className="text-[17px] md:text-2xl transform-none opacity-100"
								style={{
									transform: isInView ? "none" : "translateX(-200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								}}
							>
								<br />
								<span
									className="absolute flex flex-col transition-all duration-500 ease-in-expo"
									style={{
										top: `-${count * 100}%` // Calculate position based on count
									}}
								>
									{text.map((element) => (
										<TextElement key={element} element={element} />
									))}
								</span>
							</p>
						</div>

						<p
							tabIndex="0"
							ref={ref}
							className="mt-3 mb-10 text-gray-500 text-xl"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							Stick around to see some of my work.
						</p>
						<div
							ref={ref}
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<Link
								href="#projects"
								onClick={onClick}
								tabIndex="0"
								className="btn"
								aria-label="Latest projects"
							>
								See my latest projects
							</Link>
						</div>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}

function TextElement({ element }) {
	const words = <b>{element}</b>;
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<span
			tabIndex="0"
			ref={ref}
			className="text-[17px] md:text-2xl"
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
		>
			{words}
		</span>
	);
}
