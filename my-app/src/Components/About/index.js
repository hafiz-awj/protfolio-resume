import React from "react";
import { TbPointFilled } from "react-icons/tb";

const About = () => {
  return (
    <div className="bg-green-300 py-10 w-full xl:w-3/4 float-right">
      <div className="px-10">
        <h1 className="text-5xl font-semibold text-zinc-400">About</h1>
        <div className="bg-zinc-400 rounded-sm h-1 w-24 mt-2"></div>
        <p className="mt-3 text-xl">
          A hardworking and dedicated individual, determined on the road to
          success, ever ready to take on challenges and accomplish what I set
          out to achieve. To work in an organization which gives me a platform
          to enrich and utilize my overall skills in such a manner that it
          proves to be an asset in every aspect of the life, thus allowing me to
          give my best for the growth of an organization.
        </p>
        <div className="flex flex-col sm:flex-row my-10">
          <div className="mx-auto md:mx-0">
            <img src="/assets/images/avatar.png" className="w-32" alt="Ali's Pic"/>
          </div>
          <div className="ml-10 md:ml-20 w-full">
            <h2 className="text-3xl font-medium text-zinc-400">
              Web Developer
            </h2>
            <div className="bg-zinc-400 rounded-sm h-1 w-40 mt-1"></div>
            <div className="mt-5 flex flex-col md:flex-row w-11/12 text-base md:text-lg">
              <div className="w-full md:w-1/2">
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">Full Name:</span> Hafiz Ali
                  Awj
                </p>
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">DOB:</span> 22 Feb 2008
                </p>
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">Age:</span> 15y
                </p>
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">Qualification:</span>{" "}
                  Intermediate
                </p>
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">Languages:</span> English And
                  Urdu
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">Phone:</span> +92 322 2820 828
                </p>
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">Email:</span>{" "}
                  aliawj112@gmail.com
                </p>
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">Freelance:</span> Available
                </p>
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">Website:</span> 22 Feb 2008
                </p>
                <p className="mb-3">
                  <span>
                    <TbPointFilled className="inline" />
                  </span>{" "}
                  <span className="font-semibold">Location:</span> Karachi
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xl font-normal pb-5">
          I have a diverse skill set in web development, specializing in
          <span className="font-semibold">{' '}HTML, CSS, JavaScript</span>. I create
          dynamic and interactive web interfaces. I'm proficient in front-end
          libraries and frameworks like 
          <span className="font-semibold">{' '}
            Bootstrap, Tailwind CSS, Ant Design, and Material-UI
          </span>{" "}
          for responsive and visually appealing layouts.
          <br />
          <br />I also have experience with{" "}
          <span className="font-semibold">React.js</span> and{" "}
          <span className="font-semibold">Next.js</span> for modern web
          applications. I'm well-versed in
          <span className="font-semibold">{' '}Firebase</span> for real-time
          application development, user authentication, and data management.{" "}
          <br />
          <br />I stay updated with the latest technologies to deliver top-notch
          web solutions that meet user expectations and business objectives. My
          skills span frontend and backend development, making me well-prepared
          for various web development challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
