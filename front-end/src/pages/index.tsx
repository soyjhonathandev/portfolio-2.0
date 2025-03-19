"use client"

import { useState, useRef, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Typewriter } from 'react-simple-typewriter'
import Head from 'next/head';
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { ProjectCard } from "@components/ProjectCard"
import { ProjectDetail } from "@components/ProjectDetail"
import { projects } from "@utils/projects"
import { Clock } from "lucide-react"

const HomePage: React.FC = () => {
  const t = useTranslations("homePage")
  const [footerVisible, setFooterVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const [currentDate, setCurrentDate] = useState<string>("")
  
  const typewriterStrings = [
    t('typewriter1') || 'Hello there! Welcome to my portfolio.',
    t('typewriter2') || 'I hope you enjoy your stay.',
  ]

  useEffect(() => {
    // Set the date client-side only after hydration is complete
    const date = new Date()
    setCurrentDate(
      date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    )

    const footerObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setFooterVisible(true)
          if (footerRef.current) {
            footerObserver.unobserve(footerRef.current)
          }
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      footerObserver.observe(footerRef.current)
    }

    // Store the ref in a variable for cleanup
    const currentFooterRef = footerRef.current

    return () => {
      if (currentFooterRef) {
        footerObserver.unobserve(currentFooterRef)
      }
    }
  }, [])

  return (
    <>
         <Head>
        <title>Jhonathandev | Portfolio</title>
        <meta
          name="description"
          content="Jhonathan Hartswing Saldarriaga Gallango, Full Stack Developer"
        />
      </Head>
  
    <div className="flex flex-col min-h-screen bg-[#EFE8DE]">

      <Header />

      {/* Masthead */}
      <div className="border-b border-[#4F60A5] py-4 px-6 bg-[#EFE8DE] relative">
        <div className="container px-0 mx-auto flex justify-between items-center ">
          <div className="flex items-center border border-dashed p-3 border-[#4F60A5]">
            <Clock className="h-5 w-5 mr-2" />
            <span className="text-sm font-serif">
              {currentDate}
            </span>
          </div>
          <div className="text-sm font-serif border border-dashed p-3 border-[#4F60A5]">{t("issueNumber", { number: "001" })}</div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="bg-[#EFE8DE] border-b border-[#4F60A5]">
        <div className="container px-0 mx-auto border-x border-dashed border-[#4F60A5] flex flex-row">
          <div className="flex flex-col w-4/5 ">
            <div className="h-[50vh]">
              <h1 className=" break-words font-black text-6xl md:text-9xl tracking-tighter text-left mb-6 font-serif w-full overflow-hidden leading-tight">
                <div className="w-full h-auto min-h-[1.2em] py-2">
                  <Typewriter
                    words={ typewriterStrings }
                    typeSpeed={140}
                    loop={0}
                  />
                </div>
              </h1>
            </div>
            <div className="w-full border-t border-[#4F60A5] border-dashed py-3">
              <p className="font-secondaryFont font-normal pl-5 md:pl-0 text-xl md:text-2xl text-left leading-relaxed">{t("heroDescription")}</p>
            </div>
          </div>
          {/* Vertical dividers */}
          <div className="w-1/5 border-l border-dotted border-[#4F60A5] diagonal-pattern "></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 border-grid relative">
        <div className="container px-0 pt-12 mx-auto border-x border-dashed border-[#4F60A5]">
          <div className="border-b border-[#4F60A5] mb-8">
            <h2 className="text-6xl font-bold font-serif tracking-tight pb-4">{t("featuredProjects")}</h2>
          </div>

          {selectedProject === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project.id)} />
              ))}
            </div>
          ) : (
            <ProjectDetail
              project={projects.find((p) => p.id === selectedProject)!}
              onClose={() => setSelectedProject(null)}
            />
          )}
          <div className="w-full h-40 border-x border-dotted border-[#4F60A5] diagonal-pattern "></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#EFE8DE] relative">
        <div className="container mx-auto px-0 py-0 border-x border-dashed border-[#4F60A5]">
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 relative">
            <div>
              <div className="border-b border-[#4F60A5] mb-8">
                <h2 className="px-5 md:px-0 font-baseFont text-6xl font-bold font-serif tracking-tight mb-4">{t("aboutTitle")}</h2>
              </div>
              <p className="text-lg font-secondaryFont font-normal leading-relaxed mb-4 px-5">{t("aboutDescription")}</p>
              <p className="text-lg font-secondaryFont font-normal  leading-relaxed px-5">{t("aboutDescription2")}</p>
            </div>
            <div className="flex">
              <div className="container mx-auto px-0 mt-10 md:mt-0 ">
                <div className="border-b border-[#4F60A5] mb-8 md:pl-10">
                  <h2 className="px-5 md:px-0 font-baseFont text-6xl font-bold font-serif tracking-tight pb-4">{t("skillsTitle")}</h2>
                </div>
                <div className="px-5 md:px-0 grid grid-cols-2 md:grid-cols-4 gap-4 relative text-center md:pl-10">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind",
                    "React Native",
                    "MongoDB",
                    "PostgreSQL",
                    "AWS",
                    "Nest.js",
                    "Linux",
                    "Docker",
                    "Kubernetes",
                    "Redis",
                    "MySQL",
                    "Terraform",
                    "Bash",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="border-2 border-black p-4 bg-white hover:bg-black hover:text-white transition-colors"
                    >
                      <span className="font-serif text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Footer */}
      <div
        ref={footerRef}
        className={`transition-all duration-1000 ease-in-out mt-auto ${footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <Footer />
      </div>
      </div>
    </>
  )
}

export default HomePage