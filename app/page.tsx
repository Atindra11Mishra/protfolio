import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Linkedin, Mail, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Atindra<span className="text-primary">.dev</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button><Link href="#contact">Contact Me</Link></Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <Badge className="mb-4">Available for Work</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Turning Ideas into Digital Reality</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Atindra Mishra</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mb-8">
            A passionate Web & Blockchain Developer crafting innovative digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 border-t">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/img.jpg?height=600&width=600"
                alt="Atindra Mishra"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-4">
                I'm a full-stack developer specializing in building exceptional digital experiences. With expertise in
                both Web2 and Web3 technologies, I bridge the gap between traditional web development and blockchain
                innovation.
              </p>
              <p className="text-muted-foreground mb-6">
                My approach combines technical excellence with creative problem-solving to deliver solutions that not
                only meet but exceed client expectations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <p className="text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Backend</h3>
                  <p className="text-muted-foreground">Node.js, Express, MongoDB, PostgreSQL</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Blockchain</h3>
                  <p className="text-muted-foreground">Solidity, Ethers.js, Hardhat, IPFS</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Tools</h3>
                  <p className="text-muted-foreground">Git, Docker, AWS, Vercel, Firebase</p>
                </div>
              </div>
              <Button asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold mb-12 text-center">My Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Modern, responsive websites and web applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I build fast, responsive, and user-friendly websites using the latest technologies and best practices.
                  From simple landing pages to complex web applications, I deliver solutions that drive results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Development</CardTitle>
                <CardDescription>Smart contracts and decentralized applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I develop secure and efficient smart contracts and decentralized applications (dApps) on various
                  blockchain platforms. My solutions leverage the power of blockchain to create transparent and
                  trustless systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Full-Stack Solutions</CardTitle>
                <CardDescription>End-to-end development services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I provide comprehensive full-stack development services, handling everything from frontend design to
                  backend implementation. My holistic approach ensures seamless integration and optimal performance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>Intuitive and engaging user experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I create intuitive and visually appealing user interfaces that enhance user experience. My designs
                  focus on usability, accessibility, and aesthetic appeal to ensure maximum engagement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>API Development</CardTitle>
                <CardDescription>Robust and scalable API solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I develop RESTful and GraphQL APIs that are secure, efficient, and well-documented. My API solutions
                  enable seamless integration between different systems and services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technical Consultation</CardTitle>
                <CardDescription>Expert advice and strategic guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I provide technical consultation to help businesses make informed decisions about their technology
                  stack and development approach. My expertise helps clients navigate complex technical challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <Tabs defaultValue="web2" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="web2">Web2 Projects</TabsTrigger>
                <TabsTrigger value="web3">Web3 Projects</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="web2" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                <ProjectCard
                  title="Real Estate App #1"
                  description="Developed an interactive React website for 'RSVP Group' to showcase real estate
                   projects, enabling seamless property exploration with modern and responsive
                   and responsive design for a Client based in Texas, US."
                  image="/rental.png?height=300&width=500"
                  tags={["React", "Vercel", "Tailwind Css", "Material UI"]}
                  githubUrl="https://github.com/Atindra11Mishra/Rental.git"
                  liveUrl="https://www.rsvpreal-estate.com/"
                />
                <ProjectCard
                  title="Real Estate App #2"
                  description="Built 'Real Estate website showcasing real estate projects with a streamlined
                  interface for exploring properties and connecting with companies for a Client based in Indore, India"
                  image="/realspace.png?height=300&width=500"
                  tags={["React", "Vercel", "Tailwind Css", "Material UI"]}
                  githubUrl="https://github.com/Atindra11Mishra/RSG1.git"
                  liveUrl="https://www.realspacegroup.in/"
                />
                <ProjectCard
                  title="Advanced Spotify Clone"
                  description="Developed a Spotify clone with real-time chat and activity tracking, allowing users
                  to see what others are listening to and interact seamlessly. Built using MERN stack
                  and WebSocket for real-time features.."
                  image="/spotify.png?height=300&width=500"
                  tags={["React", "Node.js", "Express", "MongoDB"]}
                  githubUrl="https://github.com/Atindra11Mishra/Spotify-clone-master.git"
                  liveUrl="https://spotify-clone-master.onrender.com/"
                />
              </div>
            </TabsContent>
            <TabsContent value="web3" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="NFT Marketplace"
                  description="A decentralized marketplace for creating, buying, and selling NFTs with wallet integration."
                  image="/nft.png?height=300&width=500"
                  tags={["Nextjs", "Solidity", "Ethers.js", "IPFS"]}
                  githubUrl="https://github.com/Atindra11Mishra/nft-marketplace.git"
                  liveUrl="https://nft-marketplace-topaz-chi.vercel.app/"
                />
                <ProjectCard
                  title="DeFi Dashboard"
                  description="A comprehensive dashboard for monitoring and managing DeFi investments across multiple protocols."
                  image="/defi.png?height=300&width=500"
                  tags={["Next.js", "Web3.js", "The Graph", "Tailwind CSS"]}
                  githubUrl="https://github.com/Atindra11Mishra/defi.git"
                  liveUrl="https://defi-puce.vercel.app/"
                />
               
              </div>
            </TabsContent>
          </Tabs>
        </section>


        {/* Approach Section */}
        <section className="py-12 md:py-24 border-t relative overflow-hidden">
          {/* Sparkly background effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-primary/15 blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-primary/20 blur-xl"></div>
          </div>

          <div className="container relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              My Development Approach
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group relative bg-gradient-to-br from-background to-muted border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-8 h-8 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8V12L15 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 4.2C8.8 3.44 10.4 3 12 3C16.98 3 21 7.02 21 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3">Planning & Strategy</h3>
                  <p className="text-muted-foreground">
                    We'll collaborate to map out your website's, Software goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-gradient-to-br from-background to-muted border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-8 h-8 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12.9 3H11.1C10.6 3 10.3 3.5 10.4 3.9L10.9 6.4C10.6 6.5 10.3 6.7 10 6.9L7.8 5.9C7.4 5.7 6.9 5.8 6.7 6.2L5.8 7.8C5.6 8.2 5.7 8.7 6.1 8.9L8.1 10C8.1 10.3 8.1 10.7 8.1 11L6.1 12.1C5.7 12.3 5.6 12.8 5.8 13.2L6.7 14.8C6.9 15.2 7.4 15.4 7.8 15.1L10 14.1C10.3 14.3 10.6 14.5 10.9 14.6L10.4 17.1C10.3 17.5 10.5 18 11.1 18H12.9C13.4 18 13.7 17.5 13.6 17.1L13.1 14.6C13.4 14.5 13.7 14.3 14 14.1L16.2 15.1C16.6 15.3 17.1 15.2 17.3 14.8L18.2 13.2C18.4 12.8 18.3 12.3 17.9 12.1L15.9 11C15.9 10.7 15.9 10.3 15.9 10L17.9 8.9C18.3 8.7 18.4 8.2 18.2 7.8L17.3 6.2C17.1 5.8 16.6 5.6 16.2 5.9L14 6.9C13.7 6.7 13.4 6.5 13.1 6.4L13.6 3.9C13.7 3.5 13.4 3 12.9 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3">Development & Progress Update</h3>
                  <p className="text-muted-foreground">
                  Once we finalize the plan, I begin the development process with full focus and dedication. From initial wireframes to the final implementation, I ensure consistent updates and transparent communication throughout.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-gradient-to-br from-background to-muted border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-8 h-8 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 7L12 12L4 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 17L12 12L20 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 2V7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3">Development & Launch</h3>
                  <p className="text-muted-foreground">
                    This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="mt-12 text-center">

            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <Image
                      src="data:image/jpeg;base64,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"
                      alt="Client"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Sheetal Shukla</h3>
                    <p className="text-sm text-muted-foreground">CEO, RealSpace Group</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Atindra has done an outstanding job on the RealSpace Group website. His creativity and commitment brought our ideas to reality. We’re thrilled with the results and proud to present it!."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <Image
                      src="/sourabh.jpg?height=100&width=100"
                      alt="Client"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Sourabh Tiwari</h3>
                    <p className="text-sm text-muted-foreground">Founder, RSVP Groups</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "I'm truly impressed with Atindra's work on the RSVP Groups website. His creativity, professionalism, and attention to detail exceeded expectations. We're proud to showcase this platform—thank you for your excellent work!"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

       {/* Contact Section */}
<section id="contact" className="py-12 md:py-24 border-t">
  <div className="container max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
    <div className="bg-card rounded-lg border p-8 shadow-lg">
      <div className="text-center mb-8">
        <p className="text-xl text-muted-foreground mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
          vision.
        </p>
        <p className="text-muted-foreground">Feel free to reach out through any of the channels below.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
          <Mail className="h-10 w-10 text-primary mb-4" />
          <h3 className="font-bold text-lg mb-2">Email</h3>
          <p className="text-center">atin.mishra11@gmail.com</p>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=atin.mishra11@gmail.com" className="inline-flex items-center justify-center rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline mt-2">
            Send an email
          </Link>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
          <Linkedin className="h-10 w-10 text-primary mb-4" />
          <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
          <p className="text-center">Atindra Mishra</p>
          <Link href="https://www.linkedin.com/in/atindra-mishra-ab0577202/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline mt-2">
            Connect with me
          </Link>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
          <Twitter className="h-10 w-10 text-primary mb-4" />
          <h3 className="font-bold text-lg mb-2">Twitter</h3>
          <p className="text-center">@AtinMishra11</p>
          <Link href="https://twitter.com/AtinMishra11" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline mt-2">
            Follow me
          </Link>
        </div>

        <div className="flex flex-col items-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
          <Github className="h-10 w-10 text-primary mb-4" />
          <h3 className="font-bold text-lg mb-2">GitHub</h3>
          <p className="text-center">Atindra11Mishra</p>
          <Link href="https://github.com/Atindra11Mishra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline mt-2">
            See my code
          </Link>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-muted-foreground">Based in Indore, India</p>
        <p className="text-muted-foreground mt-2">Available for remote work worldwide</p>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
  <div className="container flex flex-col items-center justify-center text-center">
    <p className="text-sm">
      © {new Date().getFullYear()} Atindra Mishra. All rights reserved.
    </p>
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
