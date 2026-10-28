import agency from "@/assets/agency.jpg.asset.json";
import bootstrap2 from "@/assets/bootstrap2.jpg.asset.json";
import fontcards from "@/assets/fontcards.jpg.asset.json";
import gallery from "@/assets/gallery.jpg.asset.json";
import gridshoes from "@/assets/gridshoes.jpg.asset.json";
import grocery from "@/assets/grocery.jpg.asset.json";
import portrait from "@/assets/portrait.jpg.asset.json";
import profilecard from "@/assets/profilecard.jpg.asset.json";

export const profile = {
  name: "Rida Fatima",
  mark: "R",
  role: "Front-End Web Developer",
  email: "ridafatimaa.wahab7819@gmail.com",
  github: "https://github.com/RidaFatima00?tab=repositories",
  netlify: "https://app.netlify.com/teams/ridafatimaa-wahab7819/projects",
  lede: "I’m Rida Fatima. I design and build clean, responsive web pages with HTML and CSS, from card layouts to image galleries, and publish them on Netlify.",
  statement:
    "I enjoy turning simple ideas into tidy, colourful pages, and I care about how a page feels on a phone as much as on a desktop.",
  note: "I pay close attention to layout and typography. My projects are live on Netlify, so you can open any of them and see how they work.",
};

export const portraitImage = { src: portrait.url, alt: "Portrait of Rida Fatima" };

export const ledger = [
  { label: "Role", value: "Front-End Developer" },
  { label: "Focus", value: "HTML, CSS & responsive layouts" },
  { label: "Hosting", value: "Netlify" },
  { label: "Live projects", value: "7 sites" },
];

export const facts = [
  { label: "Role", value: profile.role, href: undefined },
  { label: "Focus", value: "HTML, CSS, responsive layouts", href: undefined },
  { label: "Hosting", value: "Netlify", href: undefined },
  { label: "GitHub", value: "github.com/RidaFatima00", href: profile.github },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export type Project = {
  n: string;
  title: string;
  blurb: string;
  image: { src: string; alt: string };
  href: string | undefined;
  tech: string;
};

export const projects: Project[] = [
  {
    n: "01",
    title: "Bootstrap Agency Website",
    tech: "Bootstrap",
    blurb:
      "A dark, modern agency landing page built with Bootstrap, with a hero section, navigation and trusted-brands row.",
    image: { src: agency.url, alt: "Canvix agency website homepage" },
    href: "https://bootstrap-agency-website.netlify.app/",
  },
  {
    n: "02",
    title: "Grocery Website",
    tech: "HTML & CSS",
    blurb: "A grocery store homepage with a hero banner, offers and category cards.",
    image: { src: grocery.url, alt: "Fresh grocery website homepage" },
    href: "https://rida-fatima-grocery-website.netlify.app/",
  },
  {
    n: "03",
    title: "Bootstrap Website 2",
    tech: "Bootstrap",
    blurb: "A responsive app landing page with download buttons and a phone sign-up bar.",
    image: { src: bootstrap2.url, alt: "App website homepage" },
    href: "https://rida-fatima-bootstrap-website-2.netlify.app/",
  },
  {
    n: "04",
    title: "Profile Card",
    tech: "HTML & CSS",
    blurb: "A personal profile card on a sunset background.",
    image: { src: profilecard.url, alt: "Profile card page with sunset background" },
    href: "https://profile-card-netlify.netlify.app/",
  },
  {
    n: "05",
    title: "Font Styles Cards",
    tech: "Google Fonts",
    blurb: "Six shoe cards, each set in a different Google or CSS font.",
    image: { src: fontcards.url, alt: "Six coloured font-style cards for shoe types" },
    href: undefined,
  },
  {
    n: "06",
    title: "Grid Shoes",
    tech: "CSS Grid",
    blurb:
      "A shoe showcase built with CSS Grid: a feature row on top and three equal cards below.",
    image: { src: gridshoes.url, alt: "Shoe grid layout with a Nike shoes feature" },
    href: "https://grid-shoes-netlify.netlify.app/",
  },
  {
    n: "07",
    title: "Image Gallery",
    tech: "CSS Grid",
    blurb: "A nine-photo gallery of landscapes, storms and mountains.",
    image: { src: gallery.url, alt: "Image gallery of nature photos" },
    href: "https://rida-fatima-image-gallery-netlify.netlify.app/",
  },
];

export const skills = [
  { n: "01", name: "HTML5", detail: "Semantic, accessible page structure" },
  { n: "02", name: "CSS3", detail: "Styling, colour and typography" },
  { n: "03", name: "CSS Grid & Flexbox", detail: "Card layouts, galleries and feature rows" },
  { n: "04", name: "Responsive design", detail: "Pages that work on phones and desktops" },
  { n: "05", name: "Bootstrap", detail: "Agency and app landing pages" },
  { n: "06", name: "Google Fonts", detail: "Type pairing and font-style experiments" },
  { n: "07", name: "GitHub & Netlify", detail: "Version control and live deployment" },
];

export const channels = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "Netlify", href: profile.netlify },
];
