import { useState } from "react";
import { useEffect } from "react";
import { TableRowsSplit } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import StrainCard from "../components/StrainCard";
import RateLimitedUI from "../components/RateLimitedUI";
import Navbar from "../components/Navbar";

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [strains, setStrains] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStrains = async () => {
            try {
                const res = await api.get("/strains");
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
            <div className="max-w-7xl mx-auto p-4 mt-6">
                {loading && (
                    <div className="text-center text-success py-10">
                        Loading strains...
                    </div>
                )}
                {strains.length > 0 && !isRateLimited && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {strains.map((strain) => (
                            <StrainCard key={strain._id} strain={strain} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
