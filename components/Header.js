import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

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
          {session ? (
            <>
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="profile pic"
                className="h-10 w-10 mr-3 rounded-full cursor-pointer"
              ></img>
            </>
          ) : (
            <button
              className=" mr-3 text-sm md:text-xl"
              onClick={() => router.push("/auth/signin")}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
