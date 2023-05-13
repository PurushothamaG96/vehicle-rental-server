const VehicleModel = require("../models/vehicle-model")
//seeding values while initial load
async function seed() {
    // if there any values exist before
    // await VehicleModel.deleteMany({});
    // console.log("all data deleted")

    //Checking data already seeded
    const vehiclesList = await VehicleModel.find();
    if(!vehiclesList.length){
        const vehicles = [
            { type: 'Hatchback ', model: 'ModelA', wheels: 4, isAvailable:true },
            { type: 'Hatchback ', model: 'ModelB', wheels: 4, isAvailable:true },
            { type: 'Sedan', model: 'ModelC', wheels: 4, isAvailable:true },
            { type: 'Sedan', model: 'ModelD', wheels: 4, isAvailable:true },
            { type: 'Suv', model: 'ModelF', wheels: 4, isAvailable:true },
            { type: 'Cruiser', model: 'ModelG', wheels:2, isAvailable:true},
            { type: 'Sports', model: 'ModelI', wheels: 2, isAvailable:true },
          ];
        
          await VehicleModel.insertMany(vehicles);
          console.log("Data inserted successfully to the data base")
    } 
    else{
        console.log("Data already present in data base")
    }
    
  }
  
module.exports = seed;