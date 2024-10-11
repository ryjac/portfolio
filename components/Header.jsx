"use client";

import { Logo, Menu, ConnectMedia, MobileMenu, ThemeSwitcher } from "components";
import { useMediaQuery } from "utils";

export function AppHeader() {
	const isMobile = useMediaQuery();

	return (
		<header className="pt-5 pb-5 sticky top-0 bg-inherit shadow-sm z-20">
			{isMobile ? (
				<div className="container-md">
					<div className="flex justify-between items-center gap-3">
						<Logo />
						<MobileMenu />
						<div className="flex items-center gap-5">
							<ThemeSwitcher />
						</div>
					</div>
				</div>
			) : (
				<div className="container-md grid grid-cols-3 items-center">
					<Logo />
					<Menu />
					<div className="flex items-center gap-5 justify-end">
						<ConnectMedia />
						<ThemeSwitcher />
					</div>
				</div>
			)}
		</header>
	);
}
