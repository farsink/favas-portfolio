import { ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";

import { Icons, type IconProps } from "@/components/icons";

type HandleCardProps = Readonly<{
  href: string;
  name: string;
  label: string;
  count: string;
  audienceLabel: string;
  Icon: ComponentType<IconProps>;
  iconBackgroundClassName: string;
}>;

function HandleCard({
  href,
  name,
  label,
  count,
  audienceLabel,
  Icon,
  iconBackgroundClassName,
}: HandleCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex min-h-20 w-full items-center justify-between gap-4 overflow-hidden rounded-[1.35rem] border border-white/50 bg-white/30 px-4 py-3 shadow-[inset_2px_-2px_1px_-1px_rgba(255,255,255,0.9),inset_-2px_2px_1px_-1px_rgba(255,255,255,0.9),inset_0_0_2px_rgba(0,0,0,0.25),0_8px_18px_rgba(0,0,0,0.08)] backdrop-blur-md transition-[transform,background-color,box-shadow] duration-[250ms] hover:-translate-y-0.5 hover:bg-white/45 hover:shadow-[inset_2px_-2px_1px_-1px_rgba(255,255,255,0.95),inset_-2px_2px_1px_-1px_rgba(255,255,255,0.95),inset_0_0_2px_rgba(0,0,0,0.2),0_12px_24px_rgba(0,0,0,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 motion-reduce:transform-none motion-reduce:transition-none dark:border-white/15 dark:bg-white/[0.07] dark:hover:bg-white/[0.11]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[5px] rounded-[1.1rem] border border-white/45 opacity-75 transition-opacity duration-[250ms] group-hover:opacity-100 dark:border-white/20"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.7)_0%,transparent_18%,transparent_82%,rgba(255,255,255,0.7)_100%)] opacity-70 blur-md"
      />

      <span className="relative z-10 flex min-w-0 items-center gap-3">
        <span
          className={`grid size-12 shrink-0 place-items-center rounded-2xl text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] ${iconBackgroundClassName}`}
        >
          <Icon aria-hidden="true" className="size-7" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold tracking-wide text-foreground">
            {name}
          </span>
          <span className="block text-xs text-muted-foreground">{label}</span>
        </span>
      </span>

      <span className="relative z-10 flex shrink-0 items-center gap-2 text-right">
        <span>
          <span className="block text-base font-semibold tabular-nums text-foreground">
            {count}
          </span>
          <span className="block text-xs text-muted-foreground">{audienceLabel}</span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 text-foreground/60 transition-transform duration-[250ms] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </span>
    </a>
  );
}

export function YouTubeSubscriberCard() {
  return (
    <HandleCard
      href="https://youtube.com/@favasstories"
      name="FAVAS STORIES"
      label="YouTube channel"
      count="54.3K"
      audienceLabel="subscribers"
      Icon={Icons.youtube}
      iconBackgroundClassName="bg-[#ff0000] shadow-[0_8px_18px_rgba(255,0,0,0.28)]"
    />
  );
}

export function InstagramFollowerCard() {
  return (
    <HandleCard
      href="https://www.instagram.com/favas_stories?stkn=MWw0enV6NGtqZDlncg=="
      name="@favas_stories"
      label="Instagram profile"
      count="6K"
      audienceLabel="followers"
      Icon={Icons.instagram}
      iconBackgroundClassName="bg-[linear-gradient(135deg,#833ab4_0%,#fd1d1d_52%,#fcb045_100%)]"
    />
  );
}
