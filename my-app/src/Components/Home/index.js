import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-around md:items-center">
        <div className="md:w-2/5 w-64 h-48 md:h-full mx-auto md:mx-0">
          <h2 className="text-3xl md:text-4xl font-medium">
            HI, I'm{" "}
            <span className="text-4xl md:text-5xl font-bold text-zinc-400">
              Ali Awj
            </span>
          </h2>
          <p className="text-4xl md:text-5xl font-semibold block">I'm a</p>
          <div className="text-green-500 font-bold m-0 p-0 text-5xl md:text-6xl md:block">
            <Typewriter
              options={{
                strings: [
                  "Front End Developer",
                  "React JS Developer",
                  "Next JS Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="md:w-48 w-48 mx-auto md:mx-0">
          <img src="/assets/images/avatar.png" className="" alt="Ali's Pic" />
        </div>
      </div>
    </>
  );
};

export default Home;
