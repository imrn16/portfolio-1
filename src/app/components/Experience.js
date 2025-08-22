"use client";
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Experiences() {
	const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

	let certArray = [
		{
			name: `SRS Web Solutions`,
			type: `Software Engineer`,
			description: `I contributed to core platform development, enhancing digital workflows across web and mobile. I built and maintained cross-platform codebases using React, React Native, Node.js and Express.js, developing reusable UI components and custom business logic to speed up feature delivery. Working closely with product and design teams, I shipped performant, accessible features and built mobile-specific functionality for secure, offline-ready workflows. I also developed backend services and middleware to support form handling and third-party API integrations.`,
			new_tech: ["Javascript", "Typescript", "React", "React Native", "Git"],
			new_tech2: ["Node.js", "Express.js", "SQL", "MongoDB"],
		},
	];

	return (
		<>
			<div
				ref={sectionRef}
				className="flex flex-col mt-20 mb-32 text-lg">
				<span
					className={`flex flex-col text-xs opacity-40 mb-4 md:ml-4 ${
						isSectionVisible ? "animate-fade-in-slide-down animate-delay-100" : "opacity-0"
					}`}>
					EXPERIENCE
				</span>
				{certArray.map((indiv, index) => {
					return (
						<div
							key={index}
							className={`flex flex-col md:p-4 experience-item-hover ${isSectionVisible ? "animate-fade-in-slide-up" : "opacity-0"}`}
							style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
							<div className={`flex flex-row ${isSectionVisible ? "animate-fade-in-slide-left animate-delay-300" : "opacity-0"}`}>
								<span className={`flex flex-row font-semibold experience-title`}>{indiv.name}</span>
								<span className={`mx-3`}>·</span>
								<span className={`flex flex-row opacity-60 experience-role`}>{indiv.type}</span>
							</div>
							<span
								className={`flex flex-col w-full text-md mt-2 text-slate-400 text-base experience-description ${
									isSectionVisible ? "animate-fade-in-slide-up animate-delay-400" : "opacity-0"
								}`}>
								{indiv.description}
							</span>

							<div
								className={`mt-2 flex flex-col h-auto rounded-3xl text-xs opacity-80 ${
									isSectionVisible ? "animate-fade-in-scale animate-delay-500" : "opacity-0"
								}`}>
								<div className={"flex flex-row"}>
									<div className="flex flex-row text-xs opacity-40 mt-2 items-center align-center w-20 ">FRONT END</div>

									<div className="flex flex-row justify-center items-center align-center mr-auto ">
										<div className="flex flex-row text-xs flex-wrap p-1">
											{indiv.new_tech.map((ntech, techIndex) => {
												return (
													<div
														key={techIndex}
														className={`bg-teal-900 rounded-full p-1 px-4 text-teal-200 mt-2 mr-2 bg-opacity-60 skill-tag-hover ${
															isSectionVisible ? "animate-fade-in-scale" : "opacity-0"
														}`}
														style={{ animationDelay: `${0.6 + techIndex * 0.05}s` }}
														disabled>{`${ntech}`}</div>
												);
											})}
										</div>
									</div>
								</div>

								<div className={"flex flex-row"}>
									<div className="flex flex-row text-xs opacity-40 mt-2 items-center align-center w-20 ">BACK END</div>

									<div className="flex flex-row justify-center items-center align-center mr-auto ">
										<div className="flex flex-row text-xs flex-wrap p-1">
											{indiv.new_tech2.map((ntech, techIndex) => {
												return (
													<div
														key={techIndex}
														className={`bg-teal-900 rounded-full p-1 px-4 text-teal-200 mt-2 mr-2 bg-opacity-50 skill-tag-hover ${
															isSectionVisible ? "animate-fade-in-scale" : "opacity-0"
														}`}
														style={{ animationDelay: `${0.8 + techIndex * 0.05}s` }}
														disabled>{`${ntech}`}</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Experiences;
