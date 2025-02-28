import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-3xl font-serif font-bold mb-6 border-b border-black pb-2">Contact</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-serif font-bold mb-4">Get In Touch</h3>
          <p className="font-serif mb-6">
            I'm always open to discussing new projects, opportunities in financial technology, or potential
            collaborations. Feel free to reach out using the form or through my social profiles.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span>✉️</span>
              <span className="font-serif">kh785@cornell.edu</span>
            </div>
            <div className="flex items-center gap-3">
              <span>🔗</span>
              <a href="#" className="font-serif hover:underline">
                https://www.linkedin.com/in/khu22/
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span>🐙</span>
              <a href="#" className="font-serif hover:underline">
                github.com/kevinhugit
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span>🐦</span>
              <a href="#" className="font-serif hover:underline">
                twitter.com/kevinhu
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 p-6">
          <h3 className="text-xl font-serif font-bold mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-serif mb-1">
                Name
              </label>
              <Input id="name" className="font-serif" />
            </div>
            <div>
              <label htmlFor="email" className="block font-serif mb-1">
                Email
              </label>
              <Input id="email" type="email" className="font-serif" />
            </div>
            <div>
              <label htmlFor="subject" className="block font-serif mb-1">
                Subject
              </label>
              <Input id="subject" className="font-serif" />
            </div>
            <div>
              <label htmlFor="message" className="block font-serif mb-1">
                Message
              </label>
              <Textarea id="message" rows={5} className="font-serif" />
            </div>
            <Button type="submit" className="bg-black text-white hover:bg-gray-800 font-serif w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

