export type Role = {
  title: string;
  note?: string;
  date: string;
  // Bullets may contain inline anchor HTML (rendered with set:html).
  bullets: string[];
};

export type Job = {
  company: string;
  logo: string;
  alt: string;
  roles: Role[];
  tech: string[];
};

export const jobs: Job[] = [
  {
    company: "eMoney Advisor",
    logo: "/media/work/emoney.png",
    alt: "eMoney Advisor",
    roles: [
      {
        title: "Software Engineer",
        date: "Dec 2025 - Present",
        bullets: ["#eMoneyProud"],
      },
      {
        title: "Associate Software Engineer",
        date: "Jan 2025 - Dec 2025",
        bullets: [
          "Led critical AWS cloud infrastructure initiatives, including pioneering new Step Functions design with JSONata, establishing secure on-premise to AWS connectivity using IAM Roles Anywhere/CA certificates, and connecting Windows SMB shared drives to Linux Docker containers via Octopus deployments.",
          "Spearheaded full-stack modernization efforts by developing a Bulk File Admin application and completely rewriting a legacy ASP.NET WebForms monolith UI using latest-gen Blazor technology, including dynamic LINQ query builder UI components.",
          "Architected enterprise-wide developer productivity solutions, including a RabbitMQ microservices abstraction library, a HashiCorp-to-AWS Secrets Manager migration with shared libraries reducing code duplication across teams, and fixing critical dependency injection patterns in microservices.",
          "Won 1st place in the company AI Hackathon by architecting \"Bulkie,\" an AI-powered virtual teammate using AWS Bedrock (RAG, MCP Action Groups, guardrails), Claude Sonnet, and OpenSearch Serverless to automate bulk file validation, generate data visualizations with Python/matplotlib, analyze PRs, and unify knowledge retrieval across Jira/Confluence/on-prem databases.",
        ],
      },
    ],
    tech: ["c#", "blazor", "sql", "aws"],
  },
  {
    company: "eMoney Advisor",
    logo: "/media/work/emoney.png",
    alt: "eMoney Advisor",
    roles: [
      {
        title: "Backend Software Engineer Co-op",
        date: "Jan 2024 - Aug 2024",
        bullets: [
          "Transformed bulk-file financial data importers, processing 1+ billion rows daily, from on-premise servers to AWS cloud infrastructure and C# microservices, achieving a 50% reduction in processing time (2.6 hrs vs 5.2 hrs) and 85% cost savings.",
          "Engineered a concurrent, thread-safe data reconciliation process, retrieving account and transaction data for 140,000 clients in just 2.3 minutes, ensuring rapid access to updated data.",
          "Researched, diagrammed, and implemented a robust flow for handling failed data validation post-ETL using AWS Step Functions task tokens, EventBridge, and RabbitMQ.",
        ],
      },
    ],
    tech: ["c#", "aws", "postgres", "python"],
  },
  {
    company: "Toast, Inc.",
    logo: "/media/work/toast.png",
    alt: "Toast",
    roles: [
      {
        title: "iOS Software Engineer Intern",
        date: "Jun 2023 - Aug 2023",
        bullets: [
          'Designed and constructed the "Favorite Order" feature for the <a class="link" href="https://localbytoast.com/" target="_blank" rel="noopener">Local by Toast</a> iOS app, allowing users to mark orders as favorites for convenient reordering.',
          "Identified and resolved multiple UIKit-SwiftUI interoperability bugs across multiple iOS versions, enhancing app stability and user satisfaction.",
        ],
      },
    ],
    tech: ["swift", "combine", "uikit"],
  },
  {
    company: "Zentility, Inc.",
    logo: "/media/work/zentility.jpg",
    alt: "Zentility",
    roles: [
      {
        title: "Full-Stack Software Engineer Co-op",
        date: "Jan 2023 - May 2023",
        bullets: [
          "Developed a scalable Excel bulk importer API, capable of ingesting thousands of meters in seconds across various commodities, using Java generics, interfaces, and best practices to ensure reusability for other microservices.",
          "Architected a data stack ranking page that generates dynamic SQL queries with user-defined group-by and filter clauses, providing flexible insight into energy use.",
          "Implemented server-side datatable pagination with caching using Angular Akita and Redis, enabling seamless navigation through datasets with over 100,000 records.",
        ],
      },
    ],
    tech: ["angular", "spring boot", "mysql"],
  },
  {
    company: "Freelance",
    logo: "/media/work/wordpress.png",
    alt: "WordPress",
    roles: [
      {
        title: "Web Developer",
        date: "Sep 2019 - Present",
        bullets: [
          "Leverage WordPress to design, create, and maintain mobile-responsive sites for numerous podcast, nonprofit, medical, and entrepreneurial businesses.",
          "Communicate with customers to clearly establish requirements and obtain feedback to ensure full satisfaction with the end product.",
          'Showcase: <a class="link" href="https://www.nwpcmd.com/" target="_blank" rel="noopener">Newton Wellesley Primary Care</a>, <a class="link" href="https://waylandpersonalphysicians.com/" target="_blank" rel="noopener">Wayland Personal Physicians</a>, <a class="link" href="https://thevetvalet.com/" target="_blank" rel="noopener">Vet Valet</a>, <a class="link" href="https://womenofwayland.com/" target="_blank" rel="noopener">Women of Wayland Podcast</a>, <a class="link" href="https://yaminiranjan.com/" target="_blank" rel="noopener">Yamini Ranjan</a>',
        ],
      },
    ],
    tech: ["elementor", "html", "css"],
  },
];
