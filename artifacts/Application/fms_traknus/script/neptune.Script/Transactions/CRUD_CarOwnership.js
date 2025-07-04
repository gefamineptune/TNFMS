async function CarOwnership_Create(){
    var ownership_id = inFormCarOwnershipCreateownership_id;
    var ownership_label = inFormCarOwnershipCreateownership_label;

    if(ownership_id.getValue() === ""){
        ownership_id.setValueState("Error");
        ownership_id.setValueStateText("Please provide ownership id");
        sap.m.MessageToast.show(
            "Please provide ownership id",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        ownership_id.setValueState("None");
    }
    if(ownership_label.getValue() === ""){
        ownership_label.setValueState("Error");
        ownership_label.setValueStateText("Please provide ownership label");
        sap.m.MessageToast.show(
            "Please provide ownership label",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        ownership_label.setValueState("None");
    }

    // First check if ownership_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"ownership_id":ownership_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_CarOwnership(options);

    // If ownership with this ID already exists, show error message
    if (existing_data.length > 0) {
        ownership_id.setValueState("Error");
        ownership_id.setValueStateText("Ownership ID already exists");
        sap.m.MessageToast.show(
            "Ownership ID already exists. Please use a different ID",
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
                ownership_id: ownership_id.getValue().toUpperCase(),
                ownership_label: ownership_label.getValue(),
            },
        };
        await apiPUT_CarOwnership(options);

        var get_ownership_id = inFormCarOwnershipCreateownership_id.getValue().toUpperCase();

        inFormCarOwnershipCreateownership_id.setValue("");
        inFormCarOwnershipCreateownership_label.setValue("");

        FormCarOwnershipCreate.setVisible(false);
        FormCarOwnershipDetails.setVisible(false);

        NavContainer.to(PageCarOwnership);
        await apiGET_CarOwnership();
        sap.m.MessageToast.show(
            `Create Car Ownership: ${get_ownership_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function CarOwnership_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarOwnershipDetails.getData().id,
            ownership_id: inFormCarOwnershipDetailsownership_id.getValue().toUpperCase(),
            ownership_label: inFormCarOwnershipDetailsownership_label.getValue(),
        },
    };
    await apiPOST_CarOwnership(options);

    FormCarOwnershipCreate.setVisible(false);
    FormCarOwnershipDetails.setVisible(false);

    NavContainer.to(PageCarOwnership);
    await apiGET_CarOwnership();
    sap.m.MessageToast.show(
        `Update Car Ownership: ${inFormCarOwnershipDetailsownership_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarOwnership_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarOwnership.getData();
    
    const id = data.id;
    const ownership_id = data.ownership_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the CarOwnership list
    await apiDELETE_CarOwnership(options);
    await apiGET_CarOwnership();
    
    // Show success message
    DialogDelete_CarOwnership.close()
    sap.m.MessageToast.show(
        `Car Ownership: ${ownership_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}