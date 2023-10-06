import React from "react";
import { useNavbarContext } from "../../NavBarContext";
import { BiMenu } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { isMobileNavbar, toggleMobileNavbar } = useNavbarContext();

  return (
    <>
      {/* {!isMobileNavbar && (
        <div className="hidden sm:flex w-full bg-zinc-200 pl-10 xl:py-3 2xl:py-5 py-2 font-sans justify-between ">
          <div className=" pl-10 pr-20 lg:ml-10 mr-36 xl:mr-80 2xl:mr-96">
            <h1 className="m-0 text-2xl xl:text-3xl 2xl:text-4xl font-bold p-3 rounded-full bg-zinc-50">
              AA
            </h1>
            <div></div>
          </div>
          <div className="pt-4 xl:pt-5 2xl:pt-4 w-1/2 xl:w-2/5 2xl:ml-32">
            <ul className="flex text-base xl:text-bg 2xl:text-xl font-semibold px-2 m-0 justify-between">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="px-5 lg:pr-10 xl:pt-2 2xl:pt-2 pt-2">
            <ul className="bg-zinc-50 p-2 xl:p-3 2xl-p-5 rounded-md xl:rounded-lg 2xl:rounded-xl">
              <li className="xl:hidden">
                <BsMoonFill size={16} />
              </li>
              <li className="hidden xl:block 2xl:hidden">
                <BsMoonFill size={20} />
              </li>
              <li className="hidden 2xl:block">
                <BsMoonFill size={24} />
              </li>
            </ul>
          </div>
        </div>
      )} */}
      {!isMobileNavbar && (
        <div className="hidden xl:block h-full fixed w-1/4 bg-zinc-300 m-0 z-50 ">
          <div className="flex justify-center items-center pt-5">
            <img
              src="/assets/images/sqauare_avatar.jpg"
              width="120px"
              alt="ali's pic"
              className="rounded-full border-8 border-green-400 bg-zinc-300"
            />
          </div>
          <div className="flex justify-center items-center pt-1">
            <p className="text-3xl font-bold">Hafiz Ali Awj</p>
            <div></div>
          </div>
          <div className="flex flex-col justify-around items-center h-20 text-xl font-semibold mt-10">
            <div>Home</div>
            <div>About</div>
          </div>
        </div>
      )}
      {!isMobileNavbar && (
        <div className="flex justify-start m-4 xl:hidden fixed z-50 h-full">
          <ul className=" bg-white rounded-lg w-12 h-12 flex justify-center items-center">
            <li onClick={toggleMobileNavbar}>
              <BiMenu size={30} />
            </li>
          </ul>
          {/* <ul className="md:hidden bg-zinc-200 w-12 h-12 rounded-lg flex justify-center items-center ml-3">
            <li>
              <BsMoonFill size={25} />
            </li>
          </ul> */}
        </div>
      )}
      {isMobileNavbar && (
        <div className="fixed bg-zinc-50 w-full h-screen z-40"></div>
      )}

      {isMobileNavbar && (
        <div className="w-60 bg-zinc-300 h-screen fixed z-50 opacity-100">
          <div className="h-3"></div>
          <div className="flex justify-end">
            <div className="bg-zinc-50 mr-3 p-2 rounded-full">
              <RxCross2 onClick={toggleMobileNavbar} size={20} className="" />
            </div>
          </div>
          <div className="flex justify-center">
            <h1 className="p-4 rounded-full bg-zinc-50 font-bold text-3xl">
              AA
            </h1>
          </div>
          <div className="flex justify-center mt-12 h-2/5">
            <ul className="flex flex-col justify-between items-center font-semibold">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
