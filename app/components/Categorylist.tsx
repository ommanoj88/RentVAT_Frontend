const categories = [
    "Electronics",
    "Furniture",
    "Vehicles",
    "Cameras",
    "Tools",
    "Sports",
    "Fashion",
    "Books"
  ];
  
  export default function CategoryList() {
    return (
      <div className="grid grid-cols-4 gap-4 p-4">
        {categories.map((category) => (
          <button key={category} className="bg-gray-100 p-3 rounded-lg shadow hover:bg-gray-200">
            {category}
          </button>
        ))}
      </div>
    );
  }
  