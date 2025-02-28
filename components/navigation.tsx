import Link from "next/link"

export function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-300 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex space-x-8">
            <Link href="#about" className="font-serif text-sm font-medium hover:text-gray-600 transition-colors">
              ABOUT
            </Link>
            <Link href="#projects" className="font-serif text-sm font-medium hover:text-gray-600 transition-colors">
              PROJECTS
            </Link>
            <Link href="#experience" className="font-serif text-sm font-medium hover:text-gray-600 transition-colors">
              EXPERIENCE
            </Link>
            <Link href="#skills" className="font-serif text-sm font-medium hover:text-gray-600 transition-colors">
              SKILLS
            </Link>
          </div>
          <div>
            <Link href="#contact" className="font-serif text-sm font-medium hover:text-gray-600 transition-colors">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

