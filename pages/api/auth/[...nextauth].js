import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
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
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await axios.post(
          "https://localpasal.herokuapp.com/login",
          {
            email: credentials.email,
            password: credentials.password,
          },
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        // .then(function (response) {
        //   console.log(response);
        //   const user = response.data;
        //   return user;
        // })
        // .catch(function (error) {
        //   console.log(error);
        //   // throw new Error(errorMessage + "&email=" + credentials.email);
        // });

        if (res.statusText === "OK") {
          const user = res.data;
          return user;
        } else {
          throw new Error(res.data);
        }
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
    error: "/auth/signin",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      // initial signin
      // Persist the OAuth access_token to the token right after signin

      if (account && user) {
        console.log("initial signin");
        token.accessToken = user.access_token;
        token.refreshToken = user.refresh_token;
        token.user = user.user;
        token.expires_at = user.expires_at;
        return token;
      }

      console.log("refreshed signin");
      console.log(token.expires_at);
      console.log(Date.now());

      // return token;
      // Returns the previous token if the access token has not expired
      if (Date.now() < token.expires_at) {
        console.log("EXISTING ACCESS TOKEN IN VALID");
        return token;
      }
      console.log("Token not valid ACCESS TOKEN IN VALID");
      return token;

      // //ACCESS TOKEN HAS EXPIRED, SO WE NEED TO REFRESH IT
      // console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING");
      // return await refreshAccessTokenCustom(token);
    },

    async session({ session, token }) {
      session.refresh_token = token.refreshToken;
      session.access_token = token.accessToken;
      session.user.uid = token.user._id;
      session.user.username = token.user.fullName;
      session.user.image = token.user.userImage;
      return session;
    },
  },
});
