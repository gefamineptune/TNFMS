FormCarFuelCreate.setVisible(true);

modelinFormCarFuelCreatefuel_status.setData(await apiGET_Status());

var carFuel = await apiGET_CarFuel(
    options = {
        parameters: {
            select: "fuel_id"
        }
    }
);
var existingIds = carFuel.map(data => data.fuel_id);
var randomId = generateRandomUniqueId('CRFL', existingIds);

inFormCarFuelCreatefuel_id.setValue(randomId);

NavContainer.to(PageCarFuelDetails);