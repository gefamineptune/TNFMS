async function Car_Create(){
    // Show busy indicator
    sap.ui.core.BusyIndicator.show(0);

    var car_id = inFormCarsCreatecar_id;
    var car_image = inFormCarsCreatecar_image;
    var car_acquisition_type = inFormCarsCreatecar_acquisition_type;
    var car_acquisition_date = inFormCarsCreatecar_acquisition_date;
    var car_branch = inFormCarsCreatecar_branch;
    var car_brand = inFormCarsCreatecar_brand;
    var car_type = inFormCarsCreatecar_type;
    var car_license_plate = inFormCarsCreatecar_license_plate;
    var car_cost_center = inFormCarsCreatecar_cost_center;
    var car_condition_type = inFormCarsCreatecar_condition_type;
    var car_category = inFormCarsCreatecar_category;
    var car_fuel = inFormCarsCreatecar_fuel;
    var car_purchase_value = inFormCarsCreatecar_purchase_value;
    var car_fixed_cost = inFormCarsCreatecar_fixed_cost;
    var car_service_contract_maintenance = inFormCarsCreatecar_service_contract_maintenance;
    var car_ownership = inFormCarsCreatecar_ownership;
    var car_status = inFormCarsCreatecar_status;

    if(car_id.getValue() === ""){
        car_id.setValueState("Error");
        car_id.setValueStateText("Please provide car id");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car id`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_id.setValueState("None");
    }
    if(car_acquisition_type.getSelectedKey() === ""){
        car_acquisition_type.setValueState("Error");
        car_acquisition_type.setValueStateText("Please provide car acquisition type");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car acquisition type`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_acquisition_type.setValueState("None");
    }
    if(car_acquisition_date.getValue() === ""){
        car_acquisition_date.setValueState("Error");
        car_acquisition_date.setValueStateText("Please provide car acquisition date");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car acquisition date`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_acquisition_date.setValueState("None");
    }
    if(car_brand.getSelectedKey() === ""){
        car_brand.setValueState("Error");
        car_brand.setValueStateText("Please provide car brand");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car brand`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_brand.setValueState("None");
    }
    if(car_type.getSelectedKey() === ""){
        car_type.setValueState("Error");
        car_type.setValueStateText("Please provide car type");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car type`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_type.setValueState("None");
    }
    if(car_license_plate.getValue() === ""){
        car_license_plate.setValueState("Error");
        car_license_plate.setValueStateText("Please provide car license plate");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car license plate`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_license_plate.setValueState("None");
    }
    if(car_fuel.getSelectedKey() === ""){
        car_fuel.setValueState("Error");
        car_fuel.setValueStateText("Please provide car fuel");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car fuel`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_fuel.setValueState("None");
    }
    if(car_purchase_value.getValue() === ""){
        car_purchase_value.setValueState("Error");
        car_purchase_value.setValueStateText("Please provide car purchase value");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car purchase value`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_purchase_value.setValueState("None");
    }
    if(car_category.getSelectedKey() === ""){
        car_category.setValueState("Error");
        car_category.setValueStateText("Please provide car category");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car category`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_category.setValueState("None");
    }
    if(car_branch.getSelectedKey() === ""){
        car_branch.setValueState("Error");
        car_branch.setValueStateText("Please provide car branch");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car branch`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_branch.setValueState("None");
    }
    if(car_ownership.getSelectedKey() === ""){
        car_ownership.setValueState("Error");
        car_ownership.setValueStateText("Please provide car ownership");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car ownership`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_ownership.setValueState("None");
    }
    if(car_status.getSelectedKey() === ""){
        car_status.setValueState("Error");
        car_status.setValueStateText("Please provide car status");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car status`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_status.setValueState("None");
    }
    if(car_condition_type.getSelectedKey() === ""){
        car_condition_type.setValueState("Error");
        car_condition_type.setValueStateText("Please provide car condition type");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car condition type`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_condition_type.setValueState("None");
    }
    if(car_cost_center.getSelectedKey() === ""){
        car_cost_center.setValueState("Error");
        car_cost_center.setValueStateText("Please provide car cost center");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide car cost center`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        car_cost_center.setValueState("None");
    }

    // First check if car_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"car_id":car_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_Car(options);

    // If car with this ID already exists, show error message
    if (existing_data.length > 0) {
        car_id.setValueState("Error");
        car_id.setValueStateText("Car ID already exists");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Car ID already exists. Please use a different ID`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        // If unique, proceed with creation
        options = {
            data: {
                car_id: car_id.getValue().toUpperCase(),
                car_image: inFormCarsCreatecar_image.getFileName(),
                car_acquisition_type: car_acquisition_type.getSelectedKey(),
                car_acquisition_date: car_acquisition_date.getValue(),
                car_branch: car_branch.getSelectedKey(),
                car_brand: car_brand.getSelectedKey(),
                car_type: car_type.getSelectedKey(),
                car_category: car_category.getSelectedKey(),
                car_license_plate: car_license_plate.getValue().toUpperCase(),
                car_cost_center: car_cost_center.getSelectedKey(),
                car_condition_type: car_condition_type.getSelectedKey(),
                car_fuel: car_fuel.getSelectedKey(),
                car_purchase_value: hapusFormatTitik(car_purchase_value.getValue()),
                car_fixed_cost: hapusFormatTitik(car_fixed_cost.getValue()),
                car_service_contract_maintenance: car_service_contract_maintenance.getSelectedIndex(),
                car_ownership: car_ownership.getSelectedKey(),
                car_status: car_status.getSelectedKey(),
            },
        };
        await apiPUT_Car(options);
        // console.log(options.data)

        var get_car_id = inFormCarsCreatecar_id.getValue().toUpperCase();

        // inFormUserCreateuser_id.setValue("");
        // inFormUserCreateuser_name.setValue("");
        // inFormUserCreateuser_password.setValue("");
        // inFormUserCreateuser_branch.setSelectedKey("");
        // inFormUserCreateuser_department.setSelectedKey("");
        // inFormUserCreateuser_role.setSelectedKey("");
        // inFormUserCreateuser_access.setSelectedKey("");
        // inFormUserCreateuser_status.setSelectedKey("");

        BoxFormCarsCreate.setVisible(false);
        BoxFormCarsDetails.setVisible(false);

        NavContainer.to(PageCars);
        await apiGET_CarRelation();

        // Hide busy indicator and show success message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Create User: ${get_car_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function Car_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarsDetails.getData().fms_car_id,
            car_acquisition_type: inFormCarsDetailscar_acquisition_type.getSelectedKey(),
            car_acquisition_date: inFormCarsDetailscar_acquisition_date.getValue(),
            car_branch: inFormCarsDetailscar_branch.getSelectedKey(),
            car_brand: inFormCarsDetailscar_brand.getSelectedKey(),
            car_type: inFormCarsDetailscar_type.getSelectedKey(),
            car_license_plate: inFormCarsDetailscar_license_plate.getValue().toUpperCase(),
            car_cost_center: inFormCarsDetailscar_cost_center.getSelectedKey(),
            car_condition_type: inFormCarsDetailscar_condition_type.getSelectedKey(),
            car_category: inFormCarsDetailscar_category.getSelectedKey(),
            car_fuel: inFormCarsDetailscar_fuel.getSelectedKey(),
            car_purchase_value: hapusFormatTitik(inFormCarsDetailscar_purchase_value.getValue()),
            car_fixed_cost: hapusFormatTitik(inFormCarsDetailscar_fixed_cost.getValue()),
            car_service_contract_maintenance: inFormCarsDetailscar_service_contract_maintenance.getSelectedIndex(),
            car_ownership: inFormCarsDetailscar_ownership.getSelectedKey(),
            car_status: inFormCarsDetailscar_status.getSelectedKey(),
        },
    };
    // console.log(options)
    await apiPOST_Car(options);

    DialogUpdate_Car.close();
    BoxFormCarsCreate.setVisible(false);
    BoxFormCarsDetails.setVisible(false);

    NavContainer.to(PageCars);
    await apiGET_CarRelation();

    // Hide busy indicator and show success message
    sap.ui.core.BusyIndicator.hide();
    sap.m.MessageToast.show(
        `Update Car: ${inFormCarsDetailscar_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function Car_Delete(){
    // Get entire model
    const data = modelDialogDelete_Car.getData();
    
    const id = data.fms_car_id;
    const car_id = data.fms_car_car_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the car list
    await apiDELETE_Car(options);
    await apiGET_CarRelation();
    
    // Show success message
    DialogDelete_Car.close()
    sap.m.MessageToast.show(
        `Car: ${car_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}