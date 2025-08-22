"use client";
import { useState, useEffect, useCallback } from "react";

export const useMobileHeader = () => {
	const [isHeaderVisible, setIsHeaderVisible] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	// Check if we're on a large screen
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 1020);
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Set initial value

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Handle scroll detection for mobile header
	useEffect(() => {
		if (isLargeScreen) return; // Only apply on mobile

		const handleScroll = () => {
			const titleElement = document.querySelector("[data-title-section]");
			if (titleElement) {
				const rect = titleElement.getBoundingClientRect();
				// Show header when title is above the viewport
				setIsHeaderVisible(rect.bottom < 0);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check initial state

		return () => window.removeEventListener("scroll", handleScroll);
	}, [isLargeScreen]);

	// Smooth scroll to section
	const scrollToSection = useCallback((sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const headerHeight = 64; // Height of the mobile header (unchanged since collapsed height is still 64px)
			const elementPosition = section.offsetTop - headerHeight;

			window.scrollTo({
				top: elementPosition,
				behavior: "smooth",
			});
		}
	}, []);

	return {
		isHeaderVisible,
		isLargeScreen,
		scrollToSection,
	};
};
