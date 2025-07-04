async function CarType_Create(){
    var type_id = inFormCarTypeCreatetype_id;
    var type_name = inFormCarTypeCreatetype_name;

    if(type_id.getValue() === ""){
        type_id.setValueState("Error");
        type_id.setValueStateText("Please provide type id");
        sap.m.MessageToast.show(
            "Please provide type id",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        type_id.setValueState("None");
    }
    if(type_name.getValue() === ""){
        type_name.setValueState("Error");
        type_name.setValueStateText("Please provide type name");
        sap.m.MessageToast.show(
            "Please provide type name",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        type_name.setValueState("None");
    }

    // First check if type_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"type_id":type_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_CarType(options);

    // If type with this ID already exists, show error message
    if (existing_data.length > 0) {
        type_id.setValueState("Error");
        type_id.setValueStateText("Type ID already exists");
        sap.m.MessageToast.show(
            "Type ID already exists. Please use a different ID",
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
                type_id: type_id.getValue().toUpperCase(),
                type_name: type_name.getValue(),
            },
        };
        await apiPUT_CarType(options);

        var get_type_id = inFormCarTypeCreatetype_id.getValue().toUpperCase();

        inFormCarTypeCreatetype_id.setValue("");
        inFormCarTypeCreatetype_name.setValue("");

        FormCarTypeCreate.setVisible(false);
        FormCarTypeDetails.setVisible(false);

        NavContainer.to(PageCarType);
        await apiGET_CarType();
        sap.m.MessageToast.show(
            `Create Car Type: ${get_type_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function CarType_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarTypeDetails.getData().id,
            type_id: inFormCarTypeDetailstype_id.getValue().toUpperCase(),
            type_name: inFormCarTypeDetailstype_name.getValue(),
        },
    };
    await apiPOST_CarType(options);

    FormCarTypeCreate.setVisible(false);
    FormCarTypeDetails.setVisible(false);

    NavContainer.to(PageCarType);
    await apiGET_CarType();
    sap.m.MessageToast.show(
        `Update Car Type: ${inFormCarTypeDetailstype_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarType_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarType.getData();
    
    const id = data.id;
    const type_id = data.type_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the CarType list
    await apiDELETE_CarType(options);
    await apiGET_CarType();
    
    // Show success message
    DialogDelete_CarType.close()
    sap.m.MessageToast.show(
        `Car Type: ${type_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}