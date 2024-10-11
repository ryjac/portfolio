"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ConnectMedia, ScrollTop } from "components";
import { useMediaQuery } from "../utils";
import { initial, animate, exit, transition } from "utils/motions";

export function AppFooter() {
	const footerRef = useRef(null);
	const year = new Date().getFullYear();
	const isMobile = useMediaQuery();

	return (
		<LazyMotion features={domAnimation}>
			<m.footer
				ref={footerRef}
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
				className="container-md py-10 mt-5 relative before:absolute before:top-0 before:left-2 before:w-[calc(100%-16px)] before:h-[1px] before:bg-brand-dark before:dark:bg-gray-100"
			>
				<div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
					<p className="font-light">Copyright &copy; {year} Natalie Wharton</p>
					{isMobile ? (
						<ScrollTop />
					) : (
						<div className="absolute left-1/2 transform -translateX-50%">
							<ScrollTop />
						</div>
					)}
					<ConnectMedia />
				</div>
			</m.footer>
		</LazyMotion>
	);
}
