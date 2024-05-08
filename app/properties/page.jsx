import React from "react";
import PropertyCard from "@/components/PropertyCard.jsx";

async function fetchProperties() {
  try {
    const res = await fetch("http://localhost:3000/api/properties");
    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const PropertiesPage = async () => {
  const properties = await fetchProperties();
  properties.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                {<PropertyCard key={property._id} property={property} />}{" "}
              </div>
            ))}{" "}
          </div>
        )}{" "}
      </div>
    </section>
  );
};

export default PropertiesPage;
