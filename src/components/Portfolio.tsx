"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { portfolioItems, type PortfolioItem } from "../data/portfolio-items"

export default function PortfolioSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = portfolioItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section className="h-screen bg-[#020817] p-2 md:p-4 overflow-hidden">
      <div className="flex flex-col h-full max-w-7xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-2xl font-bold flex-shrink-0">PORTFOLIO</h2>

        <div className="w-full max-w-xl flex-shrink-0">
          {/* <Input
            type="search"
            placeholder="Search"
            className="w-full bg-white text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          /> */}
        </div>

        <div className="overflow-y-auto flex-grow pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center text-gray-400 py-12">No projects found matching your search criteria</div>
          )}
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-800">
      <CardContent className="p-0">
        <div className="relative h-24 w-full">
          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
        <p className="text-sm text-gray-400">{item.description}</p>
        <Link href={item.link} className="text-[#4ADE80] hover:text-[#22c55e] text-sm mt-2">
          View Project →
        </Link>
      </CardFooter>
    </Card>
  )
}