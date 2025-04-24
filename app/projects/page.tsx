import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="container py-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground mb-8">A showcase of my work in web and blockchain development</p>
      </header>

      <main className="container py-8">
        <Tabs defaultValue="web2" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="web2">Web2 Projects</TabsTrigger>
              <TabsTrigger value="web3">Web3 Projects</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="web2" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-featured e-commerce platform with product management, cart functionality, and payment integration."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "MongoDB", "Stripe", "Tailwind CSS"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management application with real-time updates and team collaboration features."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Firebase", "Redux", "Material UI"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Content Management System"
                description="A custom CMS built for a media company to manage their digital content and publications."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "PostgreSQL", "GraphQL", "AWS"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Real Estate Platform"
                description="A property listing and management platform with advanced search and filtering capabilities."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Node.js", "Express", "MongoDB"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Social Media Dashboard"
                description="A dashboard for managing and analyzing social media accounts and campaigns."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Redux", "Chart.js", "Node.js"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Learning Management System"
                description="An educational platform for creating and managing online courses and student progress."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "MongoDB", "Socket.io", "AWS S3"]}
                githubUrl="#"
                liveUrl="#"
              />
            </div>
          </TabsContent>

          <TabsContent value="web3" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="NFT Marketplace"
                description="A decentralized marketplace for creating, buying, and selling NFTs with wallet integration."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Solidity", "Ethers.js", "IPFS"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="DeFi Dashboard"
                description="A comprehensive dashboard for monitoring and managing DeFi investments across multiple protocols."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "Web3.js", "The Graph", "Tailwind CSS"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="DAO Governance Platform"
                description="A platform for decentralized governance, allowing token holders to propose and vote on changes."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Solidity", "Hardhat", "TypeScript"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Blockchain Explorer"
                description="A custom blockchain explorer for a Layer 2 solution with transaction tracking and analytics."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "Ethers.js", "PostgreSQL", "Redis"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Token Swap Platform"
                description="A decentralized exchange for swapping tokens with liquidity pools and yield farming."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Solidity", "Uniswap SDK", "Ethers.js"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Blockchain Identity Solution"
                description="A self-sovereign identity solution using blockchain for secure and private identity verification."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "Solidity", "IPFS", "Zero-knowledge proofs"]}
                githubUrl="#"
                liveUrl="#"
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
          <p className="text-center md:text-left text-sm">
            © {new Date().getFullYear()} Atindra Mishra. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <ExternalLink size={20} />
              <span className="sr-only">Website</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, image, tags, githubUrl, liveUrl }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
