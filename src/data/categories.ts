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
        url: '/blog/javascript-basics-for-beginners',
        icon: '📜',
        color: 'yellow',
      },
      {
        id: 'prog-2',
        title: 'Python Projects',
        description: 'Hands-on Python learning',
        url: '/blog/python-project-ideas',
        icon: '🐍',
        color: 'green',
      },
      {
        id: 'prog-3',
        title: 'React Guide',
        description: 'Build modern UIs',
        url: '/blog/react-hooks-guide',
        icon: '⚛️',
        color: 'blue',
      },
      {
        id: 'prog-4',
        title: 'DSA Practice',
        description: 'Data structures & algorithms',
        url: '/blog/how-to-study-effectively-online',
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
        url: '/blog/number-systems-aptitude',
        icon: '🔢',
        color: 'orange',
      },
      {
        id: 'apt-2',
        title: 'Logical Reasoning',
        description: 'Puzzles & patterns',
        url: '/blog/online-learning-vs-traditional-classroom',
        icon: '🧩',
        color: 'pink',
      },
      {
        id: 'apt-3',
        title: 'Verbal Ability',
        description: 'Grammar & vocabulary',
        url: '/blog/khan-academy-complete-guide',
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
        url: '/blog/sql-fundamentals-queries',
        icon: '📊',
        color: 'blue',
      },
      {
        id: 'db-2',
        title: 'NoSQL Basics',
        description: 'MongoDB & more',
        url: '/blog/sql-fundamentals-queries',
        icon: '🍃',
        color: 'green',
      },
      {
        id: 'db-3',
        title: 'Database Design',
        description: 'Schema patterns',
        url: '/blog/sql-fundamentals-queries',
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
        url: '/blog/chatgpt-prompt-engineering',
        icon: '💬',
        color: 'green',
      },
      {
        id: 'ai-2',
        title: 'ML Playground',
        description: 'Interactive learning',
        url: '/blog/best-free-educational-websites-for-students',
        icon: '🎮',
        color: 'pink',
      },
      {
        id: 'ai-3',
        title: 'AI Art Tools',
        description: 'Creative AI apps',
        url: '/blog/python-project-ideas',
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
        url: '/blog/productivity-hub-student-planner',
        icon: '📅',
        color: 'blue',
      },
      {
        id: 'other-2',
        title: 'Productivity Hub',
        description: 'Work smarter',
        url: '/blog/how-to-study-effectively-online',
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
  { title: 'Contact', url: '/contact', icon: '✉️' },
  { title: 'About', url: '/about', icon: '👤' },
  { title: 'Privacy', url: '/privacy-policy', icon: '🔒' },
  { title: 'Terms', url: '/terms', icon: '📜' },
  { title: 'Disclaimer', url: '/disclaimer', icon: '⚠️' },
];
