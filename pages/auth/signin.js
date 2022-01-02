import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center">
        <img className="w-[400px]" src="/assets/localpasal.png" alt="" />
        <p className="font-xs italic">
          Local Pasal is a platform for local businesses to connect with their
          customers. It was created by SRHQ Nepal as a single man startup so
          development might take some time
        </p>
        <div className="mt-40">
          {/* <div>
            <button
              className="p-3 bg-blue-500 rounded-lg text-white"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Sign in with Google
            </button>
          </div> */}
          <div className="flex-col">
            <label htmlFor="loginEmail">Email</label>
            <input
              id="loginEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={loginError ? "bg-red-500" : ""}
            />
            <span className="bg-red-500">{loginError}</span>
            <label htmlFor="inputPassword">Password</label>
            <input
              id="inputPassword"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={(e) => handleLogin(e)}
              disabled={isLoginStarted}
              className="p-3 bg-blue-500 rounded-lg text-white"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
