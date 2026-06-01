import { Leaf } from "lucide-react";
import { Link } from "react-router";

const StrainsNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            <div className="bg-primary/10 rounded-full p-8">
                <Leaf className="size-10 text-success" />
            </div>
            <h3 className="text-2xl font-bold">No strains yet.</h3>
            <p className="text-base-content/70">
                Ready to organize your cannabis experience? Add your first
                strain to get started.
            </p>
            <Link to="/create" className="btn btn-success">
                Add Your First Strain
            </Link>
        </div>
    );
};
export default StrainsNotFound;
