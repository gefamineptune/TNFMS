async function Status_Create(){
    var status_id = inFormStatusCreatestatus_id;
    var status_label = inFormStatusCreatestatus_label;

    // Check input field
    if(status_id.getValue() === ""){
        status_id.setValueState("Error");
        status_id.setValueStateText("Please provide status id");
        sap.m.MessageToast.show(
            `Please provide status id`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        status_id.setValueState("None");
    }
    if(status_label.getValue() === ""){
        status_label.setValueState("Error");
        status_label.setValueStateText("Please provide status name");
        sap.m.MessageToast.show(
            `Please provide status name`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        status_label.setValueState("None");
    }

    // First check if status_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"status_id":status_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_Status(options);

    // If status with this ID already exists, show error message
    if (existing_data.length > 0) {
        status_id.setValueState("Error");
        status_id.setValueStateText("Status ID already exists");
        sap.m.MessageToast.show(
            `Status ID already exists. Please use a different ID`,
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
                status_id: status_id.getValue().toUpperCase(),
                status_label: status_label.getValue(),
            },
        };
        await apiPUT_Status(options);

        var get_status_id = inFormStatusCreatestatus_id.getValue().toUpperCase();

        inFormStatusCreatestatus_id.setValue("");
        inFormStatusCreatestatus_label.setValue("");

        FormStatusCreate.setVisible(false);
        FormStatusDetails.setVisible(false);

        NavContainer.to(PageStatus);
        await apiGET_Status();
        sap.m.MessageToast.show(
            `Create Status: ${get_status_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function Status_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormStatusDetails.getData().id,
            status_id: inFormStatusDetailsstatus_id.getValue().toUpperCase(),
            status_label: inFormStatusDetailsstatus_label.getValue(),
        },
    };
    await apiPOST_Status(options);

    FormStatusCreate.setVisible(false);
    FormStatusDetails.setVisible(false);

    NavContainer.to(PageStatus);
    await apiGET_Status();
    sap.m.MessageToast.show(
        `Update Status: ${inFormStatusDetailsstatus_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function Status_Delete(){
    // Get entire model
    const data = modelDialogDelete_Status.getData();
    
    const id = data.id;
    const status_id = data.status_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the Status list
    await apiDELETE_Status(options);
    await apiGET_Status();
    
    // Show success message
    DialogDelete_Status.close()
    sap.m.MessageToast.show(
        `Status: ${status_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}