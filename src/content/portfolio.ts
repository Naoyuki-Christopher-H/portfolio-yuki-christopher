export const SKILL_GROUPS = {
  Languages: ["Java", "C#", "JavaScript", "Kotlin", "PHP", "C++"],
  Frameworks: ["Web architecture", "Data mapping", "Desktop interfaces", "Declarative UI", "Mobile applications"],
  Databases: ["Relational design", "SQL queries", "Stored procedures"],
  Tools: ["Version control", "Code review", "Development environments", "Code editing", "Mobile tooling", "Database tooling"],
};
export const PROJECTS = [
  {name:"Offline Expense Tracker",description:"Daily expense tracking with custom categories, monthly budgets and spending insights. Local storage keeps the essentials available offline.",language:"Kotlin",category:"Mobile",tags:["MVVM","Local storage","Offline-first"],url:"https://github.com/HChristopherNaoyuki/harmonie-budget-app-kt"},
  {name:"Campus Dining Application",description:"A campus dining workflow combining local persistence, remote synchronization and service integration.",language:"Kotlin",category:"Mobile",tags:["Local database","Synchronization","REST"],url:"https://github.com/HChristopherNaoyuki/campus-eats-app-kt"},
  {name:"Restaurant Ordering API",description:"A mock ordering service for testing and learning, with documented endpoints and practical data models.",language:"C#",category:"Web API",tags:["Data mapping","Documentation","REST"],url:"https://github.com/HChristopherNaoyuki/fake-restaurant-api"},
];
export const PLATFORMS = ["Web", "Desktop", "Mobile"];
export const PROFILE_STATS = { languages:SKILL_GROUPS.Languages.length, platforms:PLATFORMS.length, projects:PROJECTS.length };
