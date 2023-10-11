import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div id="home" className="flex flex-row justify-center h-[600px] md:h-[650px] w-screen xl:w-3/4 xl:float-right pb-20 bg-zinc-300/90">
        <div className="pl-10 pt-40 sm:pl-20 md:pl-32 lg:pl-40  w-4/5">
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-2">
            Ali Awj
          </h2>
          <div className="flex items-baseline flex-col sm:flex-row mt-4">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mr-2">
              I'm a
            </p>
            <div className="text-green-500 font-bold m-0 p-0 text-4xl md:text-4xl lg:text-5xl xl:text-5xl ">
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
          </div>

          <p className="bg-black text-zinc-50 py-1 px-4 md:py-2 md:px-6 rounded-3xl md:rounded-[36px] mt-5 inline-block text-base md:text-lg lg:text-xl font-bold">
            Contact Me
            <BsArrowRight color="white" size={20} className="inline ml-2 " />
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
