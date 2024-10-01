import React from "react";
import "/src/app/globals.css";
import Image from "next/image";

function Title() {
	return (
		<div className="flex h-auto ">
			<div className=" w-96 h-48  justify-center items-">
				{/* <div className="flex flex-row flex-1 h-1/2  items-center justify-left text-7xl tracking-widest font-bold opacity-90">
					<h1>IMRAN</h1>
				</div>
				<div className="flex flex-row h-1/2  items-center justify-left text-5xl tracking-tight pr-2 opacity-90">
					<h1>MOHIUDDIN</h1>
				</div> */}

				<button className="flex flex-row  items- justify-left text-5xl tracking-tight font-bold pr-2 opacity-75 ">
					<h1> Imran Mohiuddin</h1>
				</button>
				<div className="flex flex-row  align-center ">
					<div className="flex my-2 items- bg-slate-900 hover:bg-opacity-100 opacity-60 rounded-full">
						<Image
							className="rounded-full "
							src={"/images/profile.jpg"}
							alt="View Resume"
							width={"32"}
							height={"32"}
						/>
					</div>
					<div className=" ml-4 text-2xl opacity-80 mt-2 mb-1 ">Full Stack Developer</div>
				</div>

				<div className="mt-4 opacity-50 text-lg  w-80">{`Building beautiful digital experiences with intuitive user interfaces.`}</div>
			</div>
		</div>
	);
}

export default Title;
