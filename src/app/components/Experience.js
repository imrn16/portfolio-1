import React from "react";

function Experiences() {
    let certArray = [
        {
            name: `SRS Web Solutions`,
            type: `Software Engineer`,
            description: `I contributed to core platform development, enhancing digital workflows across web and mobile. I built and maintained cross-platform codebases using React, React Native, Node.js and Express.js, developing reusable UI components and custom business logic to speed up feature delivery. Working closely with product and design teams, I shipped performant, accessible features and built mobile-specific functionality for secure, offline-ready workflows. I also developed backend services and middleware to support form handling and third-party API integrations.`,
            new_tech: ["HTML", "CSS", "Javascript", "React", "Git"],
            new_tech2: ["Node.js", "Express.js", "SQL", "MongoDB"],
        },
    ];

    return (
        <>
            <div className="flex flex-col mt-20 mb-32 text-lg ">
                <span className=" flex flex-col text-xs opacity-40 mb-4 md:ml-4">EXPERIENCE</span>
                {certArray.map((indiv) => {
                    return (
                        <>
                            <div className={`flex flex-col  rounded-2xl bg-slate-700 bg-opacity-0 md:hover:bg-opacity-20 md:p-4`}>
                                <div className={`flex flex-row`}>
                                    <span className={`flex flex-row font-semibold `}>{indiv.name}</span>
                                    <span className={`mx-3`}>·</span>
                                    <span className={`flex flex-row opacity-60`}>{indiv.type}</span>
                                </div>
                                <span className={`flex flex-col w-full text-md mt-2 text-slate-200 opacity-60 text-base`}>{indiv.description}</span>

                                <div className="mt-2 flex flex-col h-auto rounded-3xl text-xs opacity-80 ">

                                    <div className={"flex flex-row"}>
                                        <div className="flex flex-row text-xs opacity-40 mt-2 items-center align-center w-20 ">
                                            FRONT END
                                        </div>

                                        <div className="flex flex-row justify-center items-center align-center mr-auto ">
                                            <div className="flex flex-row text-xs flex-wrap p-1">
                                                {indiv.new_tech.map((ntech) => {
                                                    return (
                                                        <>
                                                            <div
                                                                className="
                                                    bg-teal-900 rounded-full p-1 px-4 text-teal-200 mt-2  mr-2  bg-opacity-60 hover:bg-opacity-100"
                                                                disabled>{`${ntech}`}</div>
                                                        </>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"flex flex-row"}>
                                        <div className="flex flex-row text-xs opacity-40 mt-2 items-center align-center w-20 ">
                                            BACK END
                                        </div>

                                        <div className="flex flex-row justify-center items-center align-center mr-auto ">
                                            <div className="flex flex-row text-xs flex-wrap p-1">
                                                {indiv.new_tech2.map((ntech) => {
                                                    return (
                                                        <>
                                                            <div
                                                                className="
                                                    bg-teal-900 rounded-full p-1 px-4 text-teal-200 mt-2  mr-2 bg-opacity-50 hover:bg-opacity-100"
                                                                disabled>{`${ntech}`}</div>
                                                        </>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                
                                </div>

                                {/* <div className="">
                                    <div className="flex flex-row text-xs flex-wrap pt-2">
                                        {indiv.new_tech2.map((ntech) => {
                                            return (
                                                <>
                                                    <div
                                                        className="
                                                    bg-teal-900 rounded-full p-1 px-4 text-teal-200 mt-2 mr-2 bg-opacity-50 hover:bg-opacity-100"
                                                        disabled>{`${ntech}`}</div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
 */}
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Experiences;
