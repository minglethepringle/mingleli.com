export type ProjectLink = {
  type: "github" | "youtube" | "globe";
  href: string;
};

export type Project = {
  title: string;
  image: string;
  alt: string;
  description: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "WHSRemote",
    image: "/media/projects/whsremote.png",
    alt: "WHSRemote",
    description: "Helping Wayland High students navigate remote learning.",
    links: [
      { type: "github", href: "https://github.com/WHSRemote" },
      {
        type: "youtube",
        href: "https://www.youtube.com/playlist?list=PL5Y2tGfke7b720jp0GcGiOTQhT_SCItpA",
      },
    ],
  },
  {
    title: "SapporoKaraoke",
    image: "/media/projects/sapporokaraoke.png",
    alt: "SapporoKaraoke",
    description: "A custom solution for weekend karaoke at Sapporo Restaurant.",
    links: [
      { type: "github", href: "https://github.com/minglethepringle/SapporoKaraoke" },
      { type: "youtube", href: "https://www.youtube.com/watch?v=SNaTGgaWSRY" },
    ],
  },
  {
    title: "WHSAssassin",
    image: "/media/projects/whsassassin.png",
    alt: "WHSAssassin",
    description:
      "Automated Senior Assassin gameplay for Wayland High School Class of 2021.",
    links: [{ type: "github", href: "https://github.com/minglethepringle/WHSAssassin" }],
  },
  {
    title: "TextTheWeather",
    image: "/media/projects/texttheweather.png",
    alt: "TextTheWeather",
    description:
      "Never forget to check the weather again. Now, the weather comes to you.",
    links: [
      { type: "github", href: "https://github.com/minglethepringle/TextTheWeather" },
    ],
  },
  {
    title: "EarthEyes",
    image: "/media/projects/eartheyes.png",
    alt: "EarthEyes",
    description:
      "A hackathon project to merge recycling and AI. Second place at MetroHacks.",
    links: [
      { type: "github", href: "https://github.com/minglethepringle/EarthEyes" },
      { type: "youtube", href: "https://www.youtube.com/watch?v=RS1ekTo6DqM" },
    ],
  },
  {
    title: "TranslatifierBot",
    image: "/media/projects/translatifierbot.png",
    alt: "TranslatifierBot",
    description:
      "A Reddit copypasta bot with the power of Google Translate (but it's not fluent).",
    links: [
      { type: "github", href: "https://github.com/minglethepringle/TranslatifierBot" },
    ],
  },
  {
    title: "Midnight Munchies",
    image: "/media/projects/midnightmunchies.png",
    alt: "Midnight Munchies",
    description:
      "Play as a hungry Northeastern University student in a post-apocalyptic world!",
    links: [
      { type: "github", href: "https://github.com/minglethepringle/MidnightMunchies" },
      { type: "youtube", href: "https://www.youtube.com/watch?v=2mRnG105lcA" },
      { type: "globe", href: "https://amaan630.itch.io/midnight-munchies" },
    ],
  },
  {
    title: "ball.io",
    image: "/media/projects/ballio.png",
    alt: "ball.io",
    description:
      "A simple collision avoidance game, created with Processing in 8th grade. Play now!",
    links: [
      { type: "github", href: "https://github.com/minglethepringle/ball.io" },
      { type: "globe", href: "http://ball.eu5.org/" },
    ],
  },
  {
    title: "BirdWatcherPi",
    image: "/media/projects/birdwatcherpi.png",
    alt: "BirdWatcherPi",
    description:
      "A smart bird feeder camera that detects, records and sends email notifications.",
    links: [
      { type: "github", href: "https://github.com/minglethepringle/BirdWatcherPi" },
    ],
  },
];
