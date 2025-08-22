"use client";
import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef(null);
	const hasAnimatedRef = useRef(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimatedRef.current) {
					setIsVisible(true);
					hasAnimatedRef.current = true;
				}
			},
			{
				threshold,
				rootMargin: "0px 0px -50px 0px",
			}
		);

		const currentElement = elementRef.current;
		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [threshold]);

	return [elementRef, isVisible];
};
