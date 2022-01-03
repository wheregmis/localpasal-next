import { signIn } from "next-auth/react";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import Modal from "@components/Modal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

//Browser...
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoginStarted, setIsLoginStarted] = useState(false);
  const router = useRouter();
  const handleLogin = (e) => {
    console.log("pressed");
    e.preventDefault();
    setIsLoginStarted(true);
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  useEffect(() => {
    if (router.query.error) {
      setLoginError(router.query.error);
      setEmail(router.query.email);
    }
  }, [router]);

  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>Local Pasal</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        {/* Page Specific Code */}
        <>
          <div className="flex flex-col items-center justify-start min-h-screen py-2 mt-10 px-14 text-center">
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-2 pb-4
              text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle
              sm:max-w-sm sm:w-full sm:p-6 space-y-10"
            >
              <img className="w-[400px]" src="/assets/localpasal.png" alt="" />
              <div>
                <div className="space-y-2">
                  <div className="">
                    <input
                      className="border-none focus:ring-0 w-full text-center"
                      id="loginEmail"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    ></input>
                  </div>
                  <div className="mt-2">
                    <input
                      className="border-none focus:ring-0 w-full text-center"
                      id="inputPassword"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    ></input>
                  </div>
                  <div className={loginError ? "bg-red-500" : "hidden mt-4"}>
                    <p>{loginError}</p>
                  </div>
                </div>
              </div>

              <div className="items-center justify-evenly space-y-2 -mt-6">
                <button
                  type="button"
                  onClick={(e) => handleLogin(e)}
                  disabled={isLoginStarted}
                  className="inline-flex justify-center w-full rounded-md border border-transparent 
                  shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm 
                  disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300
                  "
                >
                  Login
                  {/* {loading ? "Uploading..." : "Upload Post"} */}
                </button>
                <div className="flex items-center justify-evenly space-x-1">
                  <button
                    type="button"
                    // onClick={(e) => handleLogin(e)}
                    disabled={isLoginStarted}
                    className="inline-flex justify-center w-full rounded-md border border-transparent 
                  shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-900
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm 
                  disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300
                  "
                  >
                    Login with Google
                    {/* {loading ? "Uploading..." : "Upload Post"} */}
                  </button>
                  <button
                    type="button"
                    // onClick={(e) => handleLogin(e)}
                    disabled={isLoginStarted}
                    className="inline-flex justify-center w-full rounded-md border border-transparent 
                  shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-600
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm 
                  disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300
                  "
                  >
                    Login with Facebook
                    {/* {loading ? "Uploading..." : "Upload Post"} */}
                  </button>
                </div>
              </div>
            </div>
            <p className="font-xs italic">
              Local Pasal is a platform for local businesses to connect with
              their customers. It was created by SRHQ Nepal as a single man
              startup so development might take some time
            </p>
          </div>
        </>
      </main>
      <Modal />
    </div>
  );
}

export default SignIn;
