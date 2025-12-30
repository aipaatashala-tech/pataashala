// ========================================
// 📝 EDIT THIS FILE TO ADD/REMOVE LINKS
// ========================================

export interface SiteLink {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string; // emoji or icon name
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'orange';
}

export interface Category {
  id: string;
  title: string;
  emoji: string;
  description: string;
  links: SiteLink[];
}

// ========================================
// ADD YOUR CATEGORIES AND LINKS HERE ⬇️
// ========================================

export const categories: Category[] = [
  {
    id: 'programming',
    title: 'Programming',
    emoji: '💻',
    description: 'Code tutorials, projects, and practice resources',
    links: [
      {
        id: 'prog-1',
        title: 'JavaScript Basics',
        description: 'Learn JS from scratch',
        url: '#',
        icon: '📜',
        color: 'yellow',
      },
      {
        id: 'prog-2',
        title: 'Python Projects',
        description: 'Hands-on Python learning',
        url: '#',
        icon: '🐍',
        color: 'green',
      },
      {
        id: 'prog-3',
        title: 'React Guide',
        description: 'Build modern UIs',
        url: '#',
        icon: '⚛️',
        color: 'blue',
      },
      {
        id: 'prog-4',
        title: 'DSA Practice',
        description: 'Data structures & algorithms',
        url: '#',
        icon: '🧮',
        color: 'pink',
      },
    ],
  },
  {
    id: 'aptitude',
    title: 'Aptitude & Quant',
    emoji: '🧠',
    description: 'Sharpen your logical and quantitative skills',
    links: [
      {
        id: 'apt-1',
        title: 'Number Systems',
        description: 'Master the basics',
        url: '#',
        icon: '🔢',
        color: 'orange',
      },
      {
        id: 'apt-2',
        title: 'Logical Reasoning',
        description: 'Puzzles & patterns',
        url: '#',
        icon: '🧩',
        color: 'pink',
      },
      {
        id: 'apt-3',
        title: 'Verbal Ability',
        description: 'Grammar & vocabulary',
        url: '#',
        icon: '📖',
        color: 'yellow',
      },
    ],
  },
  {
    id: 'databases',
    title: 'Databases / SQL',
    emoji: '🗄️',
    description: 'Database design and SQL mastery',
    links: [
      {
        id: 'db-1',
        title: 'SQL Fundamentals',
        description: 'Queries made easy',
        url: '#',
        icon: '📊',
        color: 'blue',
      },
      {
        id: 'db-2',
        title: 'NoSQL Basics',
        description: 'MongoDB & more',
        url: '#',
        icon: '🍃',
        color: 'green',
      },
      {
        id: 'db-3',
        title: 'Database Design',
        description: 'Schema patterns',
        url: '#',
        icon: '📐',
        color: 'orange',
      },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    emoji: '🤖',
    description: 'Explore AI and machine learning resources',
    links: [
      {
        id: 'ai-1',
        title: 'ChatGPT Tips',
        description: 'Prompt engineering',
        url: '#',
        icon: '💬',
        color: 'green',
      },
      {
        id: 'ai-2',
        title: 'ML Playground',
        description: 'Interactive learning',
        url: '#',
        icon: '🎮',
        color: 'pink',
      },
      {
        id: 'ai-3',
        title: 'AI Art Tools',
        description: 'Creative AI apps',
        url: '#',
        icon: '🎨',
        color: 'yellow',
      },
    ],
  },
  {
    id: 'other',
    title: 'Other Websites',
    emoji: '🌐',
    description: 'Miscellaneous helpful resources',
    links: [
      {
        id: 'other-1',
        title: 'Study Planner',
        description: 'Organize your learning',
        url: '#',
        icon: '📅',
        color: 'blue',
      },
      {
        id: 'other-2',
        title: 'Productivity Hub',
        description: 'Work smarter',
        url: '#',
        icon: '⚡',
        color: 'orange',
      },
    ],
  },
];

// ========================================
// FOOTER/SIDEBAR LINKS - EDIT HERE ⬇️
// ========================================

export const footerLinks = [
  { title: 'Contact', url: '#contact', icon: '✉️' },
  { title: 'About', url: '#about', icon: '👤' },
  { title: 'YouTube', url: 'https://youtube.com', icon: '📺' },
  { title: 'Roadmap AI', url: '#roadmap', icon: '🗺️' },
];
