"use client";

import Image from "next/image";
import Title from "./components/Title";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import MouseGlow from "./components/MouseGlow";
import { useEffect, useState } from "react";
import Certifications from "./components/Certifications";

export default function Home() {
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 1020);
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Set initial value

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			{isLargeScreen ? (
				<>
					<MouseGlow />
					<div className="flex flex-row h-screen justify-center">
						<div className="flex flex-1 w-1/2 flex-row-reverse ">
							<div className="flex flex-1 max-w-2xl min-w-lg pl-24">
								<div className="flex py-20 h-screen  w-full fixed ">
									<div className="flex flex-1 flex-col  h-auto w-full">
										
										<Title />
										
										<div className="flex flex-col mt-auto w-full">
											<Contact />
										</div>
									</div>
									{/* <div className="flex flex-1 bg-orange-600 h-auto w-full">
	
							</div> */}
								</div>
							</div>
						</div>
						<div className="w-max h-auto flex flex-1 flex-col h-1/2 pr-10   ">
							<div className="max-w-xl min-w-lg  overflow-scroll-y">
								<div>
									<About />
								</div>
								<div>
											<Certifications/>
										</div>
								<div>
									<Projects />
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<MouseGlow />
					<div className="flex flex-row h-screen justify-center">
						<div className="flex flex-1 max-w-4xl min-w-lg px-6">
							<div className="flex py-20 h-screen  w-full  ">
								<div className="flex flex-1 flex-col  h-auto w-full">
									<Title />
									<div className="flex flex-col  w-full">
										<Contact />
									</div>
									<div className="max-w-6xl min-w-lg  overflow-scroll-y">
										<div>
											<About />
										</div>
										<div>
											<Certifications/>
										</div>
										<div>
											<Projects />
										</div>
									</div>
									{/* <div className="flex flex-1 bg-orange-600 h-auto w-full">
		
								</div> */}
								</div>
							</div>

							
						</div>
					</div>
				</>
			)}
		</>
	);
}

// "use client";

// import Image from "next/image";
// import Title from "./components/Title";
// import Contact from "./components/Contact";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import MouseGlow from "./components/MouseGlow";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [isLargeScreen, setIsLargeScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth > 1050);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Set initial value

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {isLargeScreen ? (
//         <>
//           <MouseGlow />
//           <div className="flex flex-row h-screen justify-center">
//             <div className="flex flex-1 w-1/2 flex-row-reverse">
//               <div className="flex flex-1 max-w-2xl min-w-lg pl-24">
//                 <div className="flex py-20 h-screen w-full">
//                   <div className="flex flex-1 flex-col h-auto w-full">
//                     <Title />
//                     <div className="flex flex-col mt-auto w-full">
//                       <Contact />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-max h-auto flex flex-1 flex-col pr-10">
//               <div className="max-w-xl min-w-lg overflow-y-scroll">
//                 <div>
//                   <About />
//                 </div>
//                 <div>
//                   <Projects />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div></div>
//       )}
//     </>
//   );
// }
