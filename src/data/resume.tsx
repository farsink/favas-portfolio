import { Icons } from "@/components/icons";
import { Code, HomeIcon, NotebookIcon } from "lucide-react";
import type { ReactNode } from "react";

// Type definitions for strict typing
type IconType = typeof Icons[keyof typeof Icons];

interface NavbarItem {
  href: string;
  icon: typeof HomeIcon | typeof Code;
  label: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  navbar: boolean;
}

interface Contact {
  email: string;
  tel: string;
  social: Record<string, SocialLink>;
}

interface WorkExperience {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

interface ProjectLink {
  type: string;
  href: string;
  icon: ReactNode;
}

interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  video: string;
}

interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: NavbarItem[];
  contact: Contact;
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
}

export const DATA: ResumeData = {
  name: "Favas K",
  initials: "FK",
  url: "https://favask.dev",
  location: "Doha, Qatar",
  locationLink: "https://www.google.com/maps/place/Doha,+Qatar",
  description:
    "Social Media Manager | Content Creator | Wedding Photographer\n\nCreating high-quality visual content and brand-aligned strategies that grow online engagement across platforms.",
  summary:
    "A creative and detail-oriented Social Media Manager, Content Creator, and Wedding Photographer with strong skills in photography, videography, editing, and digital marketing.\n\nExperienced in managing social media accounts across Instagram, TikTok, and Facebook, producing high-quality visual content, and growing online engagement. Work spans freelance content creation, wedding and event photography, and brand-aligned content strategy.\n\nAreas of Expertise\n\n - Social media management: account growth, content calendars, hashtag strategy, posting schedules\n\n - Content creation: photo and video production tailored to each brand's audience\n\n - Photography: wedding and event coverage with creative direction on shoots\n\n - Post-production: Lightroom, Photoshop, CapCut, and Final Cut editing, albums, reels, and highlight videos\n\n - Performance: insights and analytics tracking to improve reach and engagement\n\nOpen to collaborations that need a steady eye, consistent content, and a brand presence that holds its weight.",
  avatarUrl: "/favas.jpg",
  skills: [
    // Core
    "Social Media Management",
    "Content Creation",
    "Photography & Videography",
    "Photo & Video Editing",
    "Branding & Visual Storytelling",
    "Reels / Short-form Video Production",
    "Content Planning & Scheduling",
    "Analytics & Performance Tracking",
    // Tools
    "Adobe Creative Suite",
    "Lightroom",
    "Photoshop",
    "Final Cut",
    "CapCut",
    "Meta Ads",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: Code, label: "Works" },
  ],
  contact: {
    email: "favas7700@gmail.com",
    tel: "+974 30792978",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/farsink",
        icon: Icons.github,

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/farsinkonnadan",
        icon: Icons.linkedin,

        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/farsin360",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@favasstories",
        icon: Icons.youtube,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/favastories",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/97430792978",
        icon: Icons.whatsapp,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Perinthalmanna, India",
      title: "Content Creator & Social Media Manager",
      logoUrl: "https://www.google.com/s2/favicons?domain=instagram.com&sz=128",
      start: "2022",
      end: "2025",
      description:
        "Managed and grew clients' social media accounts across Instagram, TikTok, and Facebook. Created engaging photo and video content tailored to each brand's audience. Planned content calendars, hashtags, and posting schedules. Tracked insights and analytics to improve reach and engagement. Collaborated with clients to develop brand-aligned content strategies.",
    },
    {
      company: "Flashy Filters Wedding Company",
      href: "https://flashyfilters.in",
      badges: [],
      location: "Perinthalmanna, India",
      title: "Wedding & Event Photographer",
      logoUrl: "https://www.google.com/s2/favicons?domain=flashyfilters.in&sz=128",
      start: "2023",
      end: "2025",
      description:
        "Captured high-quality wedding and event photography following clients' style preferences. Edited and retouched photos using Lightroom and Photoshop. Delivered albums, reels, and highlight videos on time. Provided creative direction during shoots to achieve desired results.",
    },
  ],
  education: [
    {
      school: "Flashyfilters.in Wedding Company",
      href: "https://flashyfilters.in",
      degree: "Photography and Photo Editing",
      logoUrl: "https://www.google.com/s2/favicons?domain=flashyfilters.in&sz=128",
      start: "2023",
      end: "2025",
    },
    {
      school: "North East Christian University",
      href: "https://www.necuniversity.in",
      degree: "Bachelor's of Commerce",
      logoUrl: "https://www.google.com/s2/favicons?domain=necuniversity.in&sz=128",
      start: "2014",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Workinng - Local-First Time Logging",
      href: "https://workinng.netlify.app/",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "A local-first, multi-device time tracking Progressive Web App (PWA) built for seamless offline and online synchronization. It automatically logs daily work hours, handles offline edits with queued background sync, and prevents data loss through a resilient cloud architecture. Features federated login, intelligent conflict resolution, and a Universal SSR Nuxt setup.",
      technologies: [
        "Vue 3",
        "Nuxt",
        "TypeScript",
        "Dexie.js (IndexedDB)",
        "Dexie Cloud",
        "Pinia",
        "PWA",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/farsink/work-time",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
      video: "/timetracker-walkthrough.mp4",
    },
    {
      title: "Entetile – The Complete Tile Business Management System",
      href: "https://www.entetile.com",
      dates: "July 2025",
      active: true,
      description:
        "A robust, cloud-based B2B SaaS solution tailored for the tile industry, streamlining stock and inventory management, quotations, deliveries, credit management, and lead CRM. Features multi-location godown tracking, automated estimate makers, creditor payment tracking, role-based dashboards, delivery logistics, low stock alerts, stock blocking, damage tracking, and third-party integrations with Razorpay and Stripe. Designed to modernize tile business operations across Kerala with scalability for pan-India and global expansion.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Vercel",
        "Razorpay",
        "Stripe",
        "SMTP",
        "Role-based Access Control",
        "SSL",
      ],
      links: [
        {
          type: "Live",
          href: "https://www.entetile.com",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/drug15xds/video/upload/v1764070178/entetile_n6f0al.mov",
    },
    {
      title: "AI-Powered Fitness & Workout Personalization Platform",
      href: "https://agilixworkouts.netlify.app/",
      dates: "In progress",
      active: true,
      description:
        "Developed a scalable full-stack web application using Next.js, React, Node.js, and Express with TypeScript. Built AI-driven workout plan generation and intelligent onboarding with N8N workflows. Implemented dual database architecture with PostgreSQL for transactions and authentication, and MongoDB for profiles and metrics. Features JWT authentication, StackAuth, WebSockets, secure webhook automation, and industry-standard security practices.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "TypeScript",
        "Prisma",
        "Mongoose",
        "PostgreSQL",
        "MongoDB",
        "JWT",
        "StackAuth",
        "WebSockets",
        "N8N",
        "Radix UI",
        "Framer Motion",
        "Tailwind CSS",
        "Svix",
        "Zod",
        "Helmet",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/agilix.webp",
      video: "",
    },
    {
      title: "Pariyapuram Super League",
      href: "https://pariyapuramsuperleague.netlify.app/",
      dates: "Jan 2025 - Apr 2025",
      active: true,
      description:
        "A comprehensive full-stack web application for football tournament management. It features fixture scheduling, player bidding, live streaming, ticket sales, and news updates. A secure bidding and ticketing system using Stripe processed over $50K in sales with a 98% success rate, leveraging YouTube Live, Twitch APIs, and n8n for automation.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "YouTube Live API",
        "Twitch API",
        "n8n ai-agents",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/farsink/Pariyapuram-Super-League.git",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image:
        "https://res.cloudinary.com/drug15xds/image/upload/v1741681669/project-video_dkmj26.gif",
      video: "",
    },
    {
  title: "Outfynd - Hyper-Local Fashion Marketplace",
  href: "https://www.outfynd.in/",
  dates: "Jul 2024 - Jul 2024",
  active: true,
  description:
    "A hyper-local fashion discovery platform connecting small clothing businesses with customers through an online marketplace. Features animated blob backgrounds with Framer Motion, smooth Lenis scrolling, comprehensive seller dashboard for product management, real-time order tracking, and integrated buyer-seller chat. Empowers local boutiques to compete digitally with zero coding required.",
  technologies: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lenis",
    "Radix UI",
    "Lucide Icons",
  ],
  links: [],
  image: "",
  video: "https://res.cloudinary.com/drug15xds/video/upload/v1765961727/outfynd-out_fomyo5.mov"
},
{
  title: "Pips Theory - Multilingual Trading Education Platform",
  href: "http://pipstheory.com/",
  dates: "Aug 2024 - Nov 2024",
  active: true,
  description:
    "A comprehensive trading education platform offering courses in English, Malayalam, Hindi, and Tamil. Features secure video streaming with DRM protection via TP Streams, user authentication with protected routes, course purchase and management system, payment tracking with statistics, and interactive video lessons. Built with Redux state management, React Query for data fetching, and GSAP animations for premium user experience.",
  technologies: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Redux Toolkit",
    "TanStack Query",
    "Vidstack Player",
    "GSAP",
    "Radix UI",
    "Axios",
    "React Hook Form",
    "Zod",
    "Tailwind CSS",
    "Embla Carousel",
  ],
  links: [],
  image: "",
  video : "https://res.cloudinary.com/drug15xds/video/upload/v1765959764/1217_wwqjyc.mov"
},
    {
  title: "Midas Gold Point - Digital Gold Trading Platform",
  href: "https://www.midasgoldpoint.com",
  dates: "Sep 2024 - Oct 2024",
  active: true,
  description:
    "A real-time gold trading platform enabling users to buy, sell, store, and release gold with live rate tracking across 16 purity grades (9K-24K). Features interactive price charts with historical analysis, lead generation forms, contact management, and blog system. Delivers optimized user experience through dynamic content loading and server-side rendering.",
  technologies: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Recharts",
    "Axios",
    "GSAP",
    "Swiper",
    "Node.js",
  ],
  links: [],
  image : "",
  video : "https://res.cloudinary.com/drug15xds/video/upload/v1765959704/1217_4_u0ojf6.mov"
},
{
  title: "Aman Enterprises - B2B E-Commerce Platform",
  href: "https://www.amanenterprisespgi.in/",
  dates: "Jul 2024 - Jul 2024",
  active: true,
  description:
    "A modern B2B e-commerce platform for enterprise product showcase and lead generation. Features headless CMS integration via Storyblok for dynamic content management, interactive product galleries with masonry layouts, and comprehensive business pages including services, team profiles, and company history. Built with performance optimization through server-side rendering and component-based architecture.",
  technologies: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Storyblok CMS",
    "Swiper",
    "Radix UI",
    "Lucide Icons",
    "Styled Components",
  ],
  links: [],
  image: "",
  video : "https://res.cloudinary.com/drug15xds/video/upload/v1765959763/1217_3_zzoxh0.mov"
},
    {
      title: "AI-Powered Sign Language Detection",
      href: "#ai-sign-language-detection",
      dates: "Sep 2023 - Dec 2023",
      active: false,
      description:
        "Developed an AI solution for real-time sign language gesture recognition using CNNs and RNNs. Achieved 95% accuracy, enhancing user experience by 50% and increasing daily usage by 30%.",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "Tkinter",
        "Keras",
        "Scikit-learn",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/farsink/AI-Powered-Sign-Language-Detection-and-Conversion.git",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/Sign_AI.jpg",
      video: "",
    },
    {
  title: "D Dot Makeover Studio - Luxury Beauty & Grooming Website",
  href: "https://www.ddotmakeoverstudio.com/",
  dates: "Feb 2025 - Mar 2025",
  active: true,
  description:
    "A premium makeover studio website highlighting professional hair, makeup, bridal, and grooming services with a strong focus on client trust and experience. Features service-based navigation for men and women, embedded Instagram reels to showcase real transformations, location highlights for multiple branches, testimonial slider, blog-driven SEO content, and an integrated contact form with map, call, and WhatsApp actions. Designed to position the brand as a luxury-yet-accessible studio with over 10 years of industry experience and a customer-first approach.",
  technologies: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Framer Motion / GSAP (if used)",
    "Axios / Fetch API",
    "Vercel",
    "Instagram Embed / oEmbed",
    "Responsive Web Design",
    "SEO Optimization"
  ],
  links: [],
  image: "",
  video: "https://res.cloudinary.com/drug15xds/video/upload/v1765959760/1217_2_sbixzr.mov"
}
,
    {
      title: "Socium - Social Media Dashboard",
      href: "https://github.com/farsink/Socium-dev",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Monitor real-time engagement across Twitter, Instagram, and YouTube with interactive charts and AI-driven insights. Securely analyze 15K+ monthly posts, optimize strategies via role-based access, and export actionable reports—all in one centralized dashboard ",
      technologies: [
        "React",
        "TypeScript",
        "Recharts",
        "Node.js",
        "next.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "OAuth 2.0",
        "Passport.js",
        "WebSocket",
        "Nodemailer",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/farsink/Socium-dev",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/Socium.png",
      video: "",
    },
  ],
} as const;
