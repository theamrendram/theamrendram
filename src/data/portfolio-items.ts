import acubemart from "@/public/portfolio/acubemart.png";
import syncsales from "@/public/portfolio/syncsales.png";
import dssywlc from "@/public/portfolio/dssywlc.png";
import teachme from "@/public/portfolio/teachme.png";
export interface PortfolioItem {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    name: "Acubemart: E-commerce Platform",
    description:
      "A full-featured online shopping platform built with Next.js and razorpay",
    image: acubemart.src,
    link: "https://acubemart.in",
  },
  {
    id: "2",
    name: "Syncsales: Lead Management Dashboard",
    description: "CRM dashboard for managing sales leads and customer data",
    image: syncsales.src,
    link: "https://syncsales.tech",
  },
  {
    id: "3",
    name: "IEEE Congress Website",
    description: "Official website for the IEEE Congress 2024 event - event management and registration",
    image: dssywlc.src,
    link: "https://dssywlc.bvicam.in",
  },
  {
    id: "4",
    name: "TeahcMe: Online Learning Platform",
    description: "A platform for teachers and students to connect and learn",
    image: teachme.src,
    link: "",
  },
];
