import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/navbar"
import Projects from "./components/Projects"

const App=() => {

  return (
    <>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2vw_4vh] md:bg-[size:1.5vw_3vh]"></div>
          <div className="absolute left-1/2 top-[-20%] transform -translate-x-1/2 w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] md:max-w-[800px] md:max-h-[800px] lg:max-w-[1000px] lg:max-h-[1000px] rounded-full bg-[radial-gradient(circle_40%_at_50%_30%,#fbfbfb36,#000)]"></div>
    </div>
  </div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
    </div>
    </div>
    </>
  )
}

export default App
