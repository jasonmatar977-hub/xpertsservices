export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-xperts-black relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-xperts-red rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-xperts-red rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Request a Quote
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Contact us today to get a customized quote based on your needs and location. 
          Our team is ready to assist you with fast and reliable service.
        </p>
        <a
          href="#contact"
          className="inline-block bg-xperts-red hover:bg-xperts-red-dark text-white px-12 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Request Service
        </a>
      </div>
    </section>
  )
}
