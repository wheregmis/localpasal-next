import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

//Browser...
function SignIn({ providers }) {
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
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// passing the provider stuffs from server to client
// now the signin can get access to the providers using props.providers
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
