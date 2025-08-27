"use client";
import { useEffect, useRef, useState } from "react";

const MouseGlow = () => {
	const glowRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		// Check on mount
		checkIfMobile();

		// Check on resize
		window.addEventListener("resize", checkIfMobile);

		// Only add mouse move listener for desktop
		if (!isMobile) {
			const handleMouseMove = (event) => {
				const { clientX, clientY } = event;
				if (glowRef.current) {
					glowRef.current.style.left = `${clientX}px`;
					glowRef.current.style.top = `${clientY}px`;
				}
			};

			window.addEventListener("mousemove", handleMouseMove);

			return () => {
				window.removeEventListener("mousemove", handleMouseMove);
				window.removeEventListener("resize", checkIfMobile);
			};
		}

		return () => {
			window.removeEventListener("resize", checkIfMobile);
		};
	}, [isMobile]);

	return (
		<div
			ref={glowRef}
			className={`fixed w-96 h-96 bg-blue-800 rounded-full opacity-80 pointer-events-none transform ${
				isMobile ? "left-1/2 top-0 -translate-x-1/2" : "-translate-x-1/2 -translate-y-1/2"
			}`}
			style={{ width: `24rem`, height: `24rem`, filter: "blur(200px)" }}
		/>
	);
};

export default MouseGlow;
