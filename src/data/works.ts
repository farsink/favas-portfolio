// Recent Works — Instagram embeds shown in the "Recent Works" section.
// Drop public Instagram post/reel URLs here; they render automatically.
// Reels use /reel/ URLs, regular posts use /p/ URLs — both work.

export interface RecentWork {
  url: string;
  /** Show the post caption under the embed (default: true) */
  captioned?: boolean;
}

export const RECENT_WORKS: RecentWork[] = [
  // Add links here, e.g.:
  // { url: "https://www.instagram.com/p/CUbHfhpswxt/", captioned: true },
  // { url: "https://www.instagram.com/reel/XXXXXXXX/", captioned: false },
];
