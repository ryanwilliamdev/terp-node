import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

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



    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="size-10 animate-spin text-success" />
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <Link to="/" className="btn btn-ghost">
                        <ArrowLeftIcon className="h-5 w-5">
                            Back to Strains
                        </ArrowLeftIcon>
                    </Link>
                    <button onClick={handleDelete} className="btn btn-error btn-outline">
                        <Trash2Icon className="h-5 w-5" />
                        Delete Strain
                    </button>
                </div>
            </div>
        </div>
    )
};

export default StrainDetailPage;
