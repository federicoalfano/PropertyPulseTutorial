"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import { PropertyHeaderImage } from "@/components/PropertyHeaderImage";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const data = await fetchProperty(id);
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);
  if (!property && !loading) {
    return (
      <h1 className="text-center text-3xl font-bold"> Property not found</h1>
    );
  }
  return (
    <>
      {!loading && !property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
        </>
      )}
    </>
  );
};

export default PropertyPage;
