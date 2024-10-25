import { Suspense, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import { Loader } from "components";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

import "react-image-gallery/styles/css/image-gallery.css";

export function ProjectItem({ project, index }) {
	const { description, images, liveUrl, repoUrl, stack, title } = project;
	const cardRef = useRef(null);
	const galleryRef = useRef(null); // Ref for ImageGallery
	const isInView = useInView(cardRef, { once: true });
	const [isFullscreen, setIsFullscreen] = useState(false); // Fullscreen state

	const galleryImages = images.map((img) => ({
		original: img,
		loading: "lazy"
	}));

	// Function to handle closing fullscreen
	const handleCloseFullscreen = () => {
		if (galleryRef.current) {
			galleryRef.current.fullScreen(); // Exit fullscreen
			setIsFullscreen(false); // Update state
		}
	};

	return (
		<article
			ref={cardRef}
			className="flex flex-col rounded-lg shadow-md overflow-hidden bg-card-light dark:bg-card-dark"
			style={{
				transform: isInView
					? "none"
					: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
				opacity: isInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 25 * index}ms`
			}}
		>
			<figure>
				<div className="aspect-[12/9.2] w-full h-full">
					<Suspense fallback={<Loader />}>
						<ImageGallery
							ref={galleryRef}
							items={galleryImages}
							showPlayButton={false}
							showThumbnails={false}
							useBrowserFullscreen={false}
							showIndex
							lazyload
							additionalClass="gallery-item"
							onScreenChange={(isFullScreen) => setIsFullscreen(isFullScreen)} // Detect fullscreen mode
						/>
					</Suspense>
				</div>

				{/* Close button for fullscreen mode */}
				{isFullscreen && (
					<button
						className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full z-50"
						onClick={handleCloseFullscreen}
					>
						X
					</button>
				)}
			</figure>

			<div className="flex-[2] px-4 py-6 text-center flex flex-col gap-10">
				<header className="flex-1 flex items-center justify-start flex-col gap-3">
					<h3 tabIndex="0" className="text-2xl font-bold">
						{title}
					</h3>
					<p tabIndex="0" className="leading-7 font-light">
						{description}
					</p>
				</header>

				<footer className="flex flex-col gap-10">
					{!!stack.length && (
						<div className="flex-center flex-wrap gap-3">
							{stack.map((tag) => (
								<span
									key={tag}
									tabIndex="0"
									className="px-2 text-sm leading-normal rounded bg-badge-light/50 dark:bg-badge-dark"
								>
									{tag}
								</span>
							))}
						</div>
					)}

					<div className="flex-center gap-10">
						{repoUrl && (
							<Link
								href={repoUrl}
								target="_blank"
								className="icon-link-btn"
								title="Go to Github repository"
							>
								<VscSourceControl />
								<span>Source</span>
							</Link>
						)}
						{liveUrl && (
							<Link
								href={liveUrl}
								target="_blank"
								className="icon-link-btn"
								title="Go to live address"
							>
								<FiExternalLink />
								<span>Demo</span>
							</Link>
						)}
					</div>
				</footer>
			</div>
		</article>
	);
}
