"use client";
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Certifications() {
	const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

	let certArray = [
		{
			name: `Codecademy`,
			type: `Full Stack Developer`,
			description: `During my certification, I mastered front-end skills like HTML, CSS, and JavaScript, and advanced to React, Node.js, and Express. I learned database management with SQL and MongoDB, and used Git for version control. Hands-on projects solidified my ability to build dynamic, full-stack applications.`,
			new_tech: ["HTML", "CSS", "Javascript", "React", "Git"],
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
					CERTIFICATIONS
				</span>
				{certArray.map((indiv, index) => {
					return (
						<div
							key={index}
							className={`flex flex-col md:p-4 certification-item-hover ${isSectionVisible ? "animate-fade-in-slide-up" : "opacity-0"}`}
							style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
							<div className={`flex flex-row ${isSectionVisible ? "animate-fade-in-slide-left animate-delay-300" : "opacity-0"}`}>
								<span className={`flex flex-row font-semibold certification-title`}>{indiv.name}</span>
								<span className={`mx-3`}>·</span>
								<span className={`flex flex-row opacity-60 certification-type`}>{indiv.type}</span>
							</div>
							<span
								className={`flex flex-col w-full text-md mt-2 text-slate-200 opacity-60 text-base certification-description ${
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

export default Certifications;
