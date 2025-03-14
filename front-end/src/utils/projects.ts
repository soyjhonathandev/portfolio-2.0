import Isuzu from "@public/img/isuzu.png"
import Froz from "@public/img/froz.png"
import Fonet from "@public/img/fonet.png"
import SanMartin from "@public/img/san martin.png"
import Chartiers from "@public/img/chartiers.png"
import Canada from "@public/img/canada.png"
import Cobrix from "@public/img/cobrix.png"
import Suppli from "@public/img/suppli.png"
import Vela from "@public/img/vela.png"
import Diverso from "@public/img/diverso.png"
import Vpn from "@public/img/vpn.png"
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
        description: "Massive notifications sending platform",
        role: "Full Stack Developer", 
        challenges: "",
        stack: ["Next.js", "Nest.js", "PostgresSQL", "AWS", "Redis"],
        url: "https://www.cobrix.com",
    },
    {
        id: 7,
        image: Isuzu,
        name: "ISUZU (ORDERS PLATFORM)",
        description: "This is project 3",
        role: "Full Stack Developer",
        challenges: "This is a challenge",
        stack: ["Wordpress", "Elementor", "php"],
        url: "",
    },
    {
        id: 8,
        image: Froz,
        name: "FROZ SPORTS (SCHOLARSHIP SYSTEM)",
        description: "This is project 4",
        role: "Full Stack developer (Including UI & UX designer and Cloud Administrator)",
        challenges: "This is a challenge",
        stack: ["Next.js", "Nest.js", "MySQL", "AWS", "Redis"],
        url: "https://froz-platform-frbm.vercel.app",
    },
    {
        id: 9,
        image: Chartiers,
        name: "CHARTIERS DEL MAR (YACH BOOKING WEB)",
        description: "This is project 5",
        role: "Frontend Developer",
        challenges: "This is a challenge",
        stack: ["Wordpress", "Php"],
        url: "https://chartiersdelmar.com",
    },
    {
        id: 10,
        image: SanMartin,
        name: "SAN MARTIN FC (MOBILE APP)",
        description: "This is project 6",
        role: "Full Stack developer (Including UI & UX designer and Cloud Administrator)",
        challenges: "This is a challenge",
        stack: ["React-Native", "Nest.js", "MySQL", "Figma"],
        url: "https://www.figma.com/file/NrbeHymmh0QdmQwcrRUoih/San-Martin-App?type=design&node-id=0-1&mode=design&t=pdWxJRf6Fc6dH6lW-0",
    },
    {
        id: 11,
        image: Diverso,
        name: "DIVERSO GROUP (WEB PLATFORM)",
        description: "This is project 7",
        role: "UI & UX designer and front-end.",
        challenges: "This is a challenge",
        stack: ["Next.js", "AWS"],
        url: "https://diversocreativeagency.com",
    },
    {
        id: 12,
        image: Transportex,
        name: "TRANSPORTEX (MOBILE APP)",
        description: "This is project 8",
        role: "Cloud Administrator.",
        stack: ["React-Native", "MySQL", "Nest.js", "AWS"],
        url: "https://play.google.com/store/apps/details?id=com.japcode.transportexmobileapp&pcampaignid=web_share",
    },
]

