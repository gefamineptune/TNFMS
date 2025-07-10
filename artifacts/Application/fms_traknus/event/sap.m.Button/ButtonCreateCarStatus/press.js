FormCarStatusCreate.setVisible(true);

modelinFormCarStatusCreatestatus_status.setData(await apiGET_Status());

// Fetch existing status IDs from the database
var carStatuses = await apiGET_CarStatus(
    options = {
        parameters: {
            select: "status_id"
        }
    }
);

// Extract status_id values into an array
var existingIds = carStatuses.map(data => data.status_id);
// const existingIds = ["CRSTS9", "CRSTS8", "CRSTS1"]; // Use a smaller set for quicker demonstration of uniqueness check
var randomId = generateRandomUniqueId('CRSTS', existingIds);
// console.log(carStatuses);
// console.log(existingIds);

inFormCarStatusCreatestatus_id.setValue(randomId);

NavContainer.to(PageCarStatusDetails);