function generateRandomUniqueStatusId(idCode, existingStatusIds) {
  let newId;
  let isUnique = false;

  // Keep generating until a unique ID is found (simplistic for demonstration)
  while (!isUnique) {
    const randomNumber = Math.floor(Math.random() * 10000); // Generate a number between 0 and 9999
    newId = `${idCode}${randomNumber}`;

    if (!existingStatusIds.includes(newId)) {
      isUnique = true;
    }
  }
  return newId;
}

// Example usage:
// Fetch existing status IDs from the database
const carStatuses = await entities.fms_car_status.find({
    select: ['status_id']
});

// Extract status_id values into an array
const existingIds = carStatuses.map(status => status.status_id);
// const existingIds = ["CRSTS9", "CRSTS8", "CRSTS1"]; // Use a smaller set for quicker demonstration of uniqueness check
const randomStatusId = generateRandomUniqueStatusId('sS', existingIds);
console.log(randomStatusId); // Output will be something like CS123, CS789, etc., as long as it's not in existingIds