import React from "react";
import "/src/app/globals.css";

function About() {

	const aboutMe = `I’ve always had a fascination with technology—how it works, how it connects us, and how it can improve lives. In a previous chapter of my life, I earned a Master’s in Medical Sciences and worked in the healthcare industry. While using electronic medical records (EMR) software, I often found myself imagining how these tools could be more intuitive and efficient. That curiosity and drive for improvement eventually led me to pursue a new path.

In early 2024, I transitioned into software engineering, and for the past several months, I’ve been working professionally in the industry. I dove deep into React, JavaScript, and modern web frameworks, and I’m now focused on building applications that are not only functional but also a joy to use. I’m passionate about creating seamless, user-friendly experiences—from crafting clean front-end interfaces to designing solid back-end logic.

When I’m not coding, you’ll probably find me catching the latest mini-series, playing my guitar, or spending quality time with family.`

	return (
		<>
		
		<div className="flex flex-col mt-20 mb-32 md:ml-4 text-lg">
		<span className=" flex flex-col text-xs opacity-40 mb-4 md:hidden">ABOUT</span>
			<span className="flex flex-col opacity-60  whitespace-pre-line leading-relaxed ">{`${aboutMe}`}</span>
			</div>
			
		</>
	);
}

export default About;
