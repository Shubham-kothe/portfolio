import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/useScrollTo";
import { useTheme } from "@/hooks/useTheme";

const navigation = [
	{ name: "Home", href: "hero" },
	{ name: "About", href: "about" },
	{ name: "Experience", href: "experience" },
	{ name: "Projects", href: "projects" },
	{ name: "Skills", href: "skills" },
	{ name: "Contact", href: "contact" },
];

export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { scrollToSection } = useScrollTo();
	const { theme, toggleTheme } = useTheme();
	const [active, setActive] = useState("hero");

	const handleNavClick = (href: string) => {
		scrollToSection(href);
		setMobileMenuOpen(false);
	};

	useEffect(() => {
		const handler = () => {
			const scrollY = window.scrollY + 160;
			for (const item of navigation) {
				const el = document.getElementById(item.href);
				if (!el) continue;
				if (
					scrollY >= el.offsetTop &&
					scrollY < el.offsetTop + el.offsetHeight
				) {
					setActive(item.href);
					break;
				}
			}
		};
		window.addEventListener("scroll", handler, { passive: true });
		handler();
		return () => window.removeEventListener("scroll", handler);
	}, []);

	return (
		<header className="header-floating">
			<nav className="nav-pill">
				<button
					onClick={() => handleNavClick("hero")}
					className="brand"
				>
					<span className="hidden sm:inline">Shubham Kothe</span>
					<span className="sm:hidden">SK</span>
				</button>
				{navigation.map((item) => (
					<button
						key={item.href}
						onClick={() => handleNavClick(item.href)}
						aria-current={active === item.href}
						className="nav-link"
					>
						{item.name}
					</button>
				))}
				<div className="nav-actions">
					<Button
						variant="ghost"
						size="icon"
						onClick={toggleTheme}
						className="rounded-full h-8 w-8"
					>
						{theme === "light" ? (
							<Moon className="h-4 w-4" />
						) : (
							<Sun className="h-4 w-4" />
						)}
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="rounded-full h-8 w-8 md:hidden"
						aria-label="Toggle navigation"
					>
						{mobileMenuOpen ? (
							<X className="h-4 w-4" />
						) : (
							<Menu className="h-4 w-4" />
						)}
					</Button>
				</div>
			</nav>
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -8, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -6, scale: 0.98 }}
						transition={{ duration: 0.25, ease: [0.4, 0.14, 0.3, 1] }}
						className="mobile-menu md:hidden"
					>
						{navigation.map((item) => (
							<button
								key={item.href}
								onClick={() => handleNavClick(item.href)}
								aria-current={active === item.href}
								className="nav-link w-full text-left"
							>
								{item.name}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};
