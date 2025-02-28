interface SkillCategory {
  name: string
  skills: string[]
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: ["Java", "Python", "C++", "OCaml", "Golang", "Typescript", "Javascript", "HTML", "SQL"],
    },
    {
      name: "Frontend/Backend",
      skills: ["React", "Firebase", "Redis", "Flask", "Next.js", "Tailwind CSS", "MongoDB", "Streamlit", "Vercel", "HTML/CSS", "Redux", "GraphQL", "REST APIs"],
    },
    {
      name: "Libraries/Packages",
      skills: ["NumPy", "Pandas", "PyTorch", "Tensorflow", "Scikit-learn", "Matplot", "PyFinance", "LangChain"],
    },
    {
      name: "Other Technologies",
      skills: ["GitHub", "Apache Spark", "Jupyter Notebook", "PowerBI", "UiPath", "Microsoft Excel", "Docker", "AWS"],
    },
  ]

  return (
    <section id="skills" className="mb-12 border-b border-gray-300 pb-8">
      <h2 className="text-3xl font-serif font-bold mb-6 border-b border-black pb-2">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white border border-gray-300 p-6">
            <h3 className="text-xl font-serif font-bold mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-gray-100 text-gray-800 font-serif px-3 py-1 border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

