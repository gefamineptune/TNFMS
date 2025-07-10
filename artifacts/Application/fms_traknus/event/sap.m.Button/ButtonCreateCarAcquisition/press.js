FormCarAcquisitionCreate.setVisible(true);

modelinFormCarAcquisitionCreateacquisition_status.setData(await apiGET_Status());

var carAcquisition = await apiGET_CarAcquisition(
    options = {
        parameters: {
            select: "acquisition_id"
        }
    }
);
var existingIds = carAcquisition.map(data => data.acquisition_id);
var randomId = generateRandomUniqueId('CRACQ', existingIds);

inFormCarAcquisitionCreateacquisition_id.setValue(randomId);

NavContainer.to(PageCarAcquisitionDetails);