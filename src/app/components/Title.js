"use client";
import React, { useEffect, useState } from "react";
import "/src/app/globals.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Title() {
	const router = useRouter();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Trigger animation on component mount
		setIsVisible(true);
	}, []);

	function picClick() {
		router.push(`/documents/Resume.pdf`);
	}

	return (
		<div
			className="flex h-auto"
			data-title-section>
			<div className="w-96 h-48 justify-center items-">
				<button
					className={`flex flex-row items- justify-left text-4xl tracking-tight font-bold pr-2 opacity-75 md:text-5xl title-hover ${
						isVisible ? "animate-fade-in-slide-down" : "opacity-0"
					}`}
					style={{ animationDelay: "0.1s" }}>
					<h1> Imran Mohiuddin</h1>
				</button>
				<div className="flex flex-row align-center">
					<button
						className={`flex my-2 items- bg-slate-900 hover:opacity-100 opacity-60 rounded-full profile-hover ${
							isVisible ? "animate-fade-in-scale" : "opacity-0"
						}`}
						style={{ animationDelay: "0.3s" }}
						onClick={() => picClick()}>
						<Image
							className="rounded-full"
							src={"/images/profile.jpg"}
							alt="View Resume"
							width={"32"}
							height={"32"}
							loading="lazy"
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
						/>
					</button>
					<div
						className={`ml-4 text-2xl opacity-80 mt-2 mb-1 text-hover ${isVisible ? "animate-fade-in-slide-left" : "opacity-0"}`}
						style={{ animationDelay: "0.4s" }}>
						Full Stack Developer
					</div>
				</div>

				<div
					className={`mt-4 opacity-50 text-lg w-80 title-description-hover ${isVisible ? "animate-fade-in-slide-up" : "opacity-0"}`}
					style={{ animationDelay: "0.6s" }}>
					{`Building beautiful digital experiences with intuitive user interfaces.`}
				</div>
			</div>
		</div>
	);
}

export default Title;

{
	/* <div className="flex flex-col w-96 h-48  justify-center items-center justify-center align-center">
<button className="flex flex-row  items-center justify-center align-center text-4xl tracking-tight font-bold pr-2 opacity-75 md:text-5xl ">
	<h1> Imran Mohiuddin</h1>
</button>
<div
	className="flex bg-teal-900 rounded-full p-1 px-4 text-teal-200 mt-2 mr-2 bg-opacity-50 hover:bg-opacity-100 w-48 items-center justify-center align-center"
	disabled>{`Full Stack Developer`}</div>{" "}
</div> */
}
