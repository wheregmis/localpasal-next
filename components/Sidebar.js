import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";

function Sidebar() {
  const { data: session, status } = useSession();

  return (
    <div className="text-gray-500 p-5 text-sm border-r overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 btn">
          <HomeIcon className="h-5 w-5" />
          <p>Your Dashboard</p>
        </button>

        <button className="flex items-center space-x-2 btn">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Products</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>

        <button className="flex items-center space-x-2 btn">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Sell Products</p>
        </button>

        <button className="flex items-center space-x-2 btn">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Products</p>
        </button>
        <button className="flex items-center space-x-2 btn">
          <RssIcon className="h-5 w-5" />
          <p>Report Product</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
      </div>
      <div className="mt-4">
        <MiniProfile />
        <hr className="border-t-[0.1px] border-gray-900 mt-4"></hr>
      </div>
    </div>
  );
}

export default Sidebar;
