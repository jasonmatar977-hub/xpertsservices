export default function Hero() {
  return (
    <section className="relative bg-white py-24 md:py-36 lg:py-40 overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-xperts-red/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-xperts-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xperts-red font-semibold text-sm uppercase tracking-[0.2em] mb-6">
            Experts at Your Service
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-xperts-black leading-[1.1] tracking-tight mb-8">
            Reliable Facility Management Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Electrical, Plumbing, HVAC & General Maintenance
          </p>
          <a
            href="#contact"
            className="inline-block bg-xperts-red hover:bg-xperts-red-dark text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Request Service
          </a>
        </div>
      </div>
    </section>
  )
}
