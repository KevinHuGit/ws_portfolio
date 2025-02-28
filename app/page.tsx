import { Masthead } from "@/components/masthead"
import { TickerTape } from "@/components/ticker-tape"
import { MainHeadline } from "@/components/main-headline"
import { ArticleGrid } from "@/components/article-grid"
import { MarketData } from "@/components/market-data"
import { SidebarContent } from "@/components/sidebar-content"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f7f1]">
      <Masthead />
      <TickerTape />

      <main className="container mx-auto px-4 py-6">
        <MainHeadline />

        <div className="grid md:grid-cols-12 gap-6 mt-8 border-t-4 border-black pt-6">
          {/* Main content - 8 columns */}
          <div className="md:col-span-8 border-r border-gray-300 pr-6">
            <ArticleGrid />
          </div>

          {/* Sidebar - 4 columns */}
          <div className="md:col-span-4">
            <MarketData />
            <SidebarContent />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

