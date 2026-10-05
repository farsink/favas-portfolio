"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  GridPatternCard,
  GridPatternCardBody,
} from "@/components/ui/card-with-grid-ellipsis-pattern";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Coolshape } from "coolshapes-react";
import { InstagramEmbed } from "react-social-media-embed";
import { RECENT_WORKS } from "@/data/works";
import GradientText from "@/lib/GradiantText";
import TextPressure from "@/lib/TextPressure";
import { useTheme } from "next-themes";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;

interface RoleCardProps {
  solidBrackets: "top" | "bottom";
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

function RoleCard({ solidBrackets, title, subtitle, description, skills }: RoleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <GridPatternCard className='h-full' solidBrackets={solidBrackets}>
      <GridPatternCardBody className="relative pb-16">
        <h3 className='mb-1 text-base font-semibold text-foreground'>
          {title}
        </h3>
        <p className='mb-4 text-sm font-medium text-muted-foreground'>
          {subtitle}
        </p>
        <p className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'>
          {description}
        </p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-6"
            >
              <h4 className="mb-3 text-sm text-foreground/70">Skillset & tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground bg-background"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 border border-border bg-background hover:bg-muted/50 transition-colors cursor-pointer"
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </button>
      </GridPatternCardBody>
    </GridPatternCard>
  );
}

export default function Page() {
  const { theme } = useTheme();

  return (
    <main className='flex flex-col min-h-[100dvh] space-y-10'>
      <section id='hero'>
        <div className='mx-auto w-full max-w-2xl space-y-8'>
          <div className='gap-2 flex justify-between'>
            <div className='flex-col flex flex-1 space-y-1.5'>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <TextPressure
                  text="Hi! I'm Favas K"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor={theme === "light" ? "black" : "white"}
                  strokeColor='#ff0000'
                  minFontSize={36}
                />
              </BlurFade>
              <BlurFadeText
                className='max-w-[600px] md:text-xl'
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className='size-28 border'>
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id='about'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className='text-xl font-bold'>About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
          <p className='mt-4 max-w-[600px] text-muted-foreground md:text-lg/relaxed'>
            Creative and detail-oriented Social Media Manager, Content
            Creator, and Wedding Photographer with strong skills in
            photography, videography, editing, and digital marketing.
            Experienced in managing social media accounts, producing
            high-quality visual content, and growing online engagement. Adept
            in using professional editing tools and creating content that
            aligns with brand identity.
          </p>
        </BlurFade>
        <div className='mt-4 flex flex-col w-full mx-auto'>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <RoleCard
              solidBrackets="top"
              title="SOCIAL MEDIA & CONTENT"
              subtitle="Management, strategy & brand storytelling"
              description="Managing and growing social media accounts across Instagram, TikTok, and Facebook. Planning content calendars, crafting brand-aligned strategies, and tracking insights and analytics to improve reach and engagement."
              skills={[
                "Social Media Management", "Content Creation",
                "Content Planning & Scheduling", "Meta Ads",
                "Analytics & Performance Tracking", "Branding"
              ]}
            />
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <RoleCard
              solidBrackets="bottom"
              title="PHOTOGRAPHY & VIDEO"
              subtitle="Wedding, event & commercial visuals"
              description="Capturing high-quality wedding and event photography, producing reels and short-form video, and delivering polished albums and highlight films. Creative direction on shoots with professional editing in Lightroom, Photoshop, and Final Cut."
              skills={[
                "Photography & Videography", "Photo & Video Editing",
                "Reels / Short-form Video", "Adobe Lightroom",
                "Photoshop", "Final Cut", "CapCut"
              ]}
            />
          </BlurFade>
        </div>
      </section>
      <section id='work'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className='text-xl font-bold'>Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id='education'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className='text-xl font-bold'>Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id='skills'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className='text-xl font-bold'>Skills</h2>
          </BlurFade>
          <div className='flex flex-wrap gap-1'>
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id='projects'>
        <div className='space-y-12 w-full py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                  Recent Works
                </div>

                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl'>
                  A look at my recent works
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  A selection of recent works — brand content, social media
                  campaigns, and shoots I&apos;ve done recently.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 max-w-[800px] mx-auto justify-items-center'>
            {RECENT_WORKS.length === 0 && (
              <p className='text-muted-foreground sm:col-span-2'>
                New works are being added — check back soon.
              </p>
            )}
            {RECENT_WORKS.map((work, id) => (
              <BlurFade
                key={work.url}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className='overflow-hidden rounded-lg border bg-background'
                >
                  <InstagramEmbed
                    url={work.url}
                    width={328}
                    captioned={work.captioned ?? true}
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id='contact'>
        <div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                Contact
              </div>
              <GradientText
                colors={["#9e0059", "#ff0054", "#ff5400", "#ffbd00", "#390099"]}
                animationSpeed={3}
                showBorder={false}
                className='text-3xl font-medium  font-sans tracking-tighter sm:text-5xl'
              >
                <h1>Get in touch</h1>
              </GradientText>
              <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.whatsapp.url}
                  className='text-blue-500 hover:underline'
                >
                  Whatsapp
                </Link>{" "}
                or reach out to me at{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className='text-blue-500 hover:underline'
                >
                  {DATA.contact.email}{" "}
                </Link>
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
