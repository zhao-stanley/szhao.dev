# szhao.dev
Repository for my portfolio created with Next.js, styled with TailwindCSS, and deployed with Vercel.

#### Features:
- GitHub repository stats
- Real-time Spotify activity
- Blog system with drafts and search
- GitHub repository display + support for manually adding repositories/projects


If you plan on forking this, you will need the following tokens in your `.env`:

    GITHUB_TOKEN
    SPOTIFY_REFRESH_TOKEN
    SPOTIFY_CLIENT_ID
    SPOTIFY_CLIENT_SECRET

### How to get the tokens: 
- `GITHUB_TOKEN`: GitHub access token you can get by Clicking your profile picture in the top right > Settings >  Developer Settings > Personal Access Tokens > Tokens (classic) > Generate new token
	- Make sure the token has the scope `read:user`
- `SPOTIFY_REFRESH_TOKEN`: Follow [this guide's second approach](https://musing.vercel.app/blog/spotify-refresh-token).
- `SPOTIFY_CLIENT_ID`: [Register a new app here](https://developer.spotify.com/dashboard/)
- `SPOTIFY_CLIENT_SECRET`: Once you've registered your app on Spotify, click `SHOW CLIENT SECRET`.
