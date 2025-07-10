// List: get selected row
// Replace yourField with fieldName
// const context = oEvent.oSource.getBindingContext();

// Get entire model
// const data = context.getObject();
const data = modelField_CarInformation_Left.getData();

modelFormCarsDetails.setData(data);

modelinFormCarsDetailscar_acquisition_type.setData(await apiGET_CarAcquisition());
modelinFormCarsDetailscar_brand.setData(await apiGET_CarBrand());
modelinFormCarsDetailscar_type.setData(await apiGET_CarType());
modelinFormCarsDetailscar_cost_center.setData(await apiGET_CarCostCenter());
modelinFormCarsDetailscar_condition_type.setData(await apiGET_CarConditionType());
modelinFormCarsDetailscar_fuel.setData(await apiGET_CarFuel());
modelinFormCarsDetailscar_category.setData(await apiGET_CarCategory());
modelinFormCarsDetailscar_branch.setData(await apiGET_Branch());
modelinFormCarsDetailscar_ownership.setData(await apiGET_CarOwnership());
modelinFormCarsDetailscar_status.setData(await apiGET_CarStatus());

inFormCarsDetailscar_acquisition_type.setSelectedKey(data.fms_car_car_acquisition_type);
inFormCarsDetailscar_brand.setSelectedKey(data.fms_car_car_brand);
inFormCarsDetailscar_type.setSelectedKey(data.fms_car_car_type);
inFormCarsDetailscar_cost_center.setSelectedKey(data.fms_car_car_cost_center);
inFormCarsDetailscar_condition_type.setSelectedKey(data.fms_car_car_condition_type);
inFormCarsDetailscar_fuel.setSelectedKey(data.fms_car_car_fuel);
inFormCarsDetailscar_category.setSelectedKey(data.fms_car_car_category);
inFormCarsDetailscar_branch.setSelectedKey(data.fms_car_car_branch);
inFormCarsDetailscar_ownership.setSelectedKey(data.fms_car_ownership_ownership_id);
inFormCarsDetailscar_status.setSelectedKey(data.fms_car_status_status_id);

DialogUpdate_Car.open();