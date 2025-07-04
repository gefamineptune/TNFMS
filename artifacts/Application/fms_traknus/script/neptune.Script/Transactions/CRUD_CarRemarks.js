async function CarRemarks_Create(){
    var remarks_id = inFormCarRemarksCreateremarks_id;
    var remarks_label = inFormCarRemarksCreateremarks_label;

    if(remarks_id.getValue() === ""){
        remarks_id.setValueState("Error");
        remarks_id.setValueStateText("Please provide remarks id");
        sap.m.MessageToast.show(
            "Please provide remarks id",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        remarks_id.setValueState("None");
    }
    if(remarks_label.getValue() === ""){
        remarks_label.setValueState("Error");
        remarks_label.setValueStateText("Please provide remarks label");
        sap.m.MessageToast.show(
            "Please provide remarks label",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        remarks_label.setValueState("None");
    }

    // First check if remarks_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"remarks_id":remarks_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_CarRemarks(options);

    // If remarks with this ID already exists, show error message
    if (existing_data.length > 0) {
        remarks_id.setValueState("Error");
        remarks_id.setValueStateText("Remarks ID already exists");
        sap.m.MessageToast.show(
            "Remarks ID already exists. Please use a different ID",
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
                remarks_id: remarks_id.getValue().toUpperCase(),
                remarks_label: remarks_label.getValue(),
            },
        };
        await apiPUT_CarRemarks(options);

        var get_remarks_id = inFormCarRemarksCreateremarks_id.getValue().toUpperCase();

        inFormCarRemarksCreateremarks_id.setValue("");
        inFormCarRemarksCreateremarks_label.setValue("");

        FormCarRemarksCreate.setVisible(false);
        FormCarRemarksDetails.setVisible(false);

        NavContainer.to(PageCarRemarks);
        await apiGET_CarRemarks();
        sap.m.MessageToast.show(
            `Create Car Remarks: ${get_remarks_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function CarRemarks_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarRemarksDetails.getData().id,
            remarks_id: inFormCarRemarksDetailsremarks_id.getValue().toUpperCase(),
            remarks_label: inFormCarRemarksDetailsremarks_label.getValue(),
        },
    };
    await apiPOST_CarRemarks(options);

    FormCarRemarksCreate.setVisible(false);
    FormCarRemarksDetails.setVisible(false);

    NavContainer.to(PageCarRemarks);
    await apiGET_CarRemarks();
    sap.m.MessageToast.show(
        `Update Car Remarks: ${inFormCarRemarksDetailsremarks_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarRemarks_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarRemarks.getData();
    
    const id = data.id;
    const remarks_id = data.remarks_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the CarRemarks list
    await apiDELETE_CarRemarks(options);
    await apiGET_CarRemarks();
    
    // Show success message
    DialogDelete_CarRemarks.close()
    sap.m.MessageToast.show(
        `Car Remarks: ${remarks_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}