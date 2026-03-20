export default function Footer() {
  return (
    <footer className="bg-xperts-black text-white pt-12 pb-8 border-t-4 border-xperts-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Brand */}
          <div className="flex items-start gap-4">
            <div className="bg-white rounded-lg p-2 flex-shrink-0">
              <img
                src="/Logo.jpeg"
                alt="Xperts Services"
                className="h-14 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Xperts Services</h3>
              <p className="text-gray-400 text-sm">Experts at Your Service</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-xperts-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>104 W Magnolia St, Suite 3152<br />Bellingham, WA 98225</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-xperts-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:3606857866" className="hover:text-white transition-colors">360-685-7866</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-xperts-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:operations@xpertsservices.com" className="hover:text-white transition-colors">operations@xpertsservices.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-xperts-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://www.xpertsservices.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.xpertsservices.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Our Work</a>
              <a href="#coverage" className="text-gray-400 hover:text-white transition-colors">Coverage</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Coverage Area */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Coverage Area</h4>
            <p className="text-gray-400 text-sm">
              Pacific Northwest & Southwest • California • Arizona
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Xperts Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
