import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const StrainCard = ({ strain, setStrains }) => {
    const handleDelete = async (e, _id) => {
        e.preventDefault(); // prevent the default form submission behavior
        if (!window.confirm("Are you sure you want to delete this strain?"))
            return;
        try {
            await api.delete(`/strains/${_id}`);
            setStrains((prev) => prev.filter((strain) => strain._id !== _id));
            toast.success("Strain deleted successfully!");
        } catch (error) {
            console.log("Error in handleDelete:", error);
            toast.error("Failed to delete strain.");
        }
    };
    return (
        <Link
            to={`/strain/${strain._id}`}
            className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
        >
            <div className="card-body">
                <h3 className="card-title text-base-content">{strain.name}</h3>
                <p className="text-base-content/70 line-clamp-3">
                    {strain.type} | {strain.cultivator} | {strain.terpenes}
                </p>
                {strain.description ? (
                    <p className="text-base-content/70 line-clamp-2 mt-2">
                        {strain.description}
                    </p>
                ) : null}
                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content/60">
                        {formatDate(new Date(strain.createdAt))}
                    </span>
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4" />
                        <button
                            className="btn btn-ghost btn-xs text-error"
                            onClick={(e) => handleDelete(e, strain._id)}
                        >
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default StrainCard;
