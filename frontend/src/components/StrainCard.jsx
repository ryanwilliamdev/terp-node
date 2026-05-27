import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";

const StrainCard = ({ strain }) => {
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
                        <button className="btn btn-ghost btn-xs text-error">
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default StrainCard;
