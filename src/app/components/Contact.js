"use client";

import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RiArticleLine, RiArticleFill } from "react-icons/ri";

function Contact() {
	const router = useRouter();

	function linkedIn() {
		router.push(`https://www.linkedin.com/in/imran-mohiuddin-955b85289/`);
	}

	function githubLink() {
		router.push(`https://github.com/imrn16/`);
	}

	function resumeLink() {
		router.push(`/documents/Resume.pdf`)
	}

	return (
		<div className="flex flex-row">
			{/* <div className="flex m-2 items-center bg-slate-900 opacity-50 hover:bg-opacity-100 rounded-full">
				<Image
					className="rounded-full "
					src={"/images/profile.jpg"}
					width={"25"}
					height={"25"}
				/>
			</div> */}

			<BsGithub
				className="flex m-2 hover:opacity-60 active:opacity-80"
				size={`25`}
				opacity={`0.3`}
				onClick={() => githubLink()}
			/>
			<IoLogoLinkedin
				className="flex m-2 hover:opacity-60 active:opacity-80"
				size={`25`}
				opacity={"0.3"}
				onClick={() => linkedIn()}
			/>
			<RiArticleFill 
				className="flex m-2 hover:opacity-60 active:opacity-80"
				size={`25`}
				opacity={"0.3"}
				onClick={() => resumeLink()}/>

		</div>
	);
}

export default Contact;
