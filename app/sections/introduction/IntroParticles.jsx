import { useCallback } from "react";
import { useTheme } from "next-themes";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export function ParticlesHeader() {
	const { theme, systemTheme } = useTheme();
	const colorMode = theme === "system" ? systemTheme : theme;
	const darkThemeColor = colorMode === "dark";

	const particlesInit = useCallback(async (engine) => {
		// console.log(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100vw",
				overflow: "hidden"
			}}
			options={{
				fullScreen: false,
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: "push"
						},
						onHover: {
							enable: true,
							mode: "repulse"
						},
						resize: true
					},
					modes: {
						push: {
							quantity: 4
						},
						repulse: {
							distance: 150,
							duration: 0.4
						}
					}
				},
				particles: {
					color: {
						value: darkThemeColor ? "#fff" : "#000"
					},
					links: {
						color: darkThemeColor ? "#fff" : "#000",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce"
						},
						random: false,
						speed: 6,
						straight: false
					},
					number: {
						density: {
							enable: true,
							area: 800
						},
						value: 80
					},
					opacity: {
						value: 0.5
					},
					shape: {
						type: "circle"
					},
					size: {
						value: { min: 1, max: 5 }
					}
				},
				detectRetina: true
			}}
		/>
	);
}
