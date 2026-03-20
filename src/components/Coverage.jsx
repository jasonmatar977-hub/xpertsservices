const coverageData = [
  { state: 'Washington', technicians: 115, abbr: 'WA' },
  { state: 'Oregon', technicians: 67, abbr: 'OR' },
  { state: 'California', technicians: 86, abbr: 'CA' },
  { state: 'Nevada', technicians: 41, abbr: 'NV' },
  { state: 'Arizona', technicians: 15, abbr: 'AZ' },
  { state: 'Idaho', technicians: 45, abbr: 'ID' },
]

const citiesByState = [
  { state: 'WA', cities: ['Bellingham', 'Seattle', 'Tacoma', 'Olympia', 'Vancouver'] },
  { state: 'OR', cities: ['Eugene', 'Salem'] },
  { state: 'CA', cities: ['Sacramento', 'Fresno', 'Turlock', 'Bakersfield', 'Los Angeles', 'San Marcos'] },
  { state: 'NV', cities: ['Las Vegas'] },
  { state: 'AZ', cities: ['Phoenix', 'Tucson'] },
]

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xperts-red font-semibold text-sm uppercase tracking-widest mb-4">
            Where We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-xperts-black mb-6">
            Regional Coverage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide reliable facility services across the Pacific Northwest, California, and the Southwest. Our team of experienced technicians ensures fast response times and consistent quality across all service areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {coverageData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-xperts-red/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-xperts-red/10 flex items-center justify-center">
                  <span className="font-bold text-xperts-red text-sm">{item.abbr}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-xperts-black">{item.state}</span>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block bg-xperts-red text-white text-sm font-semibold px-3 py-2 rounded-lg">
                    {item.technicians} Technicians
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-xperts-black mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-xperts-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Service Hubs & Cities
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {citiesByState.map((item, index) => (
                <div key={index} className="border-l-4 border-xperts-red pl-4">
                  <span className="font-bold text-xperts-black text-sm uppercase tracking-wide">{item.state}</span>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.cities.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl">
          <div className="bg-xperts-red py-5 px-8 shadow-lg">
            <p className="text-white font-bold text-lg text-center tracking-wide">
              DISPATCH AVAILABILITY: 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
