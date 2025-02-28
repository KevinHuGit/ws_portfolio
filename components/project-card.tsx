import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
}

export function ProjectCard({ title, description, technologies, image }: ProjectCardProps) {
  return (
    <div className="border border-gray-300 bg-white">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
        <p className="font-serif mb-3 text-sm">{description}</p>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-serif px-2 py-0.5 border border-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

