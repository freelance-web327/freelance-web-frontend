const categories = [
  { name: "Writing & Translation", services: 1 },
  { name: "Music & Audio", services: 0 },
  { name: "Video & Animation", services: 0 },
  { name: "Programming & Tech", services: 1 },
  { name: "Development", services: 8 },
];

function Category() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Browse services by category
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {categories.map((category, index) => (
          <div key={index} className="max-w-xs p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{category.name}</h3>
            <p className="text-gray-600">
              {category.services} Service{category.services !== 1 && "s"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
