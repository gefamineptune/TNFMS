function generateRandomUniqueId(idCode, existingStatusIds) {
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