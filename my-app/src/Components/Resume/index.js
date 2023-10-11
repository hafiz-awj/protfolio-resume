import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="w-full xl:w-3/4 bg-zinc-300/90 float-right">
      <div className="my-10 px-10">
        <h1 className="text-5xl font-semibold text-green-500">Resume</h1>
        <div className="bg-green-500 rounded-sm h-1 w-24 mt-2"></div>
        <p className="mt-3 text-lg">
          Highly skilled and motivated web developer with 7 months of experience
          in creating innovative and user-friendly websites and web
          applications. Proficient in front-end and back-end technologies, I
          excel in turning concepts into fully functional, responsive, and
          visually appealing digital experiences. With a strong passion for
          problem-solving and continuous learning, I am dedicated to delivering
          top-quality solutions that exceed client expectations.
        </p>
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="w-full lg:w-1/2 lg:pr-5">
            <div className="w-full">
              <h2 className="text-3xl font-bold">Summary</h2>
              <div className="border-l-2 border-green-500 mt-2 pl-2">
                <h3 className="text-xl font-semibold mb-1">Hafiz Ali Awj</h3>
                <p className="text-base">
                  A hardworking and dedicated individual, determined on the road
                  to success, ever ready to take on challenges and accomplish
                  what I set out to achieve. To work in an organization which
                  gives me a platform to enrich and utilize my overall skills in
                  such a manner that it proves to be an asset in every aspect of
                  the life, thus allowing me to give my best for the growth of
                  an organization.
                </p>
                <ul className="mt-5 list-disc list-inside">
                  <li>Karachi, Pakistan</li>
                  <li>0322-2820-828</li>
                  <li>hafizaliawj@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="w-full mt-7">
              <h2 className="text-3xl font-bold">Education</h2>
              <div className="border-l-2 border-green-500 mt-2 pl-2">
                <h3 className="text-xl font-semibold mb-1">
                  Adamjee Govt Science College
                </h3>
                <p className="text-lg inline-block px-3 py-1 bg-zinc-100/70 mb-2">
                  Present
                </p>
                <p className="text-base">
                  My educational journey was enriched by my time at Adamjee
                  Government Science College, a prestigious institution renowned
                  for its academic prowess and inclusive atmosphere. The
                  college's illustrious history and committed faculty played a
                  pivotal role in shaping my educational foundation, instilling
                  in me a profound passion for learning and an unwavering
                  commitment to excellence. These values continue to drive my
                  academic and personal pursuits to this day.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-7">
            <h2 className="text-3xl font-bold">Professional Experience</h2>
            <div className="border-l-2 border-green-500 mt-2 pl-2">
              <h3 className="text-xl font-semibold mb-1">
                Front End Development Intern at Invision Custon Solutions
              </h3>
              <p className="text-lg inline-block px-3 py-1 bg-zinc-100/70 mb-">
                2023
              </p>
              <ul className="list-disc block ml-5">
                <li className="mt-3">
                  As a Front End Development Intern, I am responsible for
                  translating wireframes and design mockups into interactive and
                  pixel-perfect user interfaces. I pay meticulous attention to
                  design details, ensuring that the final product aligns with
                  the provided designs and brand guidelines.
                </li>
                <li className="mt-3">
                  Proficient in React and Next, I utilize the framework's
                  component-based architecture to build dynamic and responsive
                  front-end applications. I harness the power of React's virtual
                  DOM to optimize performance and deliver smooth user
                  interactions.
                </li>
                <li className="mt-3">
                  Understanding the significance of mobile responsiveness, I
                  implement responsive web design principles to ensure that our
                  applications adapt flawlessly to various devices and screen
                  sizes, guaranteeing an excellent user experience across
                  platforms.
                </li>
                <li className="mt-3">
                  As a frontend developer, I am dedicated to continuous
                  learning, staying updated with the latest UI/UX trends, React
                  libraries, and emerging technologies to enhance my skillset
                  and bring innovative solutions to our projects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Resume;
