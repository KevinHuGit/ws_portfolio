export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">THE WALL STREET PORTFOLIO</h3>
            <p className="font-serif text-sm text-gray-300">
              A showcase of Kevin Hu's work as a leader and learner.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">SECTIONS</h3>
            <ul className="space-y-2 font-serif text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Intro
                </a>
              </li>
              <li>
                <a href="#Projects" className="hover:text-gray-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Experience" className="hover:text-gray-300 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#Profile" className="hover:text-gray-300 transition-colors">
                  Profile
                </a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">FOLLOW</h3>
            <ul className="space-y-2 font-serif text-sm">
              <li>
                <a href="https://www.linkedin.com/in/khu22/" className="hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/kevinhugit" className="hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center font-serif text-sm text-gray-400">
          <p>© {currentYear} Kevin Hu. All rights reserved.</p>
          <p className="mt-1">
            <span className="mx-2">Privacy Policy</span>
            <span className="mx-2">|</span>
            <span className="mx-2">Terms of Service</span>
            <span className="mx-2">|</span>
            <span className="mx-2">Cookie Policy</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

