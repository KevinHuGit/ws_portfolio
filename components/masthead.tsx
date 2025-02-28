export function Masthead() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const volumeNumber = "Vol. CCLXXXI No. 43"

  return (
    <div className="bg-white border-b border-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-xs font-serif border-b border-gray-300">
          <div className="flex items-center gap-2">
            <span>🕒</span>
            <span>{formattedDate}</span>
          </div>
          <div>
            <span>{volumeNumber} • PORTFOLIO EDITION</span>
          </div>
        </div>

        <div className="py-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">KEVIN HU</h1>
          <div className="flex justify-center items-center mt-2">
            <div className="h-0.5 w-16 bg-black mx-2"></div>
            <p className="text-sm font-serif uppercase tracking-widest">The Wall Street Portfolio</p>
            <div className="h-0.5 w-16 bg-black mx-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

