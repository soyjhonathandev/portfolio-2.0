"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { Menu, X, Globe, Check } from "lucide-react"
import { Button } from "@components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu"

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const pathname = usePathname()
  const locale = useLocale()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isHomePage = pathname === "/" || pathname === `/${locale}`;

  const navigation = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "Projects", href: isHomePage ? "#projects" : "/projects" },
    { name: "About", href: isHomePage ? "#about" : "/about" },
  ];

  const locales = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ]

  const handleSmoothScroll = (e: any, href: any) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }

        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLanguageChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setTimeout(() => {
      setIsLanguageDropdownOpen(false);
    }, 100);
  };

  return (
    <header className="bg-[#EFE8DE] border-b border-[#4F60A5]">
      <div className="container mx-auto px-6 py-4 border-x border-[#4F60A5]">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <a href={isHomePage ? "#home" : "/"}
              onClick={(e) => handleSmoothScroll(e, isHomePage ? "#home" : "/")}
              className="font-baseFont border border-black border-b-4 p-2 text-2xl md:text-3xl font-black tracking-tighter font-serif">
              J
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`font-baseFont text-2xl font-serif hover:underline ${(isHomePage && pathname === "/" && item.name === "Home") ||
                  (pathname === item.href && !item.href.startsWith('#'))
                  ? "font-bold"
                  : ""
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="ml-10 flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu
              open={isLanguageDropdownOpen}
              onOpenChange={setIsLanguageDropdownOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-2 border-black rounded-none">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5" />
  
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="border-2 border-black rounded-none">
                {locales.map((loc) => (
                  <DropdownMenuItem key={loc.code} className={`font-serif flex justify-between items-center ${locale === loc.code ? 'bg-gray-100' : ''}`}>
                    <Link
                      href={pathname || "/"}
                      locale={loc.code}
                      className="w-full flex justify-between items-center"
                      onClick={handleLanguageChange}
                    >
                      <span>{loc.name}</span>
                      {locale === loc.code && <Check className="h-4 w-4 ml-2" />}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button className="md:hidden border-2 border-black p-2" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t-2 border-black mt-4">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`font-baseFont block text-lg font-serif ${(isHomePage && pathname === "/" && item.name === "Home") ||
                      (pathname === item.href && !item.href.startsWith('#'))
                      ? "font-bold"
                      : ""
                      }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}