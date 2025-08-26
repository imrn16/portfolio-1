"use client";
import React, { useState } from "react";
import Image from "next/image";
import "/src/app/globals.css";
import { FaLink } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import ProjectModal from "./ProjectModal";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Projects() {
	const backdropBlur = "bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-6 rounded-lg";
	const router = useRouter();
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

	// Helper function to generate image paths for a project
	const generateProjectImages = (projectFolder, imageCount, projectTitle, descriptions) => {
		const images = [];
		for (let i = 1; i <= imageCount; i++) {
			images.push({
				src: `/images/${projectFolder}/${i}.png`,
				alt: `${projectTitle} - Image ${i}`,
				description: descriptions[i - 1] || `Image ${i} of ${projectTitle}`,
			});
		}
		return images;
	};

	let projectArray = [
		// {   id: 1,
		//     title: "Example",
		//     description: "",
		//     link: "",
		//     old_tech: [],
		//     new_tech: [],
		//     image: ""
		// },

		// {
		// 	id: 1,
		// 	title: "To-Do List",
		// 	description:
		// 		"The beginning of my programming journey. Putting together the fundamentals of Javascript and React through a traditional to-do list project, incorporating state management.",
		// 	link: "https://github.com/imrn16/todo-test-3",
		// 	link_name: `Source Code`,
		// 	old_tech: [],
		// 	new_tech: ["HTML", "CSS", "Javascript", "React", "useState", "useEffect", "Visual Studio Code"],
		// 	image: "/images/todo.png",
		// },
		// {
		// 	id: 2,
		// 	title: "Investment Calculator",
		// 	description:
		// 		"Simple investing app that displays the payout per year when a user inputs an initial investment, expected return rate, annual investment, and the duration of investment (in years).",
		// 	link: "https://github.com/imrn16/investment-1",
		// 	link_name: `Source Code`,
		// 	old_tech: [],
		// 	new_tech: ["Array Arithmetic", "HTML", "CSS", "Javascript", "React", "useState", "useEffect"],
		// 	image: "/images/investments.png",
		// },

		// {
		// 	id: 3,
		// 	title: "Budgets",
		// 	description:
		// 		"Budgeting app that allows the user to add multiple budgets with multiple expenses within each budget. Controlled via modals. Implemented CRUD (Create, Read, Update, Delete) using React Contexts, multiple components with prop drilling, and local storage.",
		// 	link: "https://github.com/imrn16/budget-1",
		// 	link_name: `Source Code`,
		// 	old_tech: ["HTML", "CSS", "Javascript", "React", "useState", "useEffect"],
		// 	new_tech: ["Local Storage", "Modals", "useContext", "Multiple Components", "Nested Arrays"],
		// 	image: "/images/budgets.png",
		// },

		{
			id: 4,
			title: "Paper",
			description:
				"A full-stack social media site where users share content, engage in discussions, and vote on posts across a wide variety of communities. Featuring authentication, votes, commenting, and much more! All integrated alongside a back-end service.",
			link: "https://reddit-clone-2-dh7f.vercel.app/",
			link2: "https://github.com/imrn16/reddit-clone-2",
			link_name: `Click to Visit`,
			link_name2: `Source Code`,
			old_tech: ["React Hooks", "Tailwind CSS", "Supabase Auth", "React Icons", "Github", "Vercel", "Resend"],
			new_tech: ["React", "Next.js", "Javascript", "HTML", "CSS", "Supabase"],
			image: "/images/paper/1.png", // Keep for backward compatibility
			images: generateProjectImages("paper", 1, "Paper", [
				"Main application interface showcasing the core functionality",
				"Community browsing and post interaction features",
				"User profile and authentication system",
			]),
		},

		{
			id: 5,
			title: "Portfolio",
			description:
				"Designed with a minimalist approach, using clean, simple aesthetics to clearly showcase my growth from the start of my coding journey to where I am today.",
			link: "https://github.com/imrn16/portfolio-1",
			link_name: `Source Code`,
			old_tech: ["Tailwind CSS", "React Hooks", "React Icons", "Github", "Vercel", "Animations", "Visual Effects"],
			new_tech: ["Next.js", "React", "Javascript", "HTML", "CSS"],
			image: "/images/portfolio/1.png", // Keep for backward compatibility
			images: generateProjectImages("portfolio", 1, "Portfolio", [
				"Main portfolio homepage with clean, minimalist design",
				"Projects showcase with interactive modals and animations",
				"Responsive mobile design with smooth animations",
			]),
		},

		{
			id: 6,
			title: "Reddit & Youtube Playback Speed Control",
			description:
				"Two extensions for Google Chrome, specifically tailored to match the aesthetics of each individual website. Control the speed of videos on each site using a clean UI or keyboard shortcuts!",
			link: "https://github.com/imrn16/reddit-speed-controller",
			link2: "https://github.com/imrn16/youtube-speed-controller",
			link3: "https://chromewebstore.google.com/detail/reddit-playback-speed/gjilnomadofdjgeejihibknkiceonbbc",
			link4: "https://chromewebstore.google.com/detail/video-speed-controller/hppfmkpiaeipejkkfcolfnlpabhgbpco",
			link_name: `Source Code`,
			link_name2: `Source Code`,
			link_name3: `Chrome Web Store`,
			link_name4: `Chrome Web Store`,
			old_tech: ["Tailwind CSS", "React Hooks", "React Icons", "Github", "Google Chrome Dev Tools", "Script Injection"],
			new_tech: ["React", "Javascript", "HTML", "CSS", "Vite"],
			image: "/images/playback-control/1.png", // Keep for backward compatibility
			images: generateProjectImages("playback-control", 1, "Playback Control", [
				"Reddit video speed control extension interface",
				"YouTube video speed control extension interface",
				"Extension settings and customization options",
			]),
		},

		{
			id: 7,
			title: "Focus: Curated Photography Equipment",
			description:
				"An e-commerce website built via a MERN stack, Focus is a high-end photography equipment website. Full-featured, including product ratings and comments, product filtering, reviews, user accounts with order history and tracking, administrator permissions with product adding/editing interface and user management, payment processing (Paypal), and much more!",
			link: "https://focus-bice.vercel.app/",
			link2: "https://github.com/imrn16/MERN-Commerce",
			link_name: `Click to Visit`,
			link_name2: `Source Code`,
			old_tech: [
				"Tailwind CSS",
				"React Hooks",
				"React Icons",
				"Redux",
				"Mongoose",
				"MongoDB Atlas",
				"Render",
				"Postman",
				"JWT",
				"Toastify",
				"React Carousel",
				"React Slick",
				"React PayPal",
				"Nodemon",
				"Github",
				"Vercel",
				"Vite",
			],
			new_tech: ["MongoDB", "Express.js", "React", "Node.js", "Javascript", "HTML", "CSS"],
			image: "/images/focus/1.png", // Keep for backward compatibility
			images: generateProjectImages("focus", 1, "Focus", [
				"Main e-commerce homepage with product showcase",
				"Product detail page with reviews and ratings",
				"Shopping cart and checkout interface",
				"Administrator interface for product management",
			]),
		},
		{
			id: 8,
			title: "Youtube AI Summarizer",
			description:
				"A chrome extension that automatically extracts captions from Youtube videos to generate summaries that are broken down into categories with relevant timestamps. Users can even ask questions to the AI about the contents of the video!",
			link: "https://chromewebstore.google.com/detail/youtube-video-summarizer/faimjkbcgmkahpighpgagdpnokdeakdj?authuser=1&hl=en",
			link2: "https://github.com/imrn16/youtube-summarizer-extension",
			link_name: `Chrome Web Store`,
			link_name2: `Source Code`,
			old_tech: [],
			new_tech: ["Javascript", "HTML", "CSS", "Openrouter", "Vercel"],
			image: "/images/youtube-summarizer/1.png", // Keep for backward compatibility
			images: generateProjectImages("youtube-summarizer", 1, "YouTube AI Summarizer", [
				"Main extension interface with AI summary generation",
				"Generated summary display with key points and timestamps",
				"AI chat interface for asking questions about video content",
			]),
		},
		{
			id: 9,
			title: "Objects ML & AI",
			description:
				"Real-time object detection and classification using SSD Mobilenet and Gemini's image AI. The model is trained on a custom dataset for around 80 common objects, and then used to detect and classify objects in real-time. Take a photo to determine all objects in the scene, provide general pricing as well as relevant links to purchase!",
			link2: "https://github.com/imrn16/objects-ai",
			link_name2: `Source Code`,
			old_tech: ["RN Vision Camera", "SSD Mobilenet V1", "Frame Processors", "RN Fast Tflite"],
			new_tech: ["React Native", "Typescript", "Tensorflow", "Openrouter"],
			image: "/images/objects/1.png", // Keep for backward compatibility
			images: generateProjectImages("objects", 5, "Objects ML & AI", [
				"Object detection of an apple. Adjust the confidence of the object identification, rotate the camera, or upload a photo.",
				"Object detection of a banana",
				"Object detection of a computer mouse",
				"Take a photo to analyze all objects in the image",
				"Display all objects in the image in addition to pricing and links for purchase",
			]),
		},
		{
			id: 10,
			title: "bill",
			description:
				"A high-end bill-splitting and tip calculator app, featuring a clean, modern design and a user-friendly interface. Powered by AI to scan and analyze images of bills in order to split bills with friends, send payments or request payments!",
			link: "https://apps.apple.com/us/app/bill/id6747779525",
			link_name: `View in App Store (iOS)`,
			old_tech: [],
			new_tech: ["React Native", "Supabase", "RevenueCat", "Openrouter", "Typescript", "Expo"],
			image: "/images/bill/1.png", // Keep for backward compatibility
			images: generateProjectImages("bill", 9, "Bill", [
				"Bill is a modern, beautiful app that allows the user to capture or upload photos to split bills with friends.",
				"Take a photo to analyze with AI",
				"Upload a photo of a bill or a screenshot to analyze with AI",
				"Quickly calculate tips with a slider in addition to custom button values, or type in your own tip.",
				"Edit item names, quantities and prices. Add any additional items to the bill.",
				"Invite users to the bill via a QR code, or by sending them an in-app invitation by pressing the plus button next to their name.",
				"Select your items in the bill, see what items your friends chose, and split items amongst your friends.",
				"Send or request payments from friends via Venmo or Apple Pay via messages",
				"Manage your friends, past bills, user settings, and customize the appearance of the app. Leave feedback for further improvements!",
			]),
		},
	];

	function handleLink(link) {
		router.push(link);
	}

	function openProjectModal(project) {
		setSelectedProject(project);
		setIsModalOpen(true);
	}

	function closeProjectModal() {
		setIsModalOpen(false);
		setSelectedProject(null);
	}

	function navigateToProject(direction) {
		if (!selectedProject) return;

		const currentIndex = projectArray.findIndex((p) => p.id === selectedProject.id);
		let newIndex;

		if (direction === "next") {
			newIndex = (currentIndex + 1) % projectArray.length;
		} else if (direction === "prev") {
			newIndex = currentIndex === 0 ? projectArray.length - 1 : currentIndex - 1;
		}

		setSelectedProject(projectArray[newIndex]);
	}

	function ProjectItem({ project, index }) {
		const [projectRef, isProjectVisible] = useScrollAnimation(0.2);

		return (
			<div
				ref={projectRef}
				className={`${isProjectVisible ? "animate-fade-in-slide-up" : "opacity-0"}`}
				style={{ animationDelay: "0.1s" }}>
				<button
					className="flex flex-1 project-glass-hover my-3 px-4 md:px-3 w-full text-left"
					onClick={() => openProjectModal(project)}>
					<div className="flex drop-shadow-sm w-full rounded-lg py-4 ">
						<div className="flex flex-row w-1/4 items-start ">
							<div
								className={`bg-slate-700 opacity-90 p-0.5 rounded-md w-full ${
									isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
								}`}
								style={{ animationDelay: "0.2s" }}>
								<Image
									className={"rounded-md object w-full h-full"}
									src={project.image}
									alt={project.title}
									width={"100"}
									height={"100"}
									loading="lazy"
									placeholder="blur"
									blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
								/>
							</div>
						</div>
						<div className="flex flex-col w-3/4 pl-3">
							<div
								className={`flex flex-col ml-2 w-full text-lg text-slate-100 font-semibold project-title ${
									isProjectVisible ? "animate-fade-in-slide-left" : "opacity-0"
								}`}
								style={{ animationDelay: "0.3s" }}>
								{project.title}
							</div>
							<div
								className={`flex flex-col w-full text-md mt-2 ml-2 text-slate-400 project-description ${
									isProjectVisible ? "animate-fade-in-slide-up" : "opacity-0"
								}`}
								style={{ animationDelay: "0.4s" }}>
								{project.description}
							</div>
							{/* Special layout for Reddit & YouTube project */}
							{project.id === 6 ? (
								<div className="mt-2 flex flex-col h-auto rounded-3xl text-xs opacity-80">
									<div className="flex flex-row">
										<div className="flex flex-row text-xs opacity-40 mt-2 items-center align-center w-20">REDDIT</div>
										<div className="flex flex-row justify-center items-center align-center mr-auto">
											<div className="flex flex-row text-xs flex-wrap p-1">
												{project.link3 && (
													<button
														className={`flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg link-hover ${
															isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
														}`}
														style={{ animationDelay: "0.5s" }}
														onClick={(e) => {
															e.stopPropagation();
															handleLink(project.link3);
														}}>
														<FaLink className="justify-center align-center items-center self-center" />
														<div className="ml-2">{project.link_name3}</div>
													</button>
												)}
												{project.link && (
													<button
														className={`flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg link-hover ${
															isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
														}`}
														style={{ animationDelay: "0.6s" }}
														onClick={(e) => {
															e.stopPropagation();
															handleLink(project.link);
														}}>
														<FaLink className="justify-center align-center items-center self-center" />
														<div className="ml-2">{project.link_name}</div>
													</button>
												)}
											</div>
										</div>
									</div>
									<div className="flex flex-row">
										<div className="flex flex-row text-xs opacity-40 mt-0 items-center align-center w-20">YOUTUBE</div>
										<div className="flex flex-row justify-center items-center align-center mr-auto">
											<div className="flex flex-row text-xs flex-wrap p-1">
												{project.link4 && (
													<button
														className={`flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg link-hover ${
															isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
														}`}
														style={{ animationDelay: "0.55s" }}
														onClick={(e) => {
															e.stopPropagation();
															handleLink(project.link4);
														}}>
														<FaLink className="justify-center align-center items-center self-center" />
														<div className="ml-2">{project.link_name4}</div>
													</button>
												)}
												{project.link2 && (
													<button
														className={`flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg link-hover ${
															isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
														}`}
														style={{ animationDelay: "0.65s" }}
														onClick={(e) => {
															e.stopPropagation();
															handleLink(project.link2);
														}}>
														<FaLink className="justify-center align-center items-center self-center" />
														<div className="ml-2">{project.link_name2}</div>
													</button>
												)}
											</div>
										</div>
									</div>
								</div>
							) : (
								<>
									<div className="flex flex-row">
										{project.link && (
											<button
												className={`flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg link-hover ${
													isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
												}`}
												style={{ animationDelay: "0.5s" }}
												onClick={(e) => {
													e.stopPropagation();
													handleLink(project.link);
												}}>
												<FaLink className="justify-center align-center items-center self-center" />
												<div className="ml-2">{project.link_name}</div>
											</button>
										)}
										{project.link2 && (
											<button
												className={`flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg link-hover ${
													isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
												}`}
												style={{ animationDelay: "0.55s" }}
												onClick={(e) => {
													e.stopPropagation();
													handleLink(project.link2);
												}}>
												<FaLink className="justify-center align-center items-center self-center" />
												<div className="ml-2">{project.link_name2}</div>
											</button>
										)}
									</div>
									<div className="flex flex-row">
										{project.link3 && (
											<button
												className={`flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg link-hover ${
													isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
												}`}
												style={{ animationDelay: "0.6s" }}
												onClick={(e) => {
													e.stopPropagation();
													handleLink(project.link3);
												}}>
												<FaLink className="justify-center align-center items-center self-center" />
												<div className="ml-2">{project.link_name3}</div>
											</button>
										)}
										{project.link4 && (
											<button
												className={`flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg link-hover ${
													isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
												}`}
												style={{ animationDelay: "0.65s" }}
												onClick={(e) => {
													e.stopPropagation();
													handleLink(project.link4);
												}}>
												<FaLink className="justify-center align-center items-center self-center" />
												<div className="ml-2">{project.link_name4}</div>
											</button>
										)}
									</div>
								</>
							)}
							<div className="">
								<div className="flex flex-row text-xs flex-wrap pt-2">
									{project.new_tech.map((ntech, techIndex) => {
										return (
											<div
												key={techIndex}
												className={`bg-teal-900 rounded-full p-1 px-4 text-teal-200 mt-2 mr-2 bg-opacity-50 skill-tag-hover ${
													isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
												}`}
												style={{ animationDelay: `${0.7 + techIndex * 0.05}s` }}
												disabled>{`${ntech}`}</div>
										);
									})}
								</div>
								<div className="flex flex-row text-xs flex-wrap ">
									{project.old_tech.map((otech, techIndex) => {
										return (
											<div
												key={techIndex}
												className={`bg-cyan-950 rounded-full p-1 px-3 text-cyan-200 mt-2 mr-2 bg-opacity-50 skill-tag-hover ${
													isProjectVisible ? "animate-fade-in-scale" : "opacity-0"
												}`}
												style={{
													animationDelay: `${0.8 + techIndex * 0.05}s`,
												}}>{`${otech}`}</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</button>
			</div>
		);
	}

	function individualProject() {
		return projectArray.reverse().map((project, index) => {
			return (
				<ProjectItem
					key={project.id}
					project={project}
					index={index}
				/>
			);
		});
	}

	return (
		<div
			ref={sectionRef}
			className="flex flex-col justify-left mb-24">
			<span className={`text-xs opacity-40 md:ml-4 ${isSectionVisible ? "animate-fade-in-slide-down animate-delay-100" : "opacity-0"}`}>PROJECTS</span>
			<div>{individualProject()}</div>

			{/* Project Modal */}
			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					isOpen={isModalOpen}
					onClose={closeProjectModal}
					onNavigateProject={navigateToProject}
				/>
			)}
		</div>
	);
}

export default Projects;
