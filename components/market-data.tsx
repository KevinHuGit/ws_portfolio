export function MarketData() {
  const skills = [
    { name: "React", level: "Expert", trend: "up" },
    { name: "LangChain", level: "Expert", trend: "up" },
    { name: "Python", level: "Expert", trend: "up" },
    { name: "TypeScript", level: "Advanced", trend: "up" },
    { name: "MongoDB", level: "Advanced", trend: "up" },
    { name: "C++", level: "Advanced", trend: "stable" },
    { name: "Java", level: "Advanced", trend: "stable" },
    { name: "Linux", level: "Intermediate", trend: "up" },
    { name: "Golang", level: "Intermediate", trend: "up" },
    { name: "Git", level: "Intermediate", trend: "up" },

  ]

  return (
    <div className="mb-8">
      <div className="border-b-2 border-black mb-4">
        <h2 className="text-xl font-serif font-bold uppercase tracking-wider">SKILLS INDEX</h2>
      </div>

      <div className="bg-[#f4f1e8] border border-gray-300 p-4">
        <table className="w-full font-serif text-sm">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="text-left pb-2">SKILL</th>
              <th className="text-left pb-2">LEVEL</th>
              <th className="text-right pb-2">TREND</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index} className="border-b border-gray-300 last:border-0">
                <td className="py-2 font-bold">{skill.name}</td>
                <td className="py-2">{skill.level}</td>
                <td className="py-2 text-right">
                  {skill.trend === "up" && <span className="text-green-600">▲</span>}
                  {skill.trend === "down" && <span className="text-red-600">▼</span>}
                  {skill.trend === "stable" && <span>◆</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-xs italic mt-4 text-gray-600 text-right">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}

