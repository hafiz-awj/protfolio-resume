import { useNavbarContext } from "../../NavBarContext";
import Typewriter from "typewriter-effect";

const Home = () => {
  const { isMobileNavbar } = useNavbarContext();
  return (<>
    {isMobileNavbar ? (
        <div className="hidden"></div>
    ) : (
      <div className="flex justify-around items-center">
        <div className="w-2/5">
          <h2>Hi, I am Ali Awj</h2>
          <div className="flex">
            <pre className="font-sans">I am a <Typewriter
                options={{
                  strings: [
                    "Front End Developer",
                    "React JS Developer",
                    "Next JS Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              /></pre>
            
          </div>
        </div>
        <div className="w-2/5">
          <img
            src="/assets/images/avatar.png"
            width={150}
            height={350}
            alt="Ali's Pic"
          />
        </div>
      </div>
    )}
  </>);
};

export default Home;
