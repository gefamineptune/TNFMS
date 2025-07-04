// Get entire model
// const data = context.getObject();
const data = modelField_CarInformation_Left.getData();

const license_plate = data.fms_car_car_license_plate;

inFormCarDocumentCreatedocument_license_plate.setValue(license_plate);

DialogCreate_CarDocument.open();