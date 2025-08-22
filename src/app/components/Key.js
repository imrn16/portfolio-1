"use client";
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Key() {
	const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

	return (
		<div
			ref={sectionRef}
			className="flex flex-col justify-left mb-24">
			<div
				className={`flex flex-row w-96 justify-center items-center align-center mx-auto mt-10 ${
					isSectionVisible ? "animate-fade-in-scale animate-delay-100" : "opacity-0"
				}`}>
				<div className="flex flex-row h-8 rounded-full bg-slate-800 text-xs justify-center items-center align-center opacity-80 key-legend-hover">
					<div
						className={`flex flex-row text-xs opacity-40 mx-4 justify-center items-center align-center ${
							isSectionVisible ? "animate-fade-in-slide-left animate-delay-200" : "opacity-0"
						}`}>
						KEY
					</div>
					<div
						className={`flex flex-row bg-teal-900 rounded-full p-1 px-3 text-teal-200 mr-2 bg-opacity-50 skill-tag-hover justify-center items-center align-center opacity-100 ${
							isSectionVisible ? "animate-fade-in-scale animate-delay-300" : "opacity-0"
						}`}>
						Primary
					</div>
					<div
						className={`flex flex-row bg-cyan-950 rounded-full p-1 px-3 text-cyan-200 mr-2 bg-opacity-50 skill-tag-hover opacity-100 ${
							isSectionVisible ? "animate-fade-in-scale animate-delay-400" : "opacity-0"
						}`}>
						Secondary
					</div>
				</div>
			</div>
		</div>
	);
}

export default Key;
