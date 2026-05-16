import mongoose from 'mongoose';

const strainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: [String],
        required: true,
    },
    cultivator: {
        type: String,
        required: true,
    },
    terpenes: {
        type: [String],
        required: true,
    },
    flavor: {
        type: [String],
        required: true,
    },
});

const strainNoteSchema = new mongoose.Schema({
    strain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Strain',
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // createdAt and updatedAt

const Strain = mongoose.model('Strain', strainSchema);
const StrainNote = mongoose.model('StrainNote', strainNoteSchema);

export { Strain, StrainNote };