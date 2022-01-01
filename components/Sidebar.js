import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  ChatAlt2Icon,
  QuestionMarkCircleIcon,
  ViewGridAddIcon,
  SupportIcon,
  SpeakerphoneIcon,
  BookOpenIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import MiniProfile from "./MiniProfile";

function Sidebar() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="text-gray-500 p-5 text-sm border-r overflow-y-scroll scrollbar-hide h-screen min-w-[250px]">
      <div className="space-y-4 mb-10">
        <button className="flex items-center space-x-2 btn">
          <HomeIcon className="h-5 w-5" />
          <p>Your Dashboard</p>
        </button>
        <button className="flex items-center space-x-2 btn">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Products</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center space-x-2 btn"
        >
          <PlusCircleIcon className="h-5 w-5" />
          <p>Sell Products</p>
        </button>
        <button className="flex items-center space-x-2 btn">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Products</p>
        </button>
        <button className="flex items-center space-x-2 btn">
          <ChatAlt2Icon className="h-5 w-5" />
          <p>Enquiries</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
        <button className="flex items-center space-x-2 btn">
          <RssIcon className="h-5 w-5" />
          <p>Blog Feed</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900"></hr>
        <button className="flex items-center space-x-2 btn">
          <ViewGridAddIcon className="h-5 w-5" />
          <p>Request New Category</p>
        </button>
        <button className="flex items-center space-x-2 btn">
          <ViewGridAddIcon className="h-5 w-5" />
          <p>Request New SubCategory</p>
        </button>
        <button className="flex items-center space-x-2 btn">
          <SpeakerphoneIcon className="h-5 w-5" />
          <p>Suggest New Feature</p>
        </button>
        <button className="flex items-center space-x-2 btn">
          <SupportIcon className="h-5 w-5" />
          <p>Improve Local Pasal</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
        <button className="flex items-center space-x-2 btn">
          <BookOpenIcon className="h-5 w-5" />
          <p>Terms and Conditions</p>
        </button>
        <button className="flex items-center space-x-2 btn">
          <QuestionMarkCircleIcon className="h-5 w-5" />
          <p>FAQ</p>
        </button>
        <button className="flex items-center space-x-2 btn">
          <BookOpenIcon className="h-5 w-5" />
          <p>Privacy Policy</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
        {session && (
          <div className="mt-4">
            <MiniProfile />
            <hr className="border-t-[0.1px] border-gray-900 mt-4"></hr>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
