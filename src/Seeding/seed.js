const VehicleModel = require("../models/vehicle-model")
//seeding values while initial load
async function seed() {
    //if there any values exist before
    // await VehicleModel.deleteMany({});

    //Checking data already seeded
    const vehiclesList = await VehicleModel.find();
    if(!vehiclesList.length){
        const vehicles = [
            { type: 'car', model: 'hatchback 1', wheels: 4, isAvailable:true },
            { type: 'car', model: 'hatchback 2', wheels: 4, isAvailable:true },
            { type: 'car', model: 'sedan 1', wheels: 4, isAvailable:true },
            { type: 'car', model: 'sedan 2', wheels: 4, isAvailable:true },
            { type: 'car', model: 'suv 1', wheels: 4, isAvailable:true },
            { type: 'bike', model: 'cruiser 1', wheels:2, isAvailable:true},
            { type: 'bike', model: 'sports 1', wheels: 2, isAvailable:true },
          ];
        
          await VehicleModel.insertMany(vehicles);
          console.log("Data inserted successfully to the data base")
    } 
    else{
        console.log("Data already present in data base")
    }
    
  }
  
module.exports = seed;