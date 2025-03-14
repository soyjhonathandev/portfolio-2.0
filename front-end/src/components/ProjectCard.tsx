"use client"

import type React from "react"
import Image from "next/image"
import { Badge } from "@components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import type { StaticImageData } from "next/image"

export interface Project {
    id: number
    image: string | StaticImageData
    name: string
    description: string
    role: string
    challenges?: string
    stack: string[]
    url: string
}

interface ProjectCardProps {
    project: Project
    onClick: () => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <article
            className="border-2 border-black bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group relative"
            onClick={onClick}
        >
  
            <div className="relative h-48 overflow-hidden border-b-2 border-black">
                <Image
                    src={project.image || "/placeholder.svg?height=300&width=500"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-6 relative">
                {/* Horizontal divider */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-black opacity-10"></div>

                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold font-serif tracking-tight line-clamp-2">{project.name}</h3>
                    <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-sm font-secondaryFont font-normal  mb-4 truncate">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="border-black font-serif">
                            {tech}
                        </Badge>
                    ))}
                    {project.stack.length > 3 && (
                        <Badge variant="outline" className="border-black font-serif">
                            +{project.stack.length - 3}
                        </Badge>
                    )}
                </div>

                <div className="text-xs font-secondaryFont font-normal  uppercase tracking-wider">{project.role}</div>
            </div>
        </article>
    )
}