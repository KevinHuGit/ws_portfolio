import Image from "next/image"
import { ProjectCard } from "@/components/project-card"
import { ExperienceItem } from "@/components/experience-item"

export function ArticleGrid() {
  return (
    <div className="space-y-10">
      {/* Projects Section */}

      <section id="Projects">
        <div className="border-b-2 border-black mb-4">
          <h2 className="text-xl font-serif font-bold uppercase tracking-wider">FEATURED PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Algorithmic Trading Portfolio Optimizer"
            description="Led the development of an algorithmic portoflio optimization tool, using 5 fundamental metrics to rebalance and personalize 
            stock holdings based on custom user inputs."
            technologies={["React", "Vite", "PostgreSQL", "Python"]}
            image="/options-trading.png?height=200&width=400"
          />
          <ProjectCard
            title="Connexa Recruitment Platform"
            description="Designed a recruitment social media platform, optimized for profile search and profile scraping, built with a chatbot handler using
LangChainGo and Ollama to enhance user engagement with personalized interactions based on user profiles."
            technologies={["Golang", "Typescript", "React", "MongoDB"]}
            image="/connexa.png?height=200&width=400"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <ProjectCard
            title="BigRedLink Open Banking API"
            description="Developed an open banking API, connecting fintech services to 3 mock bank APIs with OAuth 2.0 authentication, using custom
FDX API endpoints and AES encryption, tested with 50+ profiles on a non-relational database, with 4 intuitive UI pages."
            technologies={["Node.js", "MongoDB", "Python", "Flask"]}
            image="/brl.png?height=200&width=400"
          />
          <ProjectCard
            title="Stock Sentiment Web Application"
            description="Application using a Naive Bayes classifier for equity sentiment of financial news, with Firebase authentication, backend support for local portfolios, custom login and
signup pages, a sentiment score tracker, navigation bar, external news carousel, settings, and contact pages."
            technologies={["Typescript", "React", "Python", "Firebase"]}
            image="/stock-sentiment.png?height=200&width=400"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="Experience">
        <div className="border-b-2 border-black mb-4">
          <h2 className="text-xl font-serif font-bold uppercase tracking-wider">CAREER TRAJECTORY</h2>
        </div>

        <div className="space-y-6">
          <ExperienceItem
            company="Cornell FinTech"
            position="Senior Product Lead / Financial Software Engineer"
            period="Sep 2023 - Present"
            description="Led 2 projects, BigRedLink as a product manager and Stock Sentiment, iterating 3 backend architectures, 17 key technical features, 
            project roadmaps, and tech stack while coordinating teams of 10+ business analysts and software engineers using the 
            Agile Scrum methodology."
          />
          <ExperienceItem
            company="Cornell University Sustainable Design (CUSD)"
            position="Team Lead of Currents Mobile App"
            period="Sep 2023 - Present"
            description="Piloting an infrastructure-free HVAC app, using React Native, connected to HVAC BACnet Gateway via AWS 
            backend architecture with Golang and PocketBase. Led and recruited 33 members in mobile, backend, ML, modeling, and business teams, 
            updating 67 pages of technical documentation."
          />
          <ExperienceItem
            company="SWIFT (Society for Worldwide Interbank Financial Telecommunications) "
            position="Software Innovation Intern"
            period="June 2024 - Aug 2024"
            description="Presented a custom RAG LLM demo using AWS Bedrock models with an interactive web app, 
            demonstrating GenAI in 3 operational use cases, supporting data navigation of 150,000+ documents and 11,500+ clients. 
            Finalist in Swift hackathon, presenting a smart query of 96k+ Confluence pages, using corrective RAG (CRAG), built 
            with LangChain, Flask, and Python over 3 days."
          />
          <ExperienceItem
            company="AlgoLink"
            position="ML Intern"
            period="June 2024 - Aug 2024"
            description="Trained an ML model for optimizing ability vector selection of scored test results, using logistic regression 
            and a scraping script for collecting data from 512+ interview questions, deployed for an education matching recruitment platform."
          />
          <ExperienceItem
            company="SQOR Technologies"
            position="Corporate Development Analyst"
            period="June 2023 - Aug 2023"
            description="Established new CRM system for C-Suite, prospecting over 750 Series A, angel, and pre-seed investors. 
            Founded internal processes to produce product updates to 1000+ contacts, 3 investor profiles of $500M+ AUM funds, 5 capital raise 
            applications, and various pitch materials for pre-seed/angel raise."
          />
          <ExperienceItem
            company="Vectr Ventures"
            position="Research and Sourcing Analyst"
            period="Jan 2023 - May 2023"
            description="Sourced 15+ startups, passing 2 companies to investment team for upcoming $10m+ fintech fund, and conducted 
            diligence on 5 fintech/climate tech verticals to pitch twice with a Hong Kong VC firm, concentrating on AI use in real estate 
            investment strategy, green development, and efficient management."
          />
          <ExperienceItem
            company="JP Morgan Chase"
            position="Technology Analyst"
            period="June 2022 - Aug 2022"
            description="Developed and managed a robotic automation process using UiPath to streamline the weekly delivery of 1500+ 
            Corporate & Investment Banking issues through the global technology database, and later, all data quality updates (20,000+) 
            encompassing all lines of businesses (CIB, CCB, Asset Management, etc.)."
          />

        </div>
      </section>

      {/* About Section */}
      <section id="Profile">
        <div className="border-b-2 border-black mb-4">
          <h2 className="text-xl font-serif font-bold uppercase tracking-wider">PROFILE</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Kevin Hu: At the Intersection of Finance and Technology
            </h3>
            <div className="font-serif space-y-4">
              <p>
                <span className="font-bold text-lg">NEW YORK —</span> After graduating from Hunter College High School,
                Kevin Hu entered the University of Michigan where he developed skills for finance and business at the Ross
                School of Business while double majoring in CS. He later transferred to Cornell University as a CS and Math
                Major.
              </p>
              <p>
                Today, Kevin is a part of various organizations of campus, including Cornell FinTech and Cornell University Sustainable Design.
                He has spent several summers working for major financial institutions, startups, and growth funds, leveraging skills in
                financial data analytics tools and modern technologies.
              </p>
              {/* <blockquote className="border-l-4 border-black pl-4 italic my-6">
                "The most successful financial software engineers are those who understand both the technical and
                financial aspects of the problems they're solving."
              </blockquote> */}
              <p>
                When not coding, Kevin can be found drone flying, hiking, playing basketball, traveling to new places, skiing, running,
                or exploring new technologies.
              </p>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative h-[250px] w-full mb-4">
              <Image src="/Hu_Kevin_Headshot.jpg?height=250&width=200" alt="Kevin Hu" fill className="object-cover" />
            </div>
            <div className="bg-gray-100 p-4 border-l-4 border-black">
              <h4 className="text-lg font-serif font-bold mb-2">Course Experience</h4>
              <ul className="font-serif space-y-1 text-sm">
                <li>• OOP and Data Structures</li>
                <li>• Machine Learning</li>
                <li>• Deep Learning</li>
                <li>• Natural Language Processing</li>
                {/* <li>• Analysis of Algorithms</li> */}
                <li>• Computer System Organization</li>
                <li>• Systems Programming</li>
                {/* <li>• Financial Statement Analysis</li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

