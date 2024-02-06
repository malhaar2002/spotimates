import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-currently-playing",
].join(",");

const params = {
    scope: scopes,
}

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + new URLSearchParams(params).toString() + "&response_type=code&redirect_uri=http://localhost:3000/api/auth/callback/spotify"

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }