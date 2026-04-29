export type Founder = {
  name: string;
  title: string;
  education: string;
  experience: string;
  expertise: string;
  description: string;
  linkedin: string;
};

export const FOUNDERS: Founder[] = [
  {
    name: "Harry Tan",
    title: "Co-Founder",
    education: "UC Berkeley '25",
    experience: "Ex-Spotify, Infosys, Kohl's",
    expertise: "ML & Analytics",
    description:
      "Specialized in machine learning systems and predictive analytics with experience building production ML pipelines at scale.",
    linkedin: "https://www.linkedin.com/in/harry-tan-184711202/",
  },
  {
    name: "Jack Wang",
    title: "Co-Founder",
    education: "CS & Econ @ UC Berkeley",
    experience: "Ex-Uber",
    expertise: "Quantitative Trading",
    description:
      "Computer Science and Economics background with hands-on experience in high-frequency trading systems and market microstructure.",
    linkedin: "https://www.linkedin.com/in/jack-wang1/",
  },
];
