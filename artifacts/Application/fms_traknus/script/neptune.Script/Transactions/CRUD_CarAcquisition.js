async function CarAcquisition_Create(){
    var acquisition_id = inFormCarAcquisitionCreateacquisition_id;
    var acquisition_label = inFormCarAcquisitionCreateacquisition_label;
    var acquisition_status = inFormCarAcquisitionCreateacquisition_status;

    if(acquisition_id.getValue() === ""){
        acquisition_id.setValueState("Error");
        acquisition_id.setValueStateText("Please provide acquisition id");
        sap.m.MessageToast.show(
            "Please provide acquisition id",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        acquisition_id.setValueState("None");
    }
    if(acquisition_label.getValue() === ""){
        acquisition_label.setValueState("Error");
        acquisition_label.setValueStateText("Please provide acquisition label");
        sap.m.MessageToast.show(
            "Please provide acquisition label",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        acquisition_label.setValueState("None");
    }
    if(acquisition_status.getSelectedKey() === ""){
        acquisition_status.setValueState("Error");
        acquisition_status.setValueStateText("Please select acquisition status");
        sap.m.MessageToast.show(
            `Please provide acquisition status`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        acquisition_status.setValueState("None");
    }

    // First check if acquisition_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"acquisition_id":acquisition_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_CarAcquisition(options);

    // If acquisition with this ID already exists, show error message
    if (existing_data.length > 0) {
        acquisition_id.setValueState("Error");
        acquisition_id.setValueStateText("Acquisition ID already exists");
        sap.m.MessageToast.show(
            "Acquisition ID already exists. Please use a different ID",
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
                acquisition_id: acquisition_id.getValue().toUpperCase(),
                acquisition_label: acquisition_label.getValue(),
                acquisition_status: acquisition_status.getSelectedKey(),
            },
        };
        await apiPUT_CarAcquisition(options);

        var get_acquisition_id = inFormCarAcquisitionCreateacquisition_id.getValue().toUpperCase();

        inFormCarAcquisitionCreateacquisition_id.setValue("");
        inFormCarAcquisitionCreateacquisition_label.setValue("");
        inFormCarAcquisitionCreateacquisition_status.setSelectedKey("");

        FormCarAcquisitionCreate.setVisible(false);
        FormCarAcquisitionDetails.setVisible(false);

        NavContainer.to(PageCarAcquisition);
        await apiGET_CarAcquisition();
        sap.m.MessageToast.show(
            `Create Car Acquisition: ${get_acquisition_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function CarAcquisition_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarAcquisitionDetails.getData().id,
            acquisition_id: inFormCarAcquisitionDetailsacquisition_id.getValue().toUpperCase(),
            acquisition_label: inFormCarAcquisitionDetailsacquisition_label.getValue(),
            acquisition_status: inFormCarAcquisitionDetailsacquisition_status.getSelectedKey(),
        },
    };
    await apiPOST_CarAcquisition(options);

    FormCarAcquisitionCreate.setVisible(false);
    FormCarAcquisitionDetails.setVisible(false);

    NavContainer.to(PageCarAcquisition);
    await apiGET_CarAcquisition();
    sap.m.MessageToast.show(
        `Update Car Acquisition: ${inFormCarAcquisitionDetailsacquisition_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarAcquisition_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarAcquisition.getData();
    
    const id = data.id;
    const acquisition_id = data.acquisition_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the CarAcquisition list
    await apiDELETE_CarAcquisition(options);
    await apiGET_CarAcquisition();
    
    // Show success message
    DialogDelete_CarAcquisition.close()
    sap.m.MessageToast.show(
        `Car Acquisition: ${acquisition_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}