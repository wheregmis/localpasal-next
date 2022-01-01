import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "../../../firebase";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
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
    signIn: "index",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;

      // also before returning a session, lets add the user to the database
      setDoc(doc(db, "users", token.sub), {
        userId: token.sub,
        userName: token.name,
        userEmail: token.email,
        userImage: token.picture,
        userCreatedAt: serverTimestamp(),
      });
      return session;
    },
  },
});
