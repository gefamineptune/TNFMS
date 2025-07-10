async function CarStatus_Create(){
    var status_id = inFormCarStatusCreatestatus_id;
    var status_label = inFormCarStatusCreatestatus_label;
    var status_status = inFormCarStatusCreatestatus_status;

    if(status_id.getValue() === ""){
        status_id.setValueState("Error");
        status_id.setValueStateText("Please provide status id");
        sap.m.MessageToast.show(
            "Please provide status id",
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
        status_label.setValueStateText("Please provide status label");
        sap.m.MessageToast.show(
            "Please provide status label",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        status_label.setValueState("None");
    }
    if(status_status.getSelectedKey() === ""){
        status_status.setValueState("Error");
        status_status.setValueStateText("Please select status");
        sap.m.MessageToast.show(
            `Please provide status`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        status_status.setValueState("None");
    }

    // First check if status_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"status_id":status_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_CarStatus(options);

    // If status with this ID already exists, show error message
    if (existing_data.length > 0) {
        status_id.setValueState("Error");
        status_id.setValueStateText("Status ID already exists");
        sap.m.MessageToast.show(
            "Status ID already exists. Please use a different ID",
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
                status_status: status_status.getSelectedKey(),
            },
        };
        await apiPUT_CarStatus(options);

        var get_status_id = inFormCarStatusCreatestatus_id.getValue().toUpperCase();

        inFormCarStatusCreatestatus_id.setValue("");
        inFormCarStatusCreatestatus_label.setValue("");
        inFormCarStatusCreatestatus_status.setSelectedKey("");

        FormCarStatusCreate.setVisible(false);
        FormCarStatusDetails.setVisible(false);

        NavContainer.to(PageCarStatus);
        await apiGET_CarStatus();
        sap.m.MessageToast.show(
            `Create Car Status: ${get_status_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function CarStatus_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarStatusDetails.getData().id,
            status_id: inFormCarStatusDetailsstatus_id.getValue().toUpperCase(),
            status_label: inFormCarStatusDetailsstatus_label.getValue(),
            status_status: inFormCarStatusDetailsstatus_status.getSelectedKey(),
        },
    };
    await apiPOST_CarStatus(options);

    FormCarStatusCreate.setVisible(false);
    FormCarStatusDetails.setVisible(false);

    NavContainer.to(PageCarStatus);
    await apiGET_CarStatus();
    sap.m.MessageToast.show(
        `Update Car Status: ${inFormCarStatusDetailsstatus_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarStatus_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarStatus.getData();
    
    const id = data.id;
    const status_id = data.status_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the CarStatus list
    await apiDELETE_CarStatus(options);
    await apiGET_CarStatus();
    
    // Show success message
    DialogDelete_CarStatus.close()
    sap.m.MessageToast.show(
        `Car Status: ${status_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}