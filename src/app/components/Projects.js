"use client";
import React from "react";
import Image from "next/image";
import "/src/app/globals.css";
import { FaLink } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function Projects() {
	const backdropBlur = "bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-6 rounded-lg";
	const router = useRouter();

	let projectArray = [
		// {   id: 1,
		//     title: "Example",
		//     description: "",
		//     link: "",
		//     old_tech: [],
		//     new_tech: [],
		//     image: ""
		// },
		{
			id: 1,
			title: "To-Do List",
			description:
				"The beginning of my programming journey. Putting together the fundamentals of Javascript and React through a traditional to-do list project, incorporating state management.",
			link: "https://github.com/imrn16/todo-test-3",
			link_name: `Source Code`,
			old_tech: [],
			new_tech: ["HTML", "CSS", "Javascript", "React", "useState", "useEffect", "Visual Studio Code"],
			image: "/images/todo.png",
		},
		{
			id: 2,
			title: "Investment Calculator",
			description:
				"Simple investing app that displays the payout per year when a user inputs an initial investment, expected return rate, annual investment, and the duration of investment (in years).",
			link: "https://github.com/imrn16/investment-1",
			link_name: `Source Code`,
			old_tech: [],
			new_tech: ["Array Arithmetic", "HTML", "CSS", "Javascript", "React", "useState", "useEffect"],
			image: "/images/investments.png",
		},

		{
			id: 3,
			title: "Budgets",
			description:
				"Budgeting app that allows the user to add multiple budgets with multiple expenses within each budget. Controlled via modals. Implemented CRUD (Create, Read, Update, Delete) using React Contexts, multiple components with prop drilling, and local storage.",
			link: "https://github.com/imrn16/budget-1",
			link_name: `Source Code`,
			old_tech: ["HTML", "CSS", "Javascript", "React", "useState", "useEffect"],
			new_tech: ["Local Storage", "Modals", "useContext", "Multiple Components", "Nested Arrays"],
			image: "/images/budgets.png",
		},

		{
			id: 4,
			title: "Reddit Clone",
			description:
				"My biggest challenge yet. A full-stack clone of reddit featuring authentication, votes, commenting, and much more! All integrated alongside a back-end service.",
			link: "https://reddit-clone-2-dh7f.vercel.app/",
			link2: "https://github.com/imrn16/reddit-clone-2",
			link_name: `Click to Visit`,
			link_name2: `Source Code`,
			old_tech: ["React", "Javascript", "HTML", "CSS", "React Hooks"],
			new_tech: ["Next.js", "Tailwind CSS", "Supabase", "Supabase Auth", "React Icons", "Github", "Vercel", "Resend"],
			image: "/images/reddit-clone.png",
		},

		{
			id: 5,
			title: "Portfolio",
			description:
				"Designed with a minimalist approach, using clean, simple aesthetics to clearly showcase my growth from the start of my coding journey to where I am today.",
			link: "https://github.com/imrn16/portfolio-1",
			link_name: `Source Code`,
			old_tech: ["Next.js", "Tailwind CSS", "React Icons", "React", "Javascript", "HTML", "CSS", "React Hooks", "Github", "Vercel"],
			new_tech: ["Animations", "Visual Effects"],
			image: "/images/portfolio-1.png",
		},
	];

	function handleLink(link) {
		router.push(link);
	}

	function individualProject() {
		return projectArray.reverse().map((indiv) => {
			return (
				<>
					<div
						className="flex flex-1 md:hover:bg-slate-700 my-3 md:px-3 shadow-transparent rounded-3xl bg-opacity-0 bg-slate-700 md:hover:bg-opacity-20 md:hover:shadow-2xl"
						key={indiv.id}>
						<div className="flex drop-shadow-sm w-full rounded-lg py-4 ">
							<div className="flex flex-row w-1/4 items-start ">
								<div className="bg-slate-700 opacity-90 p-0.5 rounded-md w-full">
									<Image
										className={"rounded-md object w-full h-full"}
										src={indiv.image}
										alt={indiv.title}
										width={"100"}
										height={"100"}
									/>
								</div>
							</div>
							<div className="flex flex-col w-3/4 pl-3">
								<div className="flex flex-col ml-2 w-full text-lg text-slate-100 font-semibold">{indiv.title}</div>
								<div className="flex flex-col w-full text-md mt-2 ml-2 text-slate-400">{indiv.description}</div>
								<div className="flex flex-row">
									{indiv.link && (
										<button
											className="flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg hover:text-teal-300 hover:underline"
											onClick={() => handleLink(indiv.link)}>
											<FaLink className="justify-center align-center items-center self-center" />
											<div className="ml-2">{indiv.link_name}</div>
										</button>
									)}
									{indiv.link2 && (
										<button
											className="flex flex-row mr-3 text-sm mt-2 w-auto p-1 rounded-lg hover:text-teal-300 hover:underline"
											onClick={() => handleLink(indiv.link2)}>
											<FaLink className="justify-center align-center items-center self-center" />
											<div className="ml-2">{indiv.link_name2}</div>
										</button>
									)}
								</div>
								<div className="">
									<div className="flex flex-row text-xs flex-wrap pt-2">
										{indiv.new_tech.map((ntech) => {
											return (
												<>
													<div
														className="
													bg-teal-900 rounded-full p-1 px-4 text-teal-200 mt-2 mr-2 bg-opacity-50 hover:bg-opacity-100" disabled>{`${ntech}`}</div>
												</>
											);
										})}
									</div>
									<div className="flex flex-row text-xs flex-wrap ">
										{indiv.old_tech.map((otech) => {
											return (
												<>
													<div
														className="
													bg-stone-800 rounded-full p-1 px-3 text-stone-400 mt-2 mr-2 bg-opacity-50 hover:bg-opacity-100">{`${otech}`}</div>
												</>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		});
	}

	return (
		<div className="flex flex-col justify-left mb-24 ">
			<span className="text-xs opacity-40 md:ml-4">PROJECTS</span>
			<div>{individualProject()}</div>
			{/* <button className="flex flex-1 w-auto mt-6 mb-32 ml-5 font-semibold hover:text-red-500">
				<span className="">{`View Full Resumé`}</span>
			</button> */}
		</div>
	);
}

export default Projects;
