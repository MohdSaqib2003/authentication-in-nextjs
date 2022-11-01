import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github';
import FacebookProvider from "next-auth/providers/facebook";

const GOOGLE_CLIENT_ID = "add_google_client_id_here";
const GOOGLE_CLIENT_SECRET = "add_google_client_secret_here";

const FACEBOOK_CLIENT_ID = "add_FACEBOOK_CLIENT_id_here";
const FACEBOOK_CLIENT_SECRET = "add_FACEBOOK_CLIENT_secret_here";

const GITHUB_CLIENT_ID = "add_GITHUB_client_id_here";
const GITHUB_CLIENT_SECRET = "add_GITHUB_client_secret_here";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)