async function CarCostCenter_Create(){
    var cost_center_id = inFormCarCostCenterCreatecost_center_id;
    var cost_center_label = inFormCarCostCenterCreatecost_center_label;
    var cost_center_status = inFormCarCostCenterCreatecost_center_status;

    if(cost_center_id.getValue() === ""){
        cost_center_id.setValueState("Error");
        cost_center_id.setValueStateText("Please provide cost center id");
        sap.m.MessageToast.show(
            "Please provide cost center id",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        cost_center_id.setValueState("None");
    }
    if(cost_center_label.getValue() === ""){
        cost_center_label.setValueState("Error");
        cost_center_label.setValueStateText("Please provide cost center label");
        sap.m.MessageToast.show(
            "Please provide cost center label",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        cost_center_label.setValueState("None");
    }
    if(cost_center_status.getSelectedKey() === ""){
        cost_center_status.setValueState("Error");
        cost_center_status.setValueStateText("Please select cost center status");
        sap.m.MessageToast.show(
            `Please provide cost center status`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        cost_center_status.setValueState("None");
    }

    // First check if cost_center_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"cost_center_id":cost_center_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_CarCostCenter(options);

    // If Cost Center with this ID already exists, show error message
    if (existing_data.length > 0) {
        cost_center_id.setValueState("Error");
        cost_center_id.setValueStateText("Cost Center ID already exists");
        sap.m.MessageToast.show(
            "Cost Center ID already exists. Please use a different ID",
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
                cost_center_id: cost_center_id.getValue().toUpperCase(),
                cost_center_label: cost_center_label.getValue().toUpperCase(),
                cost_center_status: cost_center_status.getSelectedKey(),
            },
        };
        await apiPUT_CarCostCenter(options);

        var get_cost_center_id = inFormCarCostCenterCreatecost_center_id.getValue().toUpperCase();

        inFormCarCostCenterCreatecost_center_id.setValue("");
        inFormCarCostCenterCreatecost_center_label.setValue("");
        inFormCarCostCenterCreatecost_center_status.setSelectedKey("");

        FormCarCostCenterCreate.setVisible(false);
        FormCarCostCenterDetails.setVisible(false);

        NavContainer.to(PageCarCostCenter);
        await apiGET_CarCostCenter();
        sap.m.MessageToast.show(
            `Create Car Cost Center: ${get_cost_center_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function CarCostCenter_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarCostCenterDetails.getData().id,
            cost_center_id: inFormCarCostCenterDetailscost_center_id.getValue().toUpperCase(),
            cost_center_label: inFormCarCostCenterDetailscost_center_label.getValue().toUpperCase(),
            cost_center_status: inFormCarCostCenterDetailscost_center_status.getSelectedKey(),
        },
    };
    await apiPOST_CarCostCenter(options);

    FormCarCostCenterCreate.setVisible(false);
    FormCarCostCenterDetails.setVisible(false);

    NavContainer.to(PageCarCostCenter);
    await apiGET_CarCostCenter();
    sap.m.MessageToast.show(
        `Update Car Cost Center: ${inFormCarCostCenterDetailscost_center_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarCostCenter_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarCostCenter.getData();
    
    const id = data.id;
    const cost_center_id = data.cost_center_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the CarCostCenter list
    await apiDELETE_CarCostCenter(options);
    await apiGET_CarCostCenter();
    
    // Show success message
    DialogDelete_CarCostCenter.close()
    sap.m.MessageToast.show(
        `Car Cost Center: ${cost_center_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}