let base64 = require("base-64");

export default function properCase(text) {
  let first = text[0].toUpperCase();
  let rest;
  if (text.includes("js")) {
    rest = text.replace("js", "JS");
  } else if (text.includes("css")) {
    rest = text.replace("css", "CSS");
  } else if (text.includes("html")) {
    rest = text.replace("html", "HTML");
  } else if (text.includes("javascript")) {
    rest = text.replace("javascript", "JavaScript");
  } else {
    rest = text.replace("db", "DB");
  }

  return rest.replace(rest[0], first);
}

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = base64.encode(`${client_id}:${client_secret}`);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getGithubStars = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const repositories = await response.json();
  let totalStars = 0;
  for (let i = 0; i < repositories.length; i++) {
    totalStars += repositories[i].stargazers_count;
  }
  //Account for Roslyn Code Club organization
  const codeclub = await fetch(
    "https://api.github.com/repos/Roslyn-Code-Club/roslyncode.club",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const codeclubJson = await codeclub.json();
  totalStars += codeclubJson.stargazers_count;
  return totalStars;
};

export const getGithubForks = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const repositories = await response.json();
  let totalForks = 0;
  for (let i = 0; i < repositories.length; i++) {
    totalForks += repositories[i].forks_count;
  }
  //Account for Roslyn Code Club organization
  const codeclub = await fetch(
    "https://api.github.com/repos/Roslyn-Code-Club/roslyncode.club",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const codeclubJson = await codeclub.json();
  totalForks += codeclubJson.forks_count;
  return totalForks;
};

export const getGithubRepos = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const repositories = await response.json();
  const codeclub = await fetch(
    "https://api.github.com/repos/Roslyn-Code-Club/roslyncode.club",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const codeclubJson = await codeclub.json();
  repositories.push(codeclubJson);
  return repositories;
};
