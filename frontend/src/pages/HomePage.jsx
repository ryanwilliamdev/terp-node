import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    const [isRateLimited, setRateLimited] = useState(false);
    const [strains, setStrains] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStrains = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:3000/api/strains",
                );
                console.log(res.data);
            } catch (error) {
                console.log("Error fetching strains.");
            }
        };

        fetchStrains();
    }, []);
    return (
        <div className="min-h-screen">
            <Navbar />

            {isRateLimited && <RateLimitedUI />}
        </div>
    );
};

export default HomePage;
