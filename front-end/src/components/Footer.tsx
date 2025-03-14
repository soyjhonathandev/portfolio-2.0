"use client"

import type React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@components/ui/button"
import { Github, Linkedin} from "lucide-react"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"

export const Footer: React.FC = () => {
  const t = useTranslations("footer")
  const pathname = usePathname()
  const locale = useLocale()
  const currentYear = new Date().getFullYear()

  // Detectar si estamos en la página principal
  const isHomePage = pathname === "/" || pathname === `/${locale}`;

  // Función para manejar el scroll suave al hacer clic en un anclaje
  const handleSmoothScroll = (e: any, href: any) => {
    // Solo aplicar para anclajes en la página principal
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Scroll suave hacia la sección
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black text-white border-t-2 border-black">
      <div className="container mx-auto md:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">{t("about")}</h3>
            <p className="font-serif mb-4">{t("aboutText")}</p>
            <div className="flex space-x-4">
              <a href="https://github.com/soyjhonathandev" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/jhonathan-saldarriaga-1a9181202/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 hover:text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">{t("navigation")}</h3>
            <ul className="space-y-2 font-serif">
              <li>
                <a
                  href={isHomePage ? "#home" : "/"}
                  onClick={(e) => handleSmoothScroll(e, isHomePage ? "#home" : "/")}
                  className="hover:underline"
                >
                  {t("home")}
                </a>
              </li>
              <li>
                <a
                  href={isHomePage ? "#projects" : "/projects"}
                  onClick={(e) => handleSmoothScroll(e, isHomePage ? "#projects" : "/projects")}
                  className="hover:underline"
                >
                  {t("projects")}
                </a>
              </li>
              <li>
                <a
                  href={isHomePage ? "#about" : "/about"}
                  onClick={(e) => handleSmoothScroll(e, isHomePage ? "#about" : "/about")}
                  className="hover:underline"
                >
                  {t("aboutLink")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">{t("contact")}</h3>
            <p className="font-serif mb-2">{t("contactText")}</p>
            <a href="mailto:soyjhonathandev@gmail.com?Subject=This is a message that comes from Portfolio">
           <Button className="bg-white text-black hover:bg-zinc-300 hover:text-zinc-700 border-2 border-black rounded-none font-serif p-4">Send Email</Button>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="font-serif">
            © {currentYear} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}