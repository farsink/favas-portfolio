// Recent Works — Instagram embeds shown in the "Recent Works" section.
// Drop public Instagram post/reel URLs here; they render automatically.
// Reels use /reel/ URLs, regular posts use /p/ URLs — both work.

export interface RecentWork {
  url: string;
  /** Show the post caption under the embed (default: true) */
  captioned?: boolean;
}

export const RECENT_WORKS: RecentWork[] = [
  {
    url: "https://www.instagram.com/reel/DcgftNzz-U6/",
    captioned: true,
  },
  {
    url: "https://www.instagram.com/reel/DcLxlk3ib6F/",
    captioned: true,
  },
  {
    url: "https://www.instagram.com/reel/DVlAr85k8lv/",
    captioned: true,
  },
  {
    url: "https://www.instagram.com/reel/DO0ywSOj-Gk/?stkn=N2xmZ3FjMXl5bnIy",
    captioned: true,
  },
];
