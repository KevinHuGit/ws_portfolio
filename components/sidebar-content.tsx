import Image from "next/image"
import Link from "next/link"

export function SidebarContent() {
  return (
    <div className="space-y-8">
      {/* Education Section */}
      <section>
        <div className="border-b-2 border-black mb-4">
          <h2 className="text-xl font-serif font-bold uppercase tracking-wider">EDUCATION</h2>
        </div>

        <div className="space-y-4">
          <div className="font-serif">
            <h3 className="font-bold text-lg">Cornell University</h3>
            <p className="text-sm">B.A. Computer Science and Mathematics</p>
            <p className="text-sm italic">2023 - 2026</p>
            <p className="mt-2">
              Graduating with a degree in CS and minor in Business/Finance. Experience wtih computational finance and machine learning applications in financial markets.

            </p>
          </div>

          <div className="font-serif">
            <h3 className="font-bold text-lg">University of Michigan - Ross School of Business</h3>
            <p className="text-sm">B.B.A Concentration in Finance</p>
            <p className="text-sm italic">2022 - 2023</p>
            <p className="mt-2">
              Completed coursework in financial modeling and object-oriented programming. Focused on startups and VC, gaining practical experience in financial analysis and technology-driven financial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section>
        <div className="border-b-2 border-black mb-4">
          <h2 className="text-xl font-serif font-bold uppercase tracking-wider">PUBLICATIONS</h2>
        </div>

        {/* <div className="space-y-4 font-serif">
          <div>
            <h3 className="font-bold">Publication Pending</h3>
            <p className="italic text-sm">2025</p>
          </div>
        </div> */}
      </section>

      {/* Newsletter Signup */}
      {/* <section>
        <div className="border-b-2 border-black mb-4">
          <h2 className="text-xl font-serif font-bold uppercase tracking-wider">NEWSLETTER</h2>
        </div>

        <div className="bg-[#f4f1e8] p-4 border border-gray-300">
          <h3 className="font-serif font-bold mb-2">Stay Updated</h3>
          <p className="font-serif text-sm mb-4">
            Subscribe to receive updates on my latest projects, publications, and industry insights.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-2 font-serif text-sm border border-gray-300"
            />
            <button className="bg-black text-white px-4 py-2 font-serif text-sm">Subscribe</button>
          </div>

          <p className="font-serif text-xs mt-2 text-gray-600 italic">Delivered monthly. Unsubscribe anytime.</p>
        </div>
      </section> */}

      {/* Advertisement */}
      <section>
        <div className="border border-gray-300 p-4 bg-white">
          <div className="text-xs font-serif text-gray-500 mb-2 text-center">ADVERTISEMENT</div>
          <div className="relative h-[250px] w-full">
            <Image src="/currents.jpg?height=250&width=300" alt="Advertisement" fill className="object-cover" />
          </div>
          <div className="mt-2 text-center">
            <h3 className="font-serif font-bold">Join Currents!</h3>
            <p className="font-serif text-sm">Looking for backend software engineers to join a sustainability and technically fulfilling project.</p>
            <Link href="https://www.cusd.site/" className="font-serif text-sm text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact">
        <div className="border-b-2 border-black mb-4">
          <h2 className="text-xl font-serif font-bold uppercase tracking-wider">CONTACT INFORMATION</h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Get In Touch</h3>
            <p className="font-serif mb-6">
              To connect with Kevin, please use the following contact information:
            </p>

            <div className="space-y-3 mb-6">
              <div className="font-serif">
                <span className="font-bold">Email:</span> kh785@cornell.edu
              </div>
              <div className="font-serif">
                <span className="font-bold">LinkedIn:</span> linkedin.com/in/khu22
              </div>
              <div className="font-serif">
                <span className="font-bold">GitHub:</span> github.com/kevinhugit
              </div>
              {/* <div className="font-serif">
                <span className="font-bold">Substack:</span> kvnhu.substack.com
              </div> */}
            </div>

            <div className="border-t border-gray-300 pt-4">
              <p className="font-serif text-sm italic">
                Based in New York City. Available for rellocation.
              </p>
            </div>
          </div>

          {/* <div className="bg-[#f4f1e8] p-6 border border-gray-300">
            <h3 className="text-2xl font-serif font-bold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-serif mb-1 text-sm">
                  Name
                </label>
                <input id="name" className="w-full border border-gray-300 p-2 font-serif bg-white" />
              </div>
              <div>
                <label htmlFor="email" className="block font-serif mb-1 text-sm">
                  Email
                </label>
                <input id="email" type="email" className="w-full border border-gray-300 p-2 font-serif bg-white" />
              </div>
              <div>
                <label htmlFor="subject" className="block font-serif mb-1 text-sm">
                  Subject
                </label>
                <input id="subject" className="w-full border border-gray-300 p-2 font-serif bg-white" />
              </div>
              <div>
                <label htmlFor="message" className="block font-serif mb-1 text-sm">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full border border-gray-300 p-2 font-serif bg-white" />
              </div>
              <button type="submit" className="bg-black text-white hover:bg-gray-800 font-serif py-2 px-4 w-full">
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </section>
    </div>
  )
}

