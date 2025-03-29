export default function WhyRentingIsBest() {
  const highlights = [
    {
      icon: "/faq-icon.png",
      title: "Instant Answers",
      description: "Our FAQ covers everything—from bookings to returns, instantly.",
    },
    {
      icon: "/globe-icon.png",
      title: "Global Sharing Network",
      description: "Join a community of trusted renters across multiple countries.",
    },
    {
      icon: "/trophy-icon.png",
      title: "Trending Rentals",
      description: "See what’s popular and rent top-rated products with confidence.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-cream text-green-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Renting is Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-green-300 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <img src={item.icon} alt={item.title} className="h-12 w-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-center">{item.title}</h3>
              <p className="text-gray-700 text-center mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
