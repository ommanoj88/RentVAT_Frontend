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
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            
          {categories.map((category) => (
            <div
              key={category}
              className="bg-green-200 text-green-900 py-3 px-4 text-center rounded-lg font-medium cursor-pointer hover:bg-green-300 transition"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    );
  }
  