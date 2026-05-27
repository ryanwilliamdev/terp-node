import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const CreatePage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [cultivator, setCultivator] = useState("");
    const [terpenes, setTerpenes] = useState([]);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("http://localhost:3000/api/strains", {
                name,
                type,
                cultivator,
                terpenes,
                description,
            });

            toast.success("Strain created!");
            navigate("/");
        } catch (error) {
            console.error("Error creating strain:", error);
            toast.error(
                error.response?.data?.message ?? "Failed to create strain.",
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Link to={"/"} className="btn btn-ghost mb-6">
                        <ArrowLeftIcon className="size-5" />
                        Back to Strains
                    </Link>

                    <div className="card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">
                                Add New Strain
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Strain Name"
                                        className="input input-bordered"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
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
                                        value={type}
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
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
                                        value={cultivator}
                                        onChange={(e) =>
                                            setCultivator(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">
                                            Terpenes
                                        </span>
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
                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        disabled={loading}
                                    >
                                        {loading
                                            ? "Creating..."
                                            : "Create Strain"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePage;
