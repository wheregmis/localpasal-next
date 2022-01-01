import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
// import Posts from "./Posts";
// import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();
  return (
    // * this will make the style below important and force it and override the previous styles
    <main
      className={`grid grid-cols-1 md:grid-cols-2
    xl:grid-cols-3 mx-auto ${!session && "!grid-cols-1"}`}
    >
      {/* Section*/}
      <section className="col-span-2">
        {/*Posts*/}
        {/* <Posts /> */}
        <h1>Hello</h1>
      </section>

      {/* // * Using if condition*/}
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            {/*Suggestions*/}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
