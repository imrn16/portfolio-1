"use client";
import React, { useState, useEffect } from "react";

const MobileHeader = ({ isVisible, onNavigate }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const navigationItems = [
		{ id: "about", label: "About" },
		{ id: "experience", label: "Experience" },
		{ id: "projects", label: "Projects" },
		{ id: "certifications", label: "Certifications" },
	];

	const handleHamburgerClick = () => {
		setIsExpanded(!isExpanded);
	};

	const handleNavigationClick = (sectionId) => {
		onNavigate(sectionId);
		setIsExpanded(false);
	};

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
			}`}>
			<div className={`backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50 transition-all duration-300 ease-in-out ${isExpanded ? "h-28" : "h-16"}`}>
				<div className="flex items-center justify-between px-6 h-16">
					<div className="flex items-center">
						<h1 className="text-xl font-bold text-white">Imran Mohiuddin</h1>
					</div>

					<button
						onClick={handleHamburgerClick}
						className="flex flex-col justify-center items-center w-8 h-8 space-y-1">
						<span className={`block w-6 h-0.5 bg-white shadow-sm transition-all duration-300 ${isExpanded ? "rotate-45 translate-y-1.5" : ""}`} />
						<span className={`block w-6 h-0.5 bg-white shadow-sm transition-all duration-300 ${isExpanded ? "opacity-0" : ""}`} />
						<span
							className={`block w-6 h-0.5 bg-white shadow-sm transition-all duration-300 ${
								isExpanded ? "-rotate-45 -translate-y-1.5" : ""
							}`}
						/>
					</button>
				</div>

				{/* Navigation Menu */}
				<div className={`px-6 transition-all duration-300 ease-in-out ${isExpanded ? "opacity-100 max-h-12" : "opacity-0 max-h-0 overflow-hidden"}`}>
					<div className="flex justify-center space-x-8 pb-2">
						{navigationItems.map((item) => (
							<button
								key={item.id}
								onClick={() => handleNavigationClick(item.id)}
								className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium">
								{item.label}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileHeader;
