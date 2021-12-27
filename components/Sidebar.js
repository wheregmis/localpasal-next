import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
function Sidebar() {
  return (
    <div className="text-gray-300 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen ">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Products</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Collection</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Products</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Collections</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>

        <div className="flex items-center justify-center">
          <SparklesIcon className="h-5 w-5"></SparklesIcon>
          <p>Followed Sellers</p>
        </div>

        <hr className="border-t-[0.1px] border-gray-800"></hr>

        {/* Playlists */}
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
        <p className="cursor-pointer hover:text-white">Playlist Name</p>
      </div>
    </div>
  );
}

export default Sidebar;
