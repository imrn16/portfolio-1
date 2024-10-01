import React from "react";
import "/src/app/globals.css";

function About() {

	const aboutMe = `In a previous life, I earned a Master’s in Medical Sciences and worked in the healthcare industry. But as much as I valued helping others, I found myself constantly frustrated by the limitations of the electronic medical records (EMR) software I used daily. I felt stifled, unable to express my creativity or have a meaningful impact on the tools I worked with. That frustration sparked a realization—I needed a career that allowed me to build, create, and innovate.

So, I made a leap into the world of web development, diving deep into React, JavaScript, and other modern frameworks. Now, I focus on building applications that are as functional as they are visually appealing, with a passion for creating intuitive, seamless user experiences. Whether it’s crafting front-end interfaces or working on back-end logic, I love being able to bring creative solutions to life.

When I’m not coding, you’ll find me watching the latest mini-series, playing my guitar, or enjoying time with family.`

	return (
		<>
		<div className="flex mt-20 mb-32 text-lg">
			<span className=" opacity-60  whitespace-pre-line leading-relaxed ">{`${aboutMe}`}</span>
			</div>
			
		</>
	);
}

export default About;
