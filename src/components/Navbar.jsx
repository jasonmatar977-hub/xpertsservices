import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          <a href="#" className="flex items-center flex-shrink-0">
            <img
              src="/Logo.jpeg"
              alt="Xperts Services"
              className="h-16 md:h-20 w-auto object-contain object-left"
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-xperts-black hover:text-xperts-red font-medium transition-colors text-[15px]">About</a>
            <a href="#services" className="text-xperts-black hover:text-xperts-red font-medium transition-colors text-[15px]">Services</a>
            <a href="#portfolio" className="text-xperts-black hover:text-xperts-red font-medium transition-colors text-[15px]">Our Work</a>
            <a href="#coverage" className="text-xperts-black hover:text-xperts-red font-medium transition-colors text-[15px]">Coverage</a>
            <a href="#why-us" className="text-xperts-black hover:text-xperts-red font-medium transition-colors text-[15px]">Why Us</a>
            <a href="#contact" className="bg-xperts-red hover:bg-xperts-red-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg text-[15px]">
              Request Service
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg text-xperts-black hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-xperts-black hover:text-xperts-red font-medium py-2.5">About</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-xperts-black hover:text-xperts-red font-medium py-2.5">Services</a>
              <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-xperts-black hover:text-xperts-red font-medium py-2.5">Our Work</a>
              <a href="#coverage" onClick={() => setIsOpen(false)} className="text-xperts-black hover:text-xperts-red font-medium py-2.5">Coverage</a>
              <a href="#why-us" onClick={() => setIsOpen(false)} className="text-xperts-black hover:text-xperts-red font-medium py-2.5">Why Us</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="bg-xperts-red hover:bg-xperts-red-dark text-white px-6 py-3 rounded-lg font-semibold text-center mt-2">
                Request Service
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
