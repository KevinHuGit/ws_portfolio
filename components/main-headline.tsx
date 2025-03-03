import Image from "next/image"
import Link from "next/link"

export function MainHeadline() {
  return (
    <section id="MainHeadline">

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div>
          <span className="font-serif text-sm font-bold uppercase tracking-wider">INTRODUCTION</span>
          <h2 className="font-serif text-4xl font-bold leading-tight mt-2 mb-4">
            Cornell CS Student Develops Innovative Online Portfolio
          </h2>
          <p className="font-serif text-lg leading-relaxed mb-4">
            <span className="font-bold">BROOKLYN, NEW YORK —</span> Kevin Hu, a CS major at Cornell University with
            strong interests in technology, finance, and sustainability, has launched a public portfolio
            of various projects in financial technology, machine learning, and web development.
          </p>
          <p className="font-serif leading-relaxed mb-4">
            The portfolio, which leverages cutting-edge frontend technologies including real-time data processing and LLM
            capabilities, demonstrates his experience in software engineering, fundamental finance, and product management.
          </p>
          <p className="font-serif leading-relaxed">
            Kevin is seeking opportunities to apply his skills, with leading technology companies and impactful projects,
            particularly in areas like fintech, machine learning, and data science. "I hope to leverage my skills with
            leading teams and developing innovative solutions.," said Hu, who previously held positions at JP Morgan Chase and SWIFT.
          </p>
          <div className="mt-4">
            <Link href="#contact" className="font-serif text-sm font-bold hover:underline">
              Continue reading below →
            </Link>
          </div>
        </div>
        <div>
          <div className="relative h-[400px] w-full border-4 border-black">
            <Image
              src="macchu-picchu.jpg?height=400&width=600"
              alt="Kevin at Macchu Picchu"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-serif text-sm mt-2 italic">
            Kevin touching grass in Macchu Picchu
          </p>
        </div>
      </div>
    </section>

  )
}

