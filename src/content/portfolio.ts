export const SKILL_GROUPS = {
  Languages: ["C#", "C++", "C", "Python", "Java", "Kotlin", "PHP", "JavaScript", "SQL", "T-SQL"],
  Frameworks: [
    "ASP.NET Core MVC",
    "Entity Framework Core",
    "WPF",
    "XAML",
    "Razor",
    "Android",
  ],
  Web: ["HTML", "CSS"],
  Databases: ["SQL Server", "MySQL", "Oracle"],
  Tools: [
    "Git",
    "GitHub",
    "Visual Studio",
    "Android Studio",
    "Oracle SQL Developer",
  ],
};
export const PLAYER_ATTRIBUTES = [
  { name: "Problem Solving", rating: 79 },
  { name: "Code Quality", rating: 79 },
  { name: "Technical Accuracy", rating: 79 },
  { name: "Clarity & Simplicity", rating: 79 },
  { name: "Mathematics", rating: 79 },
  { name: "Computer Science", rating: 79 },
];
export const PREFERRED_ENVIRONMENT = [
  { name: "Fedora Linux", usage: "Primary" },
  { name: "Windows 11", usage: "Virtual machine" },
];
export const FOCUS_AREAS = ["Software Engineering", "Software Development"];
export const PROJECTS = [
  {
    name: "Offline Expense Tracker",
    description:
      "Daily expense tracking with custom categories, monthly budgets and spending insights. Local storage keeps the essentials available offline.",
    language: "Kotlin",
    category: "Mobile",
    tags: ["MVVM", "Local storage", "Offline-first"],
    url: "https://github.com/HChristopherNaoyuki/harmonie-budget-app-kt",
  },
  {
    name: "Campus Dining Application",
    description:
      "A campus dining workflow combining local persistence, remote synchronization and service integration.",
    language: "Kotlin",
    category: "Mobile",
    tags: ["Local database", "Synchronization", "REST"],
    url: "https://github.com/HChristopherNaoyuki/campus-eats-app-kt",
  },
  {
    name: "Restaurant Ordering API",
    description:
      "A mock ordering service for testing and learning, with documented endpoints and practical data models.",
    language: "C#",
    category: "Web API",
    tags: ["Data mapping", "Documentation", "REST"],
    url: "https://github.com/HChristopherNaoyuki/fake-restaurant-api",
  },
];
export const PLATFORMS = ["Web", "Desktop", "Mobile"];
export const PROFILE_STATS = {
  languages: SKILL_GROUPS.Languages.length,
  platforms: PLATFORMS.length,
  projects: PROJECTS.length,
};
