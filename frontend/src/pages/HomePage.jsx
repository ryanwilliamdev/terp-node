import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { TableRowsSplit } from "lucide-react";

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
                setStrains(res.data);
                setIsRateLimited(false);
            } catch (error) {
                console.log("Error fetching strains.");
                if (error.response.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Failed to load strains.");
                }
            } finally {
                setLoading(false);
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
