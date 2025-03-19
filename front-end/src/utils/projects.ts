import Isuzu from "@public/img/isuzu.svg"
import Froz from "@public/img/froz.png"
import Fonet from "@public/img/fonet.png"
import SanMartin from "@public/img/san martin.png"
import Chartiers from "@public/img/chartiers.png"
import Canada from "@public/img/canada.png"
import Cobrix from "@public/img/cobrix.svg"
import Suppli from "@public/img/suppli.png"
import Vela from "@public/img/vela.png"
import Diverso from "@public/img/diverso.png"
import Vpn from "@public/img/vpn.svg"
import Transportex from "@public/img/transportex.png"

export const projects = [
    {
        id: 1,
        image: Vpn,
        name: "VPN (MOBILE APP) & (WIREGUARD CLOUD SERVER)",
        description: "Engineered a Kotlin-based Android VPN app with WireGuard protocol integration, connecting securely to AWS servers while automating client creation through Bash scripts. Implemented a secure token management system with MySQL database storage, ensuring streamlined access control and enhanced user authentication. Delivered a scalable VPN solution that overcame protocol implementation challenges, resulting in improved client profitability and reliable high-performance service.",
        role: "Cloud Administrator | Back-end | UI & UX designer",
        challenges: "Successfully integrated WireGuard protocol into an Android VPN app with secure AWS connectivity, overcoming complex networking challenges through custom automation. Developed Bash scripts for streamlined client creation and implemented secure MySQL token storage, ensuring robust performance and simplified user access management.",
        stack: ["Wireguard", "Linux", "AWS", "Kotlin", "Nest.js", "MySQL"],
        url: "https://www.figma.com/file/OvVAH9EIRvBwyEtNscydT0/VPN-App?type=design&mode=design&t=jYO8DXCX9f7cqNbL-0",
    },
    {
        id: 2,
        image: Fonet,
        name: 'FONET "ISP" (WEB PAY SISTEM & ADMIN PANNEL)',
        description: "Developed an online payment platform integrated with MikroWISP API that enables internet service clients to pay bills through multiple payment methods, with automatic service renewal upon successful transactions.",
        role: "Frontend Developer | UI/UX Designer |  Cloud Administrator",
        challenges: "Successfully navigated complex multi-API integration challenges by connecting banking systems with MikroWISP's database, creating a seamless authentication flow, and implementing automated payment verification that instantly renewed client services without manual intervention.",
        stack: ["Next.js", "Express.js", "MongoDB", "AWS", "NGINX", "figma"],
        url: "https://cliente.fonet.com.ve",
    }, 
     {
        id: 3,
        image: Canada,
        name: "TU PAGO CANADA (REMITTANCE PLATFORM)",
        description: "A custom remittance platform facilitating money transfers from Canada to Venezuela. Built with Next.js and MongoDB, this web application features secure user authentication, personalized customer dashboards, and a comprehensive admin portal. The platform streamlines the order process for users while providing company administrators with powerful tools to manually process transactions and update operation statuses. Complete with email notifications and detailed tracking, the system creates an efficient bridge between Canadian senders and Venezuelan recipients.",
        role: "Frontend Developer | UI/UX Designer",
        challenges: "Successfully designed a robust transaction management system that prioritized transparency and security without direct bank integrations. Created an intuitive workflow that allowed company administrators to efficiently handle manual processing of cross-border transactions while maintaining complete visibility for end users. Implemented comprehensive status tracking and notification systems that kept all parties informed throughout the remittance lifecycle, despite the complex nature of coordinating financial operations across different countries and currencies.",
        stack: ["Next.js", "MongoDB"],
        url: "https://www.tupago.ca/es",
    },
    {
        id: 4,
        image: Suppli,
        name: "SUPPLI360 (Odoo Enterprise Dockerization) ",
        description: "Led the Odoo Enterprise Dockerization initiative for Suppli360, creating a custom containerized solution that enabled on-premise deployment of Odoo Enterprise with proprietary modules on AWS infrastructure. This implementation provided clients with a flexible alternative to cloud-hosted services, allowing for greater customization and control while maintaining enterprise-grade functionality and security.",
        role: "DevOps",
        challenges: "Successfully navigated the absence of official documentation and support for container deployment, developing innovative solutions to package Odoo Enterprise for AWS environments. Engineered an automated deployment pipeline that addressed complex dependencies and configuration requirements, while ensuring seamless integration of custom modules. The solution balanced performance optimization with maintainability, providing Suppli360 with a competitive advantage in offering clients flexible deployment options beyond the standard cloud-based subscription model.",
        stack: ["Docker", "Python", "Linux", "Odoo", "AWS"],
        url: "",
    },
     {
        id: 5,
        image: Vela,
        name: "ENERGYSOLARVELA.CA (E-commerce)",
        description: "A comprehensive e-commerce platform for renewable energy products built with Next.js, Nest.js, MySQL, and Redis. This sophisticated web solution enables customers to purchase solar panels, batteries, lamps, and generators through secure Stripe payment integration. The application provides merchants with powerful capabilities to manage product catalogs, create promotional banners, publish blog content, and execute targeted email campaigns directly from an intuitive admin dashboard.",
        role: "Full Stack Developer",
        challenges: "Successfully implemented a sophisticated custom authentication system with multi-factor authentication, integrating SMS verification and Google Authenticator for enhanced security. Engineered a complex admin dashboard that unified diverse functionalities—from renewable energy product management to marketing automation—into a cohesive interface while maintaining performance. Integrated Stripe payment processing with custom inventory management specifically designed for high-value solar equipment, ensuring secure transactions and accurate stock tracking throughout the customer journey.",
        stack: ["Next.js", "Nest.js", "MySQL", "AWS", "Redis"],
        url: "https://www.energysolarvela.com",
    },
     {
        id: 6,
        image: Cobrix,
        name: "Cobrix",
        description: "Developed Cobrix, a comprehensive subscription management platform that streamlines payment collection for businesses operating on recurring revenue models. This Next.js and Nest.js solution, powered by PostgreSQL, automates the entire collection process for gyms, internet service providers, and similar subscription-based businesses. The system delivers timely payment reminders across multiple channels (WhatsApp, SMS, and email), providing customers with convenient payment links and generating detailed collection reports that help businesses optimize their cash flow.",
        role: "Full Stack Developer", 
        challenges: "Successfully engineered a robust multi-channel notification system by integrating WhatsApp, SMS, and email APIs into a unified communication framework. Created an intelligent scheduling algorithm that optimizes message delivery timing to maximize response rates while minimizing customer annoyance. Implemented a secure payment link system that allows for real-time status updates when payments are received, automatically reflecting changes in the company's collection records without manual intervention.",
        stack: ["Next.js", "Nest.js", "PostgresSQL", "AWS", "Redis"],
        url: "https://www.cobrix.co",
    },
    {
        id: 7,
        image: Isuzu,
        name: "ISUZU (ORDERS PLATFORM)",
        description: "Developed a comprehensive e-commerce platform for ISUZU that streamlined merchandise ordering and distribution across Latin America. This web-based solution enabled authorized dealerships to place orders through an intuitive interface while providing real-time tracking capabilities. The system centralized the entire merchandise supply chain, improving operational efficiency and enhancing transparency for all stakeholders.",
        role: "Full Stack Developer",
        challenges: "Successfully navigated the technical constraints of WordPress and PHP development despite limited prior experience with these technologies. Engineered robust tracking functionality that required complex integration with ISUZU's existing systems while maintaining performance across multiple regions. The resulting platform significantly improved order processing efficiency, reducing fulfillment time while providing dealers with unprecedented visibility into their merchandise orders.",
        stack: ["Wordpress", "Elementor", "php"],
        url: "",
    },
    {
        id: 8,
        image: Froz,
        name: "FROZ SPORTS (SCHOLARSHIP SYSTEM)",
        description: "Developed Froz Sports, a comprehensive athletic opportunity platform connecting talented soccer and baseball players with U.S. university recruitment programs. Built with Next.js frontend and a robust Nest.js/Express backend powered by MySQL, this solution provides detailed baseball analytics and university soccer scholarship information. The platform features role-specific dashboards for recruiters, administrators, and student-athletes, enabling seamless information exchange and application tracking throughout the recruitment process.",
        role: "Full Stack developer (Including UI & UX designer and Cloud Administrator)",
        challenges: "Successfully engineered a complex multi-tier access system with distinct workflows for different user types while maintaining data security and privacy. Implemented sophisticated athlete profiling that effectively translated sports performance metrics into recruitment potential for U.S. universities. Created an intuitive application tracking system that provided real-time status updates to applicants while giving recruiters comprehensive tools to evaluate talent across multiple athletic disciplines and geographic regions.",
        stack: ["Next.js", "Nest.js", "MySQL", "AWS", "Redis"],
        url: "https://froz-platform-frbm.vercel.app",
    },
    {
        id: 9,
        image: Chartiers,
        name: "CHARTIERS DEL MAR (YACH BOOKING WEB)",
        description: "Revitalized Chartiers del Mar,  an existing WordPress-based yacht rental platform, through strategic visual enhancements and implementation of a seamless payment processing system. The project transformed the previously static showcase site into a fully functional e-commerce platform, enabling customers to browse available yachts and complete the entire rental transaction online. Updated design elements and improved user interface created a premium digital experience that properly reflected the luxury yacht rental service.",
        role: "Frontend Developer",
        challenges: "Successfully integrated a secure payment gateway into the existing WordPress architecture without disrupting the site's established structure or SEO performance. Navigated complex WordPress customization requirements to implement yacht availability calendars and booking functionality while maintaining mobile responsiveness. Created an intuitive reservation flow that balanced the collection of necessary client information with a streamlined checkout process appropriate for high-value yacht rental transactions.",
        stack: ["Wordpress", "Php"],
        url: "https://chartiersdelmar.com",
    },
    {
        id: 10,
        image: SanMartin,
        name: "SAN MARTIN FC (MOBILE APP)",
        description: "Developed a comprehensive mobile application for San Martin Argentinian Football Club that connects fans with team activities across iOS and Android platforms. Built with React Native and supported by a Nest.js backend with MongoDB, this fan engagement solution delivers real-time news updates, detailed match schedules, historical game archives, and integrated ticket purchasing through Mercado Pago. The application provides supporters with a seamless experience to follow their team and secure game tickets directly from their mobile devices.",
        role: "Full Stack developer (Including UI & UX designer and Cloud Administrator)",
        challenges: "Successfully navigated the complexities of cross-platform mobile development while maintaining native performance and consistently branded user experience. Implemented robust real-time data synchronization between the mobile application and backend systems to ensure accurate match information and news updates. Engineered secure payment processing through Mercado Pago integration that handled high-volume ticket sales during peak periods while maintaining transaction integrity and providing instant ticket delivery to users.",
        stack: ["React-Native", "Nest.js", "MySQL", "Figma"],
        url: "https://www.figma.com/file/NrbeHymmh0QdmQwcrRUoih/San-Martin-App?type=design&node-id=0-1&mode=design&t=pdWxJRf6Fc6dH6lW-0",
    },
    {
        id: 11,
        image: Diverso,
        name: "DIVERSO GROUP (WEB PLATFORM)",
        description: "Crafted Diverso, an elegantly minimalist landing page for a marketing and design agency that showcases their portfolio and services through a distinctive vintage aesthetic. Built exclusively with Next.js, this highly stylized digital presence effectively communicates the agency's creative capabilities while emphasizing their unique design approach. The page combines thoughtful typography, strategic white space, and seamless animations to create an immersive browsing experience that reflects the agency's commitment to sophisticated design principles.",
        role: "UI & UX designer and front-end.",
        challenges: "Successfully translated the agency's vintage-inspired minimalist vision into a responsive web experience without relying on additional frameworks or libraries. Implemented performance-optimized animations and transitions that maintained the delicate balance between aesthetic complexity and page load speed. Created a seamless project showcase that effectively highlighted the diversity of the agency's work while maintaining visual coherence throughout the user journey.",
        stack: ["Next.js", "AWS"],
        url: "https://diversocreativeagency.com",
    },
    {
        id: 12,
        image: Transportex,
        name: "TRANSPORTEX (MOBILE APP)",
        description: "Developed Transportex, a comprehensive fleet management mobile application built with React Native for both iOS and Android platforms. This solution enables a trucking company to track vehicle usage, monitor distances traveled, and optimize maintenance scheduling across their entire fleet. The application provides real-time monitoring capabilities, detailed route history, and automated maintenance alerts based on mileage thresholds, helping the company maximize vehicle lifespan and operational efficiency.",
        role: "Cloud Administrator.",
        challenges: "Successfully implemented complex database architecture utilizing MySQL stored procedures that significantly improved data processing efficiency and reporting capabilities. Engineered a robust AWS deployment infrastructure that ensured reliable service availability and secure data handling across multiple geographic regions. Created an intuitive driver interface that simplified data collection during routes while maintaining accurate GPS tracking, even in areas with limited connectivity.",
        stack: ["React-Native", "MySQL", "Nest.js", "AWS"],
        url: "https://play.google.com/store/apps/details?id=com.japcode.transportexmobileapp&pcampaignid=web_share",
    },
]

