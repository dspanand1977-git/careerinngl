export const categories = [
  { id: 'all', label: 'All Courses' },
  { id: 'fullstack', label: 'Full Stack Development' },
  { id: 'programming', label: 'Core Programming' },
  { id: 'web-mobile', label: 'Web & Mobile Apps' },
  { id: 'testing-qa', label: 'Software Testing' },
  { id: 'marketing-tech', label: 'Digital Marketing & Tools' },
];

export const coursesData = [
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Development',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    badge: 'Most Popular',
    rating: 4.9,
    reviewsCount: 380,
    duration: '3 - 4 Months',
    level: 'Beginner to Advanced',
    format: 'Classroom & Live Hands-on Projects',
    shortDesc: 'Master end-to-end web development with Java, Spring Boot, Microservices, React/Angular, and MySQL.',
    prerequisites: 'Basic knowledge of computers & logic building concepts',
    iconColor: '#ea580c',
    jobRoles: ['Full Stack Java Developer', 'Backend Developer', 'Software Engineer', 'System Analyst'],
    keyHighlights: [
      'Core & Advanced Java (OOPs, Collections, Multithreading)',
      'Spring Boot Framework & RESTful APIs',
      'Frontend with React / Angular & Bootstrap',
      'Database Design with MySQL & Hibernate ORM',
      'Live Capstone Industry Project with Git/GitHub',
      '100% Interview & Resume Preparation'
    ],
    syllabus: [
      {
        module: 'Module 1: Fundamentals & Java Standard Edition',
        topics: ['C/C++ basics refresh', 'OOP Concepts', 'Data Types & Flow Control', 'Arrays & String Manipulation', 'Exception Handling']
      },
      {
        module: 'Module 2: Advanced Java & Enterprise Technologies',
        topics: ['Collections Framework & Generics', 'Multithreading & Concurrency', 'JDBC Database Connectivity', 'Servlets & JSP']
      },
      {
        module: 'Module 3: Spring Framework & Microservices',
        topics: ['Spring Core & Dependency Injection', 'Spring Boot 3.x Creation', 'Spring Data JPA', 'REST API Design & Swagger Docs', 'Spring Security Fundamentals']
      },
      {
        module: 'Module 4: Modern Web Frontend',
        topics: ['HTML5, CSS3, JavaScript ES6+', 'React Components & Hooks / Angular Directives', 'API Integration (Axios/Fetch)', 'Responsive UI Design']
      },
      {
        module: 'Module 5: Project & Deployment',
        topics: ['Real-time E-Commerce/ERP Web App', 'Git Version Control', 'Maven & Build Tools', 'Mock Interviews & Resume Building']
      }
    ]
  },
  {
    id: 'python-fullstack',
    title: 'Python Full Stack & Data Fundamentals',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    badge: 'High Demand',
    rating: 4.8,
    reviewsCount: 290,
    duration: '3 Months',
    level: 'Beginner to Advanced',
    format: 'Classroom & Practical Training',
    shortDesc: 'Build powerful web applications with Python, Django, Flask, SQLite/PostgreSQL, and React.',
    prerequisites: 'No prior programming experience required',
    iconColor: '#0284c7',
    jobRoles: ['Python Developer', 'Django Fullstack Engineer', 'Data Analyst Trainee', 'Backend Developer'],
    keyHighlights: [
      'Complete Python 3 Syntax & Logic Building',
      'Django & Flask Web Frameworks',
      'REST APIs & ORM Integration',
      'Modern JavaScript & React Integration',
      'Database querying with PostgreSQL/SQLite',
      'Automated Scripting & Basic Data Analysis'
    ],
    syllabus: [
      {
        module: 'Module 1: Python Core Essentials',
        topics: ['Variables & Operators', 'Control Structures & Loops', 'Functions & Lambda', 'Data Structures (Lists, Tuples, Dicts, Sets)', 'File I/O & Modules']
      },
      {
        module: 'Module 2: Object-Oriented Python',
        topics: ['Classes & Objects', 'Inheritance & Polymorphism', 'Encapsulation & Abstraction', 'Custom Exception Handling']
      },
      {
        module: 'Module 3: Web Development with Django',
        topics: ['MVT Architecture', 'Django Models & Migration', 'Views, URLs & Templates', 'Django Admin Portal Customization', 'User Authentication & Sessions']
      },
      {
        module: 'Module 4: RESTful APIs & Frontend',
        topics: ['Django REST Framework (DRF)', 'Serializers & ViewSets', 'Connecting React/HTML5 Frontend', 'CRUD Operations']
      },
      {
        module: 'Module 5: Real-World Industry Project',
        topics: ['Building a Portal System', 'Git & GitHub Workflow', 'Deployment on Cloud Services', 'Placement Mock Interview']
      }
    ]
  },
  {
    id: 'dotnet-fullstack',
    title: '.NET Full Stack Development (C# & ASP.NET)',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    badge: 'Enterprise Choice',
    rating: 4.8,
    reviewsCount: 215,
    duration: '3 Months',
    level: 'Beginner to Advanced',
    format: 'Classroom & Lab Hands-on',
    shortDesc: 'Master enterprise application development using C#, ASP.NET Core, Entity Framework, and SQL Server.',
    prerequisites: 'Basic knowledge of object-oriented programming',
    iconColor: '#7c3aed',
    jobRoles: ['.NET Developer', 'ASP.NET Engineer', 'C# Software Developer', 'Database Developer'],
    keyHighlights: [
      'C# Language Fundamentals & Advanced OOP',
      'ASP.NET Core MVC & Web API Development',
      'Entity Framework Core (Code First & Database First)',
      'SQL Server Database Administration & Stored Procedures',
      'Frontend Integration with HTML5, CSS3, JS & Bootstrap',
      'Enterprise Architecture Best Practices'
    ],
    syllabus: [
      {
        module: 'Module 1: C# & Object-Oriented Programming',
        topics: ['C# Data Types, Operators & Control Flow', 'Classes, Interfaces & Abstract Classes', 'Delegates, Events & LINQ Queries', 'Generics & Exception Handling']
      },
      {
        module: 'Module 2: Database Management with SQL Server',
        topics: ['Relational Database Concepts', 'T-SQL Queries, Joins & Subqueries', 'Stored Procedures, Triggers & Views', 'Indexing & Performance Tuning']
      },
      {
        module: 'Module 3: ASP.NET Core MVC & Web API',
        topics: ['MVC Design Pattern', 'Controllers, Action Methods & Views', 'Dependency Injection in ASP.NET Core', 'Building Web APIs for Mobile & Web Applications']
      },
      {
        module: 'Module 4: ORM & Security',
        topics: ['Entity Framework Core', 'Migrations & LINQ to Entities', 'Authentication & Authorization (JWT & Identity)', 'Unit Testing']
      },
      {
        module: 'Module 5: Project & Interview Prep',
        topics: ['Live Enterprise Management Application', 'Project Documentation', 'Client Interaction Tips & Mock Technical Rounds']
      }
    ]
  },
  {
    id: 'react-frontend',
    title: 'React JS & Modern Frontend Development',
    category: 'web-mobile',
    categoryLabel: 'Web & Mobile',
    badge: 'Trending',
    rating: 4.9,
    reviewsCount: 310,
    duration: '2 Months',
    level: 'Intermediate',
    format: 'Classroom & Project Building',
    shortDesc: 'Create fast, responsive single-page web applications with React 19, JavaScript ES6+, Vite, and Tailwind/CSS.',
    prerequisites: 'Basic understanding of HTML, CSS, and JS',
    iconColor: '#06b6d4',
    jobRoles: ['React Developer', 'Frontend Engineer', 'UI Developer', 'Web Application Specialist'],
    keyHighlights: [
      'Modern JavaScript (ES6+, Async/Await, Promises)',
      'React Components, JSX, State & Props',
      'React Hooks (useState, useEffect, useMemo, useRef)',
      'State Management (Context API / Redux Toolkit)',
      'REST API Integration & Axios',
      'Deploying React Apps on Vercel / Netlify'
    ],
    syllabus: [
      {
        module: 'Module 1: Advanced JavaScript for React',
        topics: ['Destructuring, Spread/Rest Operators', 'Arrow Functions, Modules & Imports', 'Promises, Async/Await & Fetch API', 'Array Methods (map, filter, reduce)']
      },
      {
        module: 'Module 2: React Core Concepts',
        topics: ['Virtual DOM & JSX Syntax', 'Functional Components vs Class Components', 'Props, State & Event Handling', 'Conditional Rendering & List Keys']
      },
      {
        module: 'Module 3: Hooks & State Management',
        topics: ['useState & useEffect Hook Deep Dive', 'Custom Hooks Creation', 'Context API for Global State', 'Form Validation & Handling']
      },
      {
        module: 'Module 4: Routing & API Integration',
        topics: ['React Router v6 Navigation', 'Protected Routes & Authentication Flow', 'Consuming REST APIs using Axios', 'Handling Loading & Error States']
      },
      {
        module: 'Module 5: Real-World Web Apps',
        topics: ['Building Dashboard & Shopping Cart Portal', 'Performance Optimization', 'Build Process with Vite', 'Deployment & Portfolio Setup']
      }
    ]
  },
  {
    id: 'c-cpp-programming',
    title: 'C & C++ Programming Fundamentals',
    category: 'programming',
    categoryLabel: 'Core Programming',
    badge: 'Foundation',
    rating: 4.8,
    reviewsCount: 420,
    duration: '1.5 - 2 Months',
    level: 'Beginner',
    format: 'Classroom Logic Building',
    shortDesc: 'The gold standard foundation for logical thinking, algorithms, memory management, and pointers.',
    prerequisites: 'None - Ideal for 1st/2nd year Engineering & Arts students',
    iconColor: '#2563eb',
    jobRoles: ['Junior Programmer', 'Software Trainee', 'Academic Lab Top Scorer'],
    keyHighlights: [
      'Problem Solving & Logic Building Techniques',
      'Pointers, Memory Allocation & Structures',
      'C++ Object-Oriented Principles',
      'Standard Template Library (STL) in C++',
      'File Handling & Algorithms',
      'Preparation for Campus Placement Aptitude & Coding'
    ],
    syllabus: [
      {
        module: 'Module 1: Foundations of C',
        topics: ['Algorithm & Flowcharts', 'Constants, Variables & Operators', 'Decision Making (if-else, switch)', 'Looping Structures (for, while, do-while)']
      },
      {
        module: 'Module 2: Data Handling & Functions',
        topics: ['1D & 2D Arrays', 'String Handling Functions', 'User Defined Functions & Recursion', 'Storage Classes']
      },
      {
        module: 'Module 3: Pointers & Structures',
        topics: ['Pointer Arithmetic & Call by Reference', 'Dynamic Memory Allocation (malloc, calloc)', 'Structures, Unions & Typedef', 'File Operations (fopen, fread, fwrite)']
      },
      {
        module: 'Module 4: Object-Oriented C++',
        topics: ['Classes & Object Concept', 'Constructors & Destructors', 'Operator & Function Overloading', 'Inheritance Types & Virtual Functions']
      },
      {
        module: 'Module 5: STL & Coding Practice',
        topics: ['Vectors, Lists, Stacks, Queues', 'Coding Problem Solving', 'Placement Aptitude Questions']
      }
    ]
  },
  {
    id: 'software-testing-qa',
    title: 'Software Testing & Automation (QA)',
    category: 'testing-qa',
    categoryLabel: 'Software Testing',
    badge: 'Job Ready',
    rating: 4.7,
    reviewsCount: 195,
    duration: '2.5 Months',
    level: 'Beginner to Intermediate',
    format: 'Classroom & Lab Testing',
    shortDesc: 'Learn Manual Testing methodology, STLC, Test Case Writing, Selenium WebDriver, and Bug Tracking.',
    prerequisites: 'Basic computer operation skills',
    iconColor: '#16a34a',
    jobRoles: ['QA Engineer', 'Software Test Engineer', 'Automation Tester', 'Manual Tester'],
    keyHighlights: [
      'Software Testing Life Cycle (STLC) & SDLC',
      'Test Cases Writing & Test Execution',
      'Defect Management with JIRA / Bugzilla',
      'Automation Testing with Selenium WebDriver & Java',
      'API Testing with Postman',
      'Agile / Scrum Project Workflow'
    ],
    syllabus: [
      {
        module: 'Module 1: Manual Testing Fundamentals',
        topics: ['Software Testing Concepts & Types', 'SDLC Models (Waterfall, Agile, Scrum)', 'Black Box vs White Box Testing', 'Functional vs Non-Functional Testing']
      },
      {
        module: 'Module 2: Test Documentation & Execution',
        topics: ['Test Plan & Test Strategy Overview', 'Writing Effective Test Cases & Test Scenarios', 'Boundary Value Analysis & Equivalence Partitioning', 'Bug Lifecycle & Reporting in JIRA']
      },
      {
        module: 'Module 3: Database & API Testing',
        topics: ['SQL Queries for Testers (SELECT, JOIN, WHERE)', 'API Fundamentals (HTTP Methods, Status Codes)', 'API Test Execution using Postman']
      },
      {
        module: 'Module 4: Selenium Automation Testing',
        topics: ['Java Essentials for Selenium', 'Selenium WebDriver Architecture', 'Locators (XPath, CSS Selector, ID)', 'TestNG Framework & Assertions']
      },
      {
        module: 'Module 5: Live Testing Project',
        topics: ['End-to-End E-Commerce Site Testing', 'Bug Reporting Document', 'QA Mock Interview Preparation']
      }
    ]
  },
  {
    id: 'digital-marketing-seo',
    title: 'Digital Marketing & SEO Mastery',
    category: 'marketing-tech',
    categoryLabel: 'Digital Marketing',
    badge: 'High Growth',
    rating: 4.8,
    reviewsCount: 160,
    duration: '2 Months',
    level: 'Beginner',
    format: 'Classroom & Live Campaign Execution',
    shortDesc: 'Master Search Engine Optimization (SEO), Social Media Ads (Meta/Google), Content Strategy, and Analytics.',
    prerequisites: 'Familiarity with Internet browsing & social media',
    iconColor: '#e11d48',
    jobRoles: ['Digital Marketing Executive', 'SEO Specialist', 'Social Media Manager', 'PPC Analyst'],
    keyHighlights: [
      'On-Page & Off-Page SEO Techniques',
      'Google Search Console & Google Analytics 4',
      'Meta (Facebook & Instagram) Ads Manager',
      'Google Ads (Search, Display, YouTube Ads)',
      'Content Marketing & Graphic Design Basics (Canva)',
      'Email Marketing Automation'
    ],
    syllabus: [
      {
        module: 'Module 1: Fundamentals of Digital Marketing',
        topics: ['Inbound vs Outbound Marketing', 'Buyer Persona & Customer Journey', 'Website Setup & WordPress Basics']
      },
      {
        module: 'Module 2: Search Engine Optimization (SEO)',
        topics: ['Keyword Research & Competitor Analysis', 'On-Page SEO Optimization', 'Technical SEO & Site Speed', 'Off-Page SEO & Backlink Building Strategies']
      },
      {
        module: 'Module 3: Paid Advertising (PPC & Meta Ads)',
        topics: ['Google Ads Setup & Keyword Bidding', 'Meta Ads Manager (Targeting & Retargeting)', 'Ad Copy Writing & Creative Strategy']
      },
      {
        module: 'Module 4: Social Media & Content Marketing',
        topics: ['Organic Social Media Strategy (Instagram, LinkedIn)', 'Content Creation Tools (Canva, AI Prompts)', 'Email Campaign Creation']
      },
      {
        module: 'Module 5: Analytics & Client Reporting',
        topics: ['GA4 Reporting & Tracking', 'ROI Metrics Calculation', 'Freelancing & Job Preparation']
      }
    ]
  },
  {
    id: 'tally-prime',
    title: 'Tally Prime & GST Accounting',
    category: 'marketing-tech',
    categoryLabel: 'Accounting Tools',
    badge: 'Practical Skill',
    rating: 4.9,
    reviewsCount: 220,
    duration: '1.5 Months',
    level: 'Beginner',
    format: 'Classroom Practical Lab',
    shortDesc: 'Comprehensive training on Tally Prime, GST filing, payroll management, and corporate financial reporting.',
    prerequisites: 'Basic knowledge of accounts is helpful but not mandatory',
    iconColor: '#059669',
    jobRoles: ['Tally Accountant', 'Accounts Executive', 'GST Billing Assistant', 'Finance Assistant'],
    keyHighlights: [
      'Tally Prime Installation & Company Creation',
      'Ledger & Voucher Entry (Journal, Sales, Purchase)',
      'GST Configuration & E-Way Bill Creation',
      'Inventory Management & Batch Tracking',
      'Payroll & Employee Statutory Deductions',
      'Financial Statement Generation (P&L, Balance Sheet)'
    ],
    syllabus: [
      {
        module: 'Module 1: Accounting Basics & Tally Interface',
        topics: ['Double Entry Bookkeeping Rules', 'Company Creation & Security Settings', 'Groups & Ledgers Creation']
      },
      {
        module: 'Module 2: Voucher Entries & Transactions',
        topics: ['Payment, Receipt, Contra Vouchers', 'Purchase & Sales Order Cycle', 'Credit Note & Debit Note']
      },
      {
        module: 'Module 3: GST & Taxation in Tally',
        topics: ['SGST, CGST, IGST Configuration', 'GST Invoice Printing with QR Code', 'GSTR-1 & GSTR-3B Reconciliation']
      },
      {
        module: 'Module 4: Inventory & Payroll',
        topics: ['Stock Groups, Categories & Units', 'Batch-wise & Expiry Date Management', 'Payroll Units, Pay Heads & Salary Slips']
      },
      {
        module: 'Module 5: Reporting & Audit',
        topics: ['Day Book & Cash/Bank Book', 'Trial Balance, Profit & Loss, Balance Sheet', 'Data Backup & Exporting to Excel/PDF']
      }
    ]
  }
];
