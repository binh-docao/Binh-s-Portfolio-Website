import mongoose from 'mongoose';

const latePlateRequestSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    mealTime: {
        type: String,
        required: true,
        enum: ['lunch', 'dinner']
    },
    comments: {
        type: String
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HouseGirl',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    submittedAt: { // Added this field to store the timestamp of submission
        type: Date,
        default: Date.now // This will automatically set the current date and time when a document is created
    }
});

const LatePlateRequest = mongoose.model('LatePlateRequest', latePlateRequestSchema);

export default LatePlateRequest;
