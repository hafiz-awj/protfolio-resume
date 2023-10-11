import React from "react";

const Skills = () => {
  return (
    <>
      <div id="skills" className="w-full xl:w-3/4 bg-green-300 float-right">
        <div className="my-10 px-10">
          <h1 className="text-5xl font-semibold text-zinc-400">Skills</h1>
          <div className="bg-zinc-400 rounded-sm h-1 w-24 mt-2"></div>
          <div className="my-10">
            <h1 className="text-4xl font-semibold text-black">Fundamentals</h1>
            <div className="bg-black rounded-sm h-1 w-32 mt-2"></div>
            <div className="my-4">
              <div className="h-24 w-11/12 bg-black text-white">
                <p className="text-3xl ml-5 pt-2 font-semibold">HTML</p>
                <div className="bg-white w-11/12 ml-5 mt-2 h-6">
                  <div className="bg-green-400 h-full w-11/12"></div>
                </div>
              </div>
              <div className="h-24 mt-1 w-11/12 bg-black text-white">
                <p className="text-3xl ml-5 pt-2 font-semibold">CSS</p>
                <div className="bg-white w-11/12 ml-5 mt-2 h-6">
                  <div className="bg-green-400 h-full w-11/12"></div>
                </div>
              </div>
              <div className="h-24 mt-1 w-11/12 bg-black text-white">
                <p className="text-3xl ml-5 pt-2 font-semibold">JavaScript</p>
                <div className="bg-white w-11/12 ml-5 mt-2 h-6">
                  <div className="bg-green-400 h-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-12">
            <h1 className="text-4xl font-semibold text-black">
              Front End Frameworks
            </h1>
            <div className="bg-black rounded-sm h-1 w-32 mt-2"></div>
            <div className="my-4">
              <div className="h-24 w-11/12 bg-black text-white">
                <p className="text-3xl ml-5 pt-2 font-semibold">React JS</p>
                <div className="bg-white w-11/12 ml-5 mt-2 h-6">
                  <div className="bg-green-400 h-full w-9/12"></div>
                </div>
              </div>
              <div className="h-24 mt-1 w-11/12 bg-black text-white">
                <p className="text-3xl ml-5 pt-2 font-semibold">Next JS</p>
                <div className="bg-white w-11/12 ml-5 mt-2 h-6">
                  <div className="bg-green-400 h-full w-9/12"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-12">
            <h1 className="text-4xl font-semibold text-black">
              CSS Libraries and Frameworks
            </h1>
            <div className="bg-black rounded-sm h-1 w-32 mt-2"></div>
            <div className="my-4">
              <div className="h-24 w-11/12 bg-black text-white">
                <p className="text-3xl ml-5 pt-2 font-semibold">Bootstrap</p>
                <div className="bg-white w-11/12 ml-5 mt-2 h-6">
                  <div className="bg-green-400 h-full w-9/12"></div>
                </div>
              </div>
              <div className="h-24 mt-1 w-11/12 bg-black text-white">
                <p className="text-3xl ml-5 pt-2 font-semibold">Tailwind CSS</p>
                <div className="bg-white w-11/12 ml-5 mt-2 h-6">
                  <div className="bg-green-400 h-full w-10/12"></div>
                </div>
              </div>
              <div className="h-24 mt-1 w-11/12 bg-black text-white">
                <p className="text-3xl ml-5 pt-2 font-semibold">Ant Design</p>
                <div className="bg-white w-11/12 ml-5 mt-2 h-6">
                  <div className="bg-green-400 h-full w-9/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
