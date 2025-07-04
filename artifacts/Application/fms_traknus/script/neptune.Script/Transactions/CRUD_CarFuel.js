async function CarFuel_Create(){
    var fuel_id = inFormCarFuelCreatefuel_id;
    var fuel_label = inFormCarFuelCreatefuel_label;

    if(fuel_id.getValue() === ""){
        fuel_id.setValueState("Error");
        fuel_id.setValueStateText("Please provide fuel id");
        sap.m.MessageToast.show(
            "Please provide fuel id",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        fuel_id.setValueState("None");
    }
    if(fuel_label.getValue() === ""){
        fuel_label.setValueState("Error");
        fuel_label.setValueStateText("Please provide fuel label");
        sap.m.MessageToast.show(
            "Please provide fuel label",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        fuel_label.setValueState("None");
    }

    // First check if fuel_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"fuel_id":fuel_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_CarFuel(options);

    // If fuel with this ID already exists, show error message
    if (existing_data.length > 0) {
        fuel_id.setValueState("Error");
        fuel_id.setValueStateText("Fuel ID already exists");
        sap.m.MessageToast.show(
            "Fuel ID already exists. Please use a different ID",
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
                fuel_id: fuel_id.getValue().toUpperCase(),
                fuel_label: fuel_label.getValue(),
            },
        };
        await apiPUT_CarFuel(options);

        var get_fuel_id = inFormCarFuelCreatefuel_id.getValue().toUpperCase();

        inFormCarFuelCreatefuel_id.setValue("");
        inFormCarFuelCreatefuel_label.setValue("");

        FormCarFuelCreate.setVisible(false);
        FormCarFuelDetails.setVisible(false);

        NavContainer.to(PageCarFuel);
        await apiGET_CarFuel();
        sap.m.MessageToast.show(
            `Create Car Fuel: ${get_fuel_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function CarFuel_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarFuelDetails.getData().id,
            fuel_id: inFormCarFuelDetailsfuel_id.getValue().toUpperCase(),
            fuel_label: inFormCarFuelDetailsfuel_label.getValue(),
        },
    };
    await apiPOST_CarFuel(options);

    FormCarFuelCreate.setVisible(false);
    FormCarFuelDetails.setVisible(false);

    NavContainer.to(PageCarFuel);
    await apiGET_CarFuel();
    sap.m.MessageToast.show(
        `Update Car Fuel: ${inFormCarFuelDetailsfuel_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
    
}

async function CarFuel_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarFuel.getData();
    
    const id = data.id;
    const fuel_id = data.fuel_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the CarFuel list
    await apiDELETE_CarFuel(options);
    await apiGET_CarFuel();
    
    // Show success message
    DialogDelete_CarFuel.close()
    sap.m.MessageToast.show(
        `Car Fuel: ${fuel_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}