"use strict";
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicle;
(function (vehicle) {
    vehicle[vehicle["car"] = 0] = "car";
    vehicle[vehicle["motorcycle"] = 1] = "motorcycle";
    vehicle[vehicle["truck"] = 2] = "truck";
})(vehicle || (vehicle = {}));
console.log(vehicle.truck);
