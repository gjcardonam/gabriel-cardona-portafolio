export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: string;
};

export type SkillWithLevel = {
  name: string;
  level: number;
};

export type ExtraSkillCategory = {
  category: string;
  items: string[];
};

export type Profile = {
  name: string;
  title: string;
  about: string;
  shortDescription: string;
  photo: string;
  contact: ContactItem[];
};

export type Knowledge = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  tech: string[];
  links: { label: string; href: string }[];
};

export type Social = {
  name: string;
  href: string;
  icon: string;
};
