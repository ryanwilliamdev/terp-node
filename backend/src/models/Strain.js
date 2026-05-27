import mongoose from "mongoose";

const strainSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            enum: ["Sativa", "Hybrid", "Indica"],
        },
        cultivator: {
            type: String,
            required: true,
        },
        terpenes: {
            type: [String],
            required: true,
            default: [],
        },
        description: {
            type: String,
            required: false,
            default: "",
        },
    },
    { timestamps: true }, // createdAt, updatedAt
);

const strainNoteSchema = new mongoose.Schema(
    {
        strain: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Strain",
            required: true,
        },
        note: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const Strain = mongoose.model("Strain", strainSchema);
const StrainNote = mongoose.model("StrainNote", strainNoteSchema);

export { Strain, StrainNote };
