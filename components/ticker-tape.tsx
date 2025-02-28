"use client"

import { useEffect, useRef } from "react"

export function TickerTape() {
  const skills = [
    "Java", "Python", "C++", "OCaml", "Golang", "Typescript", "Javascript", "HTML", "SQL",
    "React", "Firebase", "Redis", "Flask", "Next.js", "Tailwind CSS", "MongoDB", "Streamlit",
    "Vercel", "HTML/CSS", "Redux", "GraphQL", "REST APIs", "NumPy", "Pandas", "PyTorch",
    "Tensorflow", "Scikit-learn", "Matplot", "PyFinance", "LangChain", "GitHub",
    "Apache Spark", "Jupyter Notebook", "PowerBI", "UiPath", "Microsoft Excel", "Docker", "AWS"
  ]

  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tickerElement = tickerRef.current
    if (!tickerElement) return

    const animate = () => {
      if (tickerElement.scrollLeft >= tickerElement.scrollWidth / 2) {
        tickerElement.scrollLeft = 0
      } else {
        tickerElement.scrollLeft += 1
      }
      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <div className="bg-black text-white py-2 overflow-hidden border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div ref={tickerRef} className="overflow-hidden whitespace-nowrap">
          <div className="inline-block">
            {skills.map((skill, index) => (
              <span key={index} className="inline-block font-mono text-sm">
                <span className="text-green-400 pr-4 mr-1">{skill}</span>
                <span className="mr-6">|</span>
              </span>
            ))}
          </div>
          <div className="inline-block">
            {skills.map((skill, index) => (
              <span key={`dup-${index}`} className="inline-block font-mono text-sm">
                <span className="text-green-400 mr-1">{skill}</span>
                <span className="mr-6">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

