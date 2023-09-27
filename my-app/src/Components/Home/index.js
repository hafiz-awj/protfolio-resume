import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-around md:items-center mt-10 md:mt-5 ">
        <div className="md:w-2/5 w-64 h-64 md:h-full mx-auto md:mx-0">
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-medium">
            HI, I'm{" "}
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-zinc-400">
              Ali Awj
            </span>
          </h2>
          <p className="text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold block">I'm a</p>
          <div className="text-green-500 font-bold m-0 p-0 text-5xl md:text-6xl lg:text-7xl xl:text-7xl md:block">
            <Typewriter
              options={{
                strings: [
                  "Front End Developer",
                  "Freelancer",
                  "React JS Developer",
                  "Next JS Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
            <p className="bg-green-500 text-zinc-50 py-2 px-5 md:py-3 md:px-6 rounded-3xl md:rounded-[36px] mt-5 inline-block text-lg md:text-xl lg:text-2xl font-bold">Contact Me</p>
        </div>
        <div className="md:w-48 w-48 lg:w-56 mx-auto md:mx-0">
          <img src="/assets/images/avatar.png" className="" alt="Ali's Pic" />
        </div>
      </div>
    </>
  );
};

export default Home;
