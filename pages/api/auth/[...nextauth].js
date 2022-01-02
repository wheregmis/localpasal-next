import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),

    // ...add more providers here
    CredentialsProvider({
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch("https://localpasal.herokuapp.com/login", {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        console.log(res);
        const user = await res.json();

        // // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // // Redirecting to the login page with error messsage in the URL
        throw new Error(res.json());
      },
    }),
  ],
  // * if you wanna use the default login screen provided by next-auth
  // theme:{
  //   logo: '/logo.png',
  //   brandColor: '#00bcd4',
  //   colorScheme: 'dark', // or auto or light
  // }

  pages: {
    // the convention is to use signin inside the pages folder under auth
    //
    signIn: "/auth/signin",
    error: "/error",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      session.refresh_token = token.refresh_token;
      session.access_token = token.access_token;
      session.user.uid = token.refresh_token;
      session.user = token.user;
      return session;
    },
  },
});
