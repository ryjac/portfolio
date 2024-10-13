"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useTheme } from "next-themes";

const TimeLineData = [
	{
		year: 2010,
		text: "With a love for computers and technology, started self-learning C++, HTML, SQL, and PHP."
	},
	{
		year: 2018,
		text: "Developed Wordpress sites. Started learning Javascript, React, and Node.js.  Went back to college."
	},
	{
		year: 2021,
		text: "Learned more modern languages and frameworks; Java, Python, Next.js, etc. Started learning AWS."
	},
	{
		year: 2023,
		text: "Started position as a nonprofit COO/CTO, began initiative of modernization and tech-first solutions."
	},
	{
		year: 2024,
		text: "Graduated with a Bachelors of Science in Computer Science.  Ready to transition careers into the tech."
	}
];

export function TimeLine() {
	const [, setActiveItem] = useState(0);
	const carouselRef = useRef(null);
	// const animRef = useRef(null);
	const isInView = useInView(carouselRef, { once: true });
	const { theme, systemTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	const scroll = (node, right) => {
		return node.scrollTo({ right, behavior: "smooth" });
	};

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollRight = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollRight);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<LazyMotion features={domAnimation}>
			<ul
				ref={carouselRef}
				onScroll={handleScroll}
				className="flex flex-row flex-nowrap gap-5 justify-between overflow-x-auto snap-x cursor-pointer hide-scroll-bar"
			>
				<>
					{TimeLineData.map((item, index) => {
						return (
							<li
								id={`carousel__item-${index}`}
								key={index}
								className="flex flex-col gap-3 snap-start w-[calc((100%/2)-30px)] sm:w-1/3 md:w-1/6"
								onClick={(e) => handleClick(e, index)}
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
								<h3
									tabIndex="0"
									aria-label={"What did I do in " + item.year}
									className="flex items-center gap-4 text-2xl font-bold"
								>
									<svg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										xmlns="http://www.w3.org/2000/svg"
										fill={currentTheme === "dark" ? "#fff" : "#232332"}
									>
										<path
											transform="rotate(180, 104, 3)"
											fillRule="evenodd"
											clipRule="evenodd"
											d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
											fillOpacity="0.5"
										/>
									</svg>
									{`${item.year}`}
								</h3>
								<p className="tracking-wide" tabIndex="0">
									{item.text}
								</p>
							</li>
						);
					})}
				</>
			</ul>
		</LazyMotion>
	);
}
