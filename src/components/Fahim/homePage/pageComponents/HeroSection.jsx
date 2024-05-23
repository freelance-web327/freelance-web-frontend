function HeroSection() {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Join us & Explore Thousands of Freelancers
      </h1>
      <p className="mb-8">
        Connect with skilled professionals for optimal results, all within your
        budget and schedule.
      </p>
      <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full p-4 rounded-lg shadow-md"
        />
        <button className="absolute right-2 top-2 bg-green-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      <p className="mt-4">
        Most Frequent Searches: Developer, Web, iOS, JavaScript, React, Engineer
      </p>
    </section>
  );
}

export default HeroSection;
