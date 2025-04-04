import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcrypt";
import dbConnect from "./dbConnect";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await dbConnect();

        const { email, password } = credentials;

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid email or paswword");
        }

        if (!user?.password) {
          throw new Error("Please login with the method you signed up!");
        }

        const isPasswordMatched = await bcrypt.compare(
          password,
          user?.password
        );

        if (!isPasswordMatched) {
          throw new Error("Invalid email or password");
        }
        return user;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async singIn({user}){
        await dbConnect();

        const {email} = user;

        let dbUser = await User.findOne({email});

        if(!dbUser){
            dbUser = await User.create({
                email,
                name: user?.name,
            });
        }

        return true;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};