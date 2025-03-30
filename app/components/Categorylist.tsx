const categories = [
  "Electronics",
  "Furniture",
  "Vehicles",
  "Clothing",
  "Books",
  "Sports",
  "Tools",
  "Miscellaneous",
];

export default function CategoryList() {
  return (
    <div className="mt-12 w-full max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Explore Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-white text-gray-800 border border-gray-300 px-5 py-3 text-lg font-medium rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-[1.05]"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
