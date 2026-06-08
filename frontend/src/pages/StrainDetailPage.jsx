import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const StrainDetailPage = () => {
    const navigate = useNavigate();
    const [strain, setStrain] = useState(null);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [cultivator, setCultivator] = useState("");
    const [terpenes, setTerpenes] = useState([]);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const { id } = useParams();

    const terpeneOptions = [
        "Myrcene",
        "Limonene",
        "Caryophyllene",
        "Pinene",
        "Linalool",
        "Humulene",
    ];

    const toggleTerpene = (terpene) => {
        setTerpenes((prev) =>
            prev.includes(terpene)
                ? prev.filter((t) => t !== terpene)
                : [...prev, terpene],
        );
    };
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

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this strain?"))
            return;

        try {
            await api.delete(`/strains/${id}`);
            toast.success("Strain deleted");
            navigate("/");
        } catch (error) {
            console.log("Error deleting the strain:", error);
            toast.error("Failed to delete strain");
        }
    };

    const handleSave = async () => {
        if (
            !strain.name.trim() ||
            !strain.type.trim() ||
            !strain.cultivator.trim() ||
            !strain.description.trim()
        ) {
            toast.error("Please fill out all fields");
            return;
        }

        setSaving(true);

        try {
            await api.put(`/strains/${id}`, strain);
            toast.success("Strain updated successfully");
            navigate("/");
        } catch (error) {
            console.log("Error saving the strain:", error);
            toast.error("Failed to update strain");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="size-10 animate-spin text-success" />
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/" className="btn btn-ghost">
                            <ArrowLeftIcon className="h-5 w-5" />
                            Back to Strains
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="btn btn-error btn-outline"
                        >
                            <Trash2Icon className="h-5 w-5" />
                            Delete Strain
                        </button>
                    </div>

                    <div className="card bg-base-100">
                        <div className="card-body">
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Strain Name"
                                    className="input input-bordered"
                                    value={strain.name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">
                                        Type (Lineage)
                                    </span>
                                </label>
                                <select
                                    className="select select-bordered text-base"
                                    value={strain.type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select strain type
                                    </option>
                                    <option value="Sativa">Sativa</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Indica">Indica</option>
                                </select>
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">
                                        Cultivator
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Strain Cultivator"
                                    className="input input-bordered"
                                    value={strain.cultivator}
                                    onChange={(e) =>
                                        setCultivator(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Terpenes</span>
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {terpeneOptions.map((terpene) => (
                                        <label
                                            key={terpene}
                                            className="label cursor-pointer justify-start gap-3"
                                        >
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                checked={terpenes.includes(
                                                    terpene,
                                                )}
                                                onChange={() =>
                                                    toggleTerpene(terpene)
                                                }
                                            />
                                            <span className="label-text">
                                                {terpene}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">
                                            Description
                                        </span>
                                    </label>
                                    <textarea
                                        placeholder="Describe how this strain made you feel!"
                                        className="textarea textarea-bordered h-32"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                    disabled={saving}
                                    onClick={handleSave}
                                >
                                    {saving ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrainDetailPage;
