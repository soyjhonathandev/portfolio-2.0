"use client"

import type React from "react"
import Image from "next/image"
import { Badge } from "@components/ui/badge"
import { Button } from "@components/ui/button"
import { X, ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"
import type { Project } from "@components/ProjectCard" // Import the Project interface from ProjectCard

interface ProjectDetailProps {
    project: Project
    onClose: () => void
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
    const t = useTranslations("projects")

    return (
        <div className="bg-white border-2 border-black p-6 md:p-8">
            <div className="flex justify-end items-center mb-6">
                <Button variant="outline" size="icon" onClick={onClose} className="border-2 border-black rounded-none">
                    <X className="h-5 w-5" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full border-2 border-black overflow-hidden">
                    <Image
                        src={project.image || "/placeholder.svg?height=600&width=800"}
                        alt={project.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>
                    <h2 className=" my-5 text-2xl md:text-3xl font-bold font-serif tracking-tight">{project.name}</h2>

                    <div className="mb-6">
                    
                        <h3 className="text-xl font-bold font-serif mb-2">{t("role")}</h3>
                        <p className="font-secondaryFont font-normal ">{project.role}</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold font-serif mb-2">{t("description")}</h3>
                        <p className="font-secondaryFont font-normal ">{project.description}</p>
                    </div>

                    {project.challenges && (
                        <div className="mb-6">
                            <h3 className="text-xl font-bold font-serif mb-2">{t("challenges")}</h3>
                            <p className="font-secondaryFont font-normal ">{project.challenges}</p>
                        </div>
                    )}

                    <div className="mb-6">
                        <h3 className="text-xl font-bold font-serif mb-2">{t("technologies")}</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-black font-serif">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <Button
                        className="bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-none font-serif"
                        onClick={() => window.open(project.url, "_blank")}
                    >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t("visitProject")}
                    </Button>
                </div>
            </div>
        </div>
    )
}