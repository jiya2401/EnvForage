"use client";

import { Moon, Sun } from "lucide-react"; 
import { useTheme } from "../app/providers"; 

export function ThemeToggle() {
	const { theme, toggleTheme, mounted } = useTheme();

	// Prevent hydration mismatch by not rendering until mounted
	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={toggleTheme}
			className="theme-toggle-navbar"
			title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
		>
			{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
		</button>
	);
}