async function Access_Create(){
    var access_id = inFormAccessCreateaccess_id;
    var access_label = inFormAccessCreateaccess_label;
    var access_status = inFormAccessCreateaccess_status;

    if(access_id.getValue() === ""){
        access_id.setValueState("Error");
        access_id.setValueStateText("Please provide access id");
        sap.m.MessageToast.show(
            `Please provide access id`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        access_id.setValueState("None");
    }
    if(access_label.getValue() === ""){
        access_label.setValueState("Error");
        access_label.setValueStateText("Please provide access name");
        sap.m.MessageToast.show(
            `Please provide access name`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        access_label.setValueState("None");
    }
    if(access_status.getSelectedKey() === ""){
        access_status.setValueState("Error");
        access_status.setValueStateText("Please select access status");
        sap.m.MessageToast.show(
            `Please provide access status`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        access_status.setValueState("None");
    }

    // First check if access_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"access_id":access_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_Access(options);

    // If access with this ID already exists, show error message
    if (existing_data.length > 0) {
        access_id.setValueState("Error");
        access_id.setValueStateText("Access ID already exists");
        sap.m.MessageToast.show(
            `Access ID already exists. Please use a different ID`,
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
                access_id: access_id.getValue().toUpperCase(),
                access_label: access_label.getValue(),
                access_status: access_status.getSelectedKey(),
            },
        };
        await apiPUT_Access(options);

        var get_access_id = inFormAccessCreateaccess_id.getValue().toUpperCase();

        inFormAccessCreateaccess_id.setValue("");
        inFormAccessCreateaccess_label.setValue("");
        inFormAccessCreateaccess_status.setSelectedKey("");

        FormAccessCreate.setVisible(false);
        FormAccessDetails.setVisible(false);

        NavContainer.to(PageAccess);
        await apiGET_Access();
        sap.m.MessageToast.show(
            `Create Access: ${get_access_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function Access_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormAccessDetails.getData().id,
            access_id: inFormAccessDetailsaccess_id.getValue().toUpperCase(),
            access_label: inFormAccessDetailsaccess_label.getValue(),
            access_status: inFormAccessDetailsaccess_status.getSelectedKey(),
        },
    };
    await apiPOST_Access(options);

    FormAccessCreate.setVisible(false);
    FormAccessDetails.setVisible(false);

    NavContainer.to(PageAccess);
    await apiGET_Access();
    sap.m.MessageToast.show(
        `Update Access: ${inFormAccessDetailsaccess_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function Access_Delete(){
    // Get entire model
    const data = modelDialogDelete_Access.getData();
    
    const id = data.id;
    const access_id = data.access_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the Access list
    await apiDELETE_Access(options);
    await apiGET_Access();
    
    // Show success message
    DialogDelete_Access.close()
    sap.m.MessageToast.show(
        `Access: ${access_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}