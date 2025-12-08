
import mudassirflixvideo from '/movie-app.mp4';
import worldInfoVideo from '/worldInfo-website.mp4'
import CurrencyConverterPic from '/CurrencyCoverter.png'
import HealthBuddyThumbnail from '/healthbuddythumbnail.png'
export const projects = [
    {
      id: 1,
      title: "Health-Buddy-App",
      desc: "HealthBuddy is a full-stack health management web app where users can upload and store their medical reports and vitals securely. The system uses AI to analyze health data, detect abnormal values, generate summaries, suggest doctor questions, and recommend foods.Vitals analysis provides immediate actions, lifestyle advice, nutrition & fitness guidance, and risk assessment.Includes JWT authentication and complete email-based password reset system.",
      stack: ["React", "Tailwind", "Node.js","Express.js","MangoDB","AI Integrations"],
      link: "https://healthbuddyapp.onrender.com",
      repo: "https://github.com/mudassirali22/Health-Buddy-App",
      image:   HealthBuddyThumbnail,
      type:'image',
      category: 'Fullstack'
    },
    {
      id: 2,
      title: "WorldInfo",
      desc: "A React-based multi-page website that displays facts and detailed information about all countries using the REST Countries API. Built with React , React Router and Tailwind CSS.",
      stack: ["React", "Tailwind", "REST Countries API"],
      link: "https://countryfactswebsite.vercel.app",
      repo: "https://github.com/yourname/devfolio",
      image: worldInfoVideo,
      type:'video',
      category: 'frontend'
    },
  {
    id: 3,
    title: "MudassirFlix",
    desc: "MudassirFlix — a movie info web app built with React, Tailwind CSS, React Router, and API data.",
    stack: ["React", "Tailwind","OMDB Movies API"],
    link: "https://mudassirflix.vercel.app",
    repo: "https://github.com/mudassirali22/MudassirFlix",
    image: mudassirflixvideo,
    type:'video',
    category: 'frontend'
  },

  {
    id: 4,
    title: "Currency Converter",
    desc: "A simple and responsive Currency Converter Web App that allows users to convert between different currencies in real-time.Built with HTML, CSS, and JavaScript",
    stack: [" HTML", "CSS", "JavaScript"],
    link: "https://currencyconverter321.netlify.app",
    repo: "https://github.com/mudassirali22/Currency-Converter",
    image: CurrencyConverterPic,
    category: 'frontend',
    type:'image'
  },
];

export const skills = [
  { id: 1, name: "Html", level: 95 },
  { id: 8, name: "Pyhton", level: 80 },
  { id: 2, name: "css", level: 95 },
  { id: 3, name: "React", level: 90 },
  { id: 4, name: "Tailwind", level: 95 },
  { id: 5, name: "Node.js", level: 90 },
  { id: 6, name: "Express.js", level: 90 },
  { id: 7, name: "MongoDB", level: 95 },

];

export const Education_fields = [

  {
    id: 1,
    course: "FullStack Development",
    institute: "saylani Mass IT Training Centre",
    time: "2024 — 2025",
    certificate : "certified"
  },
  {
    id: 2,
    course: "Python Development",
    institute: "NED Academy",
    time: "2025 Sep — 2025 Nov",
    certificate : "certified"
  },
    {
    id: 3,
    name: "Intermediate",
    institute: " board of  intermediate Larkana Board ",
    time: "2023 — 2024",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mudassirali22",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mudassir-a-ba721830b",
    icon: "Linkedin"
  },
  {
    name: "Email",
    url: `mailto:${import.meta.env.VITE_EMAIL}`,
    icon: "Mail"
  }
];