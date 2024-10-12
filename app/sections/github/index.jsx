import { useEffect, useState, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import Github from "./github";

export function GithubSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<LazyMotion features={domAnimation}>
			<section id="github" className="section">
				<HeadingDivider title="Github" />
				<p
					ref={textRef}
					tabIndex="0"
					className="my-5 text-2xl"
					style={{
						transform: hasMounted && isTextInView ? "none" : "translateX(-200px)",
						opacity: hasMounted && isTextInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					My recent contributions:
				</p>
				<div
					ref={stackRef}
					tabIndex="0"
					className="my-5 text-2xl"
					style={{
						transform: hasMounted && isStackInView ? "none" : "translateY(250px)",
						opacity: hasMounted && isStackInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					{hasMounted && <Github />}
				</div>
			</section>
		</LazyMotion>
	);
}
