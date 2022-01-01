import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import MiniProfile from "./MiniProfile";
// import { modalState } from "../atoms/modalAtom";

const Header = () => {
  // destructuring props data and renaming it to session
  const { data: session } = useSession();
  // const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl max-h-fit mx-5 lg:mx-auto">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden w-[250px] lg:inline-grid cursor-pointer items-center justify-center"
        >
          <Image
            src="/assets/localpasal.png"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-[50px] lg:hidden flex-shrink-0 cursor-pointer justify-center items-center"
        >
          <Image src="/icon.png" layout="fill" objectFit="contain"></Image>
        </div>
        {/* Middle Search input field*/}
        <div className="relative max-w-2xl w-[350px] ">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400"></SearchIcon>
            </div>
            <input
              className="bg-gray-50 w-full pl-10 sm:text-sm border-gray-300 
            focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            ></input>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end ">
          {/* <HomeIcon onClick={() => router.push("/")} className="navBtn" /> */}
          {/* <MenuIcon className="h-6 md:hidden cursor-pointer" /> */}

          {session ? (
            // this < symbol is called a section and we need to wrap value inside it while using if else>
            <>
              {/* <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div
                  className="absolute -top-2 -right-2 text-xs w-5 h-5
          bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white"
                >
                  3
                </div>
              </div> */}
              {/* <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              {/* <UserGroupIcon className="navBtn" /> */}
              {/* <HeartIcon className="navBtn" /> */}

              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-10 w-10 mr-3 rounded-full cursor-pointer"
              ></img>
            </>
          ) : (
            <button className=" mr-3 text-sm md:text-xl" onClick={signIn}>
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
