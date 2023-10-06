import React from "react";

const Skills = () => {
  return (
    <>
      <div className="bg-white p-10 xl:text-2xl">
        <h1 className="text-5xl font-semibold text-zinc-400">About</h1>
        <div className="bg-zinc-400 rounded-sm h-1 w-24 mt-1 mb-10"></div>
        <div className="flex sm:justify-around flex-col sm:flex-row items-center">
          <div className="bg-green-500 rounded-full w-60 h-60 flex justify-center items-center border-[16px] border-zinc-400">
            <div className="border-8 border-zinc-400 rounded-full w-[120px] h-[120px] flex justify-center items-center">
              HTML
            </div>
          </div>
          <div className="bg-green-500 rounded-full w-60 h-60 flex justify-center items-center border-[16px] border-zinc-400">
            <div className="border-8 border-zinc-400 rounded-full w-[120px] h-[120px] flex justify-center items-center">
              CSS
            </div>
          </div>
          <div className="bg-green-500 rounded-full w-60 h-60 flex justify-center items-center border-[16px] border-zinc-400">
            <div className="border-8 border-zinc-400 rounded-full w-[120px] h-[120px] flex justify-center items-center">
              JavaScript
            </div>
          </div>
        </div>
        <div className="flex sm:justify-around sm:mt-20 sm:w-2/3 sm:mx-auto items-center flex-col sm:flex-row">
          <div className="bg-green-500 rounded-full w-60 h-60 flex justify-center items-center border-[16px] border-zinc-400">
            <div className="border-8 border-zinc-400 rounded-full w-[120px] h-[120px] flex justify-center items-center">
              React JS
            </div>
          </div>
          <div className="bg-green-500 rounded-full w-60 h-60 flex justify-center items-center border-[16px] border-zinc-400">
            <div className="border-8 border-zinc-400 rounded-full w-[120px] h-[120px] flex justify-center items-center">
              Next JS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
