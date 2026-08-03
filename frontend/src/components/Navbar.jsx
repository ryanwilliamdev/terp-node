import { Link } from "react-router";
import { PlusIcon, Cannabis } from "lucide-react";

const Navbar = () => {
    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-success font-mono tracking-tight">
                        <Link
                            to={"/"}
                            className="inline-flex items-center gap-2"
                        >
                            <Cannabis className="size-8" /> TerpNode
                        </Link>
                    </h1>
                    <div className="flex items-center gap-4">
                        <Link to={"/create"} className="btn btn-success">
                            <PlusIcon className="size-5" />
                            <span>Add a Strain</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
