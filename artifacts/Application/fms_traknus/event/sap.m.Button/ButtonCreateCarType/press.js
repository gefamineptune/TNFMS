FormCarTypeCreate.setVisible(true);

modelinFormCarTypeCreatetype_status.setData(await apiGET_Status());

var carType = await apiGET_CarType(
    options = {
        parameters: {
            select: "type_id"
        }
    }
);
var existingIds = carType.map(data => data.type_id);
var randomId = generateRandomUniqueId('CRTYP', existingIds);

inFormCarTypeCreatetype_id.setValue(randomId);

NavContainer.to(PageCarTypeDetails);