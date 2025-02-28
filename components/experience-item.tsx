interface ExperienceItemProps {
  company: string
  position: string
  period: string
  description: string
}

export function ExperienceItem({ company, position, period, description }: ExperienceItemProps) {
  return (
    <div className="grid md:grid-cols-12 gap-4">
      <div className="md:col-span-3">
        <h3 className="text-lg font-serif font-bold">{company}</h3>
        <p className="font-serif text-sm text-gray-700">{period}</p>
      </div>
      <div className="md:col-span-9">
        <h4 className="text-lg font-serif font-bold mb-2">{position}</h4>
        <p className="font-serif text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

