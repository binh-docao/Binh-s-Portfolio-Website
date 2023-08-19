require('dotenv').config();
const mongoose = require('mongoose');

// Import models
const HouseGirl = require('./models/HouseGirl');
const HouseBoy = require('./models/HouseBoy');

async function populateData() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB...");

        // Sample HouseGirl data
        const houseGirl1 = new HouseGirl({
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            phoneNumber: '123-456-7890',
            dietaryRestrictions: ['Vegetarian'],
            latePlateRequests: [{
                date: new Date(),
                mealTime: 'Dinner',
                comments: 'Late from class',
                completed: false,
                adminComments: ''
            }]
        });
        await houseGirl1.save();
        console.log("HouseGirl data added...");

        // Sample HouseBoy data
        const houseBoy1 = new HouseBoy({
            userId: houseGirl1._id, // linking to the housegirl created above for demonstration
            sororityHouse: 'Alpha Beta'
        });
        await houseBoy1.save();
        console.log("HouseBoy data added...");

    } catch (error) {
        console.error("Error populating data:", error);
    } finally {
        mongoose.connection.close();
    }
}

populateData();
