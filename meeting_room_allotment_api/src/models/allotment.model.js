import { Schema, model } from "mongoose";

const allotmentSchmea = new Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    roles: {
        status: {
            type: String,
            required: true
        },
        Editor: Number,
        Admin: Number
    },
    type: String,
});


const Allotment = model('Allotment', allotmentSchmea);
export default Allotment;
