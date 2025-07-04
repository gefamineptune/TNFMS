var car_id = inFormCarsCreatecar_id;
var car_image = inFormCarsCreatecar_image;
var car_brand = inFormCarsCreatecar_brand;
var car_type = inFormCarsCreatecar_type;
var car_license_plate = inFormCarsCreatecar_license_plate;
var car_fuel = inFormCarsCreatecar_fuel;
var car_branch = inFormCarsCreatecar_branch;
var car_stnk_owner = inFormCarsCreatecar_stnk_owner;
var car_stnk_validity_period = inFormCarsCreatecar_stnk_validity_period;
// var car_stnk_validity_period_formatted = new Date(inFormCarsCreatecar_stnk_validity_period.getValue());
var car_ownership = inFormCarsCreatecar_ownership;
var car_remarks = inFormCarsCreatecar_remarks;
var car_status = inFormCarsCreatecar_status;

// Assuming inFormCarsCreatecar_stnk_validity_period is a Date object
// var date = new Date(inFormCarsCreatecar_stnk_validity_period);

// Function to format the date
// function formatDate(date) {
//     var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
//     return date.toLocaleString('en-US', options).replace(',', '');
// }

// Format the date
// var formattedDate = formatDate(date);
// console.log(formattedDate); // Output: "May 9, 2025, 15:56"


if(car_id.getValue() === ""){
    car_id.setValueState("Error");
    car_id.setValueStateText("Please provide car id");
    sap.m.MessageToast.show("Please provide car id");
    return;
} else {
    car_id.setValueState("None");
}
// if(car_image.getValue() === ""){
//     car_image.setValueState("Error");
//     car_image.setValueStateText("Please provide car image");
//     sap.m.MessageToast.show("Please provide car image");
//     return;
// } else {
//     car_image.setValueState("None");
// }
if(car_brand.getSelectedKey() === ""){
    car_brand.setValueState("Error");
    car_brand.setValueStateText("Please select car brand");
    sap.m.MessageToast.show("Please provide car brand");
    return;
} else {
    car_brand.setValueState("None");
}
if(car_type.getSelectedKey() === ""){
    car_type.setValueState("Error");
    car_type.setValueStateText("Please select car type");
    sap.m.MessageToast.show("Please provide car type");
    return;
} else {
    car_type.setValueState("None");
}
if(car_license_plate.getValue() === ""){
    car_license_plate.setValueState("Error");
    car_license_plate.setValueStateText("Please provide car license plate");
    sap.m.MessageToast.show("Please provide car license plate");
    return;
} else {
    car_license_plate.setValueState("None");
}
if(car_fuel.getValue() === ""){
    car_fuel.setValueState("Error");
    car_fuel.setValueStateText("Please provide car fuel");
    sap.m.MessageToast.show("Please provide car fuel");
    return;
} else {
    car_fuel.setValueState("None");
}
if(car_branch.getValue() === ""){
    car_branch.setValueState("Error");
    car_branch.setValueStateText("Please provide car branch");
    sap.m.MessageToast.show("Please provide car branch");
    return;
} else {
    car_branch.setValueState("None");
}
if(car_stnk_owner.getValue() === ""){
    car_stnk_owner.setValueState("Error");
    car_stnk_owner.setValueStateText("Please provide car STNK owner");
    sap.m.MessageToast.show("Please provide car STNK owner");
    return;
} else {
    car_stnk_owner.setValueState("None");
}
if(car_stnk_validity_period.getValue() === ""){
    car_stnk_validity_period.setValueState("Error");
    car_stnk_validity_period.setValueStateText("Please provide car STNK validity period");
    sap.m.MessageToast.show("Please provide car STNK validity period");
    return;
} else {
    car_stnk_validity_period.setValueState("None");
}
if(car_ownership.getSelectedKey() === ""){
    car_ownership.setValueState("Error");
    car_ownership.setValueStateText("Please select car ownership");
    sap.m.MessageToast.show("Please provide car ownership");
    return;
} else {
    car_ownership.setValueState("None");
}
if(car_remarks.getSelectedKey() === ""){
    car_remarks.setValueState("Error");
    car_remarks.setValueStateText("Please select car remark");
    sap.m.MessageToast.show("Please provide car remark");
    return;
} else {
    car_remarks.setValueState("None");
}
if(car_status.getSelectedKey() === ""){
    car_status.setValueState("Error");
    car_status.setValueStateText("Please select car status");
    sap.m.MessageToast.show("Please provide car status");
    return;
} else {
    car_status.setValueState("None");
}

var options = {
  data: {
    car_id: car_id.getValue(),
    car_image: inFormCarsCreatecar_image.getFileName(),
    car_brand: car_brand.getSelectedKey(),
    car_type: car_type.getSelectedKey(),
    car_license_plate: car_license_plate.getValue(),
    car_fuel: car_fuel.getValue(),
    car_branch: car_branch.getValue(),
    car_stnk_owner: car_stnk_owner.getValue(),
    car_stnk_validity_period: car_stnk_validity_period.getValue(),
    car_ownership: car_ownership.getSelectedKey(),
    car_remarks: car_remarks.getSelectedKey(),
    car_status: car_status.getSelectedKey(),
  },
};

apiPUT_Car(options);
apiGET_CarRelationship();

var get_car_name = car_brand.getSelectedItem().getText() + " " + car_type.getSelectedItem().getText();

inFormCarsCreatecar_id.setValue("");
inFormCarsCreatecar_brand.setSelectedKey("");
inFormCarsCreatecar_type.setSelectedKey("");
inFormCarsCreatecar_license_plate.setValue("");
inFormCarsCreatecar_fuel.setValue("");
inFormCarsCreatecar_branch.setValue("");
inFormCarsCreatecar_stnk_owner.setValue("");
inFormCarsCreatecar_stnk_validity_period.setValue();
inFormCarsCreatecar_ownership.setSelectedKey("");
inFormCarsCreatecar_remarks.setSelectedKey("");
inFormCarsCreatecar_status.setSelectedKey("");

BoxFormCarsCreate.setVisible(false);
BoxFormCarsDetails.setVisible(false);

NavContainer.to(PageCars);
sap.m.MessageToast.show("Create Car: " + get_car_name + " was successfull!");