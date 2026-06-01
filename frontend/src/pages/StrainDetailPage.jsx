import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";

const StrainDetailPage = () => {
    const [strain, setStrain] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const fetchStrain = async () => {
            try {
                const res = await api.get(`/strains/${id}`);
                setStrain(res.data);
            } catch (error) {
                console.log("Error fetching strain:", error);
                toast.error("Failed to load strain.");
            } finally {
                setLoading(false);
            }
        };
        fetchStrain();
    }, [id]);

    console.log({ strain });
    return <div>StrainDetailPage</div>;
};

export default StrainDetailPage;
