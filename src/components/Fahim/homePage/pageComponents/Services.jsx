import React from "react";

const services = [
  {
    title: "Developers drop the framework folder into a new parent",
    rating: 4.5,
    reviews: 2,
    price: 128,
    seller: "John Powell",
    img: "service1.png",
  },
  {
    title: "PHP framework that you can use to create your own custom",
    rating: 4.0,
    reviews: 1,
    price: 158,
    seller: "Ali Tufan",
    img: "service2.png",
  },
  {
    title: "I will often turn to a PHP framework to compose My code",
    rating: 4.0,
    reviews: 1,
    price: 68,
    seller: "Ali Tufan",
    img: "service3.png",
  },
  {
    title: "Embedded Android & AOSP customizations on app mobile",
    rating: 4.0,
    reviews: 1,
    price: 59,
    seller: "Robert Fox",
    img: "service4.png",
  },
];

function Services() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="max-w-xs p-4 border rounded-lg shadow-lg">
            <img src={service.img} alt={service.title} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">
              Rating: {service.rating} ({service.reviews} Reviews)
            </p>
            <p className="text-green-500 font-bold">
              Starting at: ${service.price}
            </p>
            <p className="text-gray-600">by {service.seller}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
