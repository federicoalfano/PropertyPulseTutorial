'use client';

import React from "react";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {fetchProperty} from "@/utils/requests";

const PropertyPage = () => {
    const {id} = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPropertyData = async () => {
            if (!id) 
                return;
            


            try {
                const data = await fetchProperty(id);
                setProperty(data);

            } catch (error) {
                console.error('Error fetching property:', error);
            } finally {
                setLoading(false);
            }
        };
        if (property === null) {
            fetchPropertyData();
        }
    }, [id, property]);
    return <div>PropertyPage</div>;
};

export default PropertyPage;
