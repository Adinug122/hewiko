import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react"

export default function Navbar() {

  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }

  return (
<header className="fixed top-0 left-0 w-full z-50 border-b border-white/5  backdrop-blur-sm bg-gray-900 ">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
    <a
      href="#home"
      title=""
      className="flex items-center gap-1 text-xl text-gray-700 dark:text-gray-200"
    >
  
      <span className="font-semibold sm:block">HEWIKO</span>

    </a>
    <div className="hidden items-center md:block">
      <nav aria-label="Global" className="flex justify-center">
        <ul className="flex items-center justify-center gap-6 text-sm">
          <li>
            <a
              className="text-white hover:text-primary transition-all"
              href="#home"
            >
              {" "}
              Home{" "}
            </a>
          </li>
          <li>
            <a
              className="text-white transition-all hover:text-primary"
              href="#team"
            >
              {" "}
              Team{" "}
            </a>
          </li>
          <li>
            <a
              className="text-white transition-all hover:text-primary"
              href="#service"
            >
              {" "}
              Service{" "}
            </a>
          </li>
          <li>
            <a
              className="text-white transition-all hover:text-primary"
              href="#project"
            >
              {" "}
              Project{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="flex items-center">
      <div className="flex items-center gap-4">
        <a href='#contact' className='hidden md:block bg-primary rounded-lg px-3 py-2 text-slate-800 font-bold hover:opacity-90 transition-opacity'>
          Hubungi Kami
        </a>

        <button onClick={toggleMenu} className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

  </div>
  <AnimatePresence>

    {isOpen &&(
      <motion.div
      initial={{ opacity:0,y:-10 }}
         animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="md:hidden bg-gray-900 border-b border-primary/20 p-4 space-y-4">
      <a href="#home" className="block text-white font-medium border-b-2 border-transparent hover:border-primary transition-all duration-300 py-1">
        Home
      </a>
      <a href="#team" className="block text-white font-medium border-b-2 border-transparent hover:border-primary transition-all duration-300 py-1">
        Team
      </a>
      <a href="#service" className="block text-white font-medium border-b-2 border-transparent hover:border-primary transition-all duration-300 py-1">
        Service
      </a>
      <a href="#project" className="block text-white font-medium border-b-2 border-transparent hover:border-primary transition-all duration-300 py-1">
        Project
      </a>
           <a href="#contact" className='block w-full text-center bg-primary rounded-lg px-3 py-2 text-gray-950 font-bold shadow-[0_0_15px_rgba(0,210,255,0.4)] hover:shadow-[0_0_25px_rgba(0,210,255,0.6)] transition-all duration-300'>
  Hubungi Kami
</a>
          </motion.div>
    )}
  </AnimatePresence>  
</header>
  )
}


