export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xperts-red font-semibold text-sm uppercase tracking-widest mb-4">
              About Xperts Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-xperts-black mb-8 leading-tight">
              Your Trusted Partner in Facility Services
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Xperts Services delivers dependable facility services when you need them most. 
                Our team of licensed professionals provides fast response times and reliable service across 
                the Pacific Northwest and Southwest.
              </p>
              <p>
                Whether it&apos;s an urgent repair, routine maintenance, or comprehensive facility support, 
                we bring expertise and peace of mind to every job. Your facility deserves the best—and 
                that&apos;s exactly what we deliver.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-3xl md:text-4xl font-bold text-xperts-red mb-1">369+</p>
              <p className="text-gray-600 text-sm">Technicians</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-3xl md:text-4xl font-bold text-xperts-red mb-1">24/7</p>
              <p className="text-gray-600 text-sm">Dispatch</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-3xl md:text-4xl font-bold text-xperts-red mb-1">6</p>
              <p className="text-gray-600 text-sm">States Served</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-3xl md:text-4xl font-bold text-xperts-red mb-1">7</p>
              <p className="text-gray-600 text-sm">Core Trades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
