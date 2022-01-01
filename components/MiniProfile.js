import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex-col items-center justify-center">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full border w-8 h-8 "
          src={session?.user.image}
          alt=""
        />
        <div className="relative mx-4">
          <h2 className="font-bold">{session?.user?.username}</h2>
        </div>
        <button onClick={signOut} className="text-blue-400 font-bold ">
          Sign out
        </button>
      </div>
    </div>
  );
}

export default MiniProfile;
