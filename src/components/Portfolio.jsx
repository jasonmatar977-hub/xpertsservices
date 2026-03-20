const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    alt: 'Electrical technician at work',
    caption: 'Electrical Services',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Plumbing installation',
    caption: 'Plumbing Solutions',
  },
  {
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    alt: 'HVAC system maintenance',
    caption: 'HVAC Maintenance',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    alt: 'Industrial facility maintenance',
    caption: 'Industrial Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
    alt: 'Building maintenance technician',
    caption: 'Building Maintenance',
  },
  {
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    alt: 'Skilled technician on job site',
    caption: 'Skilled Technicians',
  },
  {
    src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
    alt: 'Commercial building exterior',
    caption: 'Commercial Properties',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    alt: 'Warehouse facility',
    caption: 'Warehouse & Storage',
  },
  {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    alt: 'Technician with equipment',
    caption: 'Professional Equipment',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xperts-red font-semibold text-sm uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-xperts-black mb-6">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our team in action. From electrical upgrades to HVAC installations, we deliver quality across every trade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-xperts-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
