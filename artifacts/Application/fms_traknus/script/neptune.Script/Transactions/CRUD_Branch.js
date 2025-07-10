async function Branch_Create(){
    var branch_id = inFormBranchCreatebranch_id;
    var branch_label = inFormBranchCreatebranch_label;
    var branch_status = inFormBranchCreatebranch_status;

    if(branch_id.getValue() === ""){
        branch_id.setValueState("Error");
        branch_id.setValueStateText("Please provide branch id");
        sap.m.MessageToast.show(
            `Please provide branch id`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        branch_id.setValueState("None");
    }
    if(branch_label.getValue() === ""){
        branch_label.setValueState("Error");
        branch_label.setValueStateText("Please provide branch label");
        sap.m.MessageToast.show(
            `Please provide branch label`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        branch_label.setValueState("None");
    }
    if(branch_status.getSelectedKey() === ""){
        branch_status.setValueState("Error");
        branch_status.setValueStateText("Please select branch status");
        sap.m.MessageToast.show(
            `Please provide branch status`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        branch_status.setValueState("None");
    }

    // First check if branch_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"branch_id":branch_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_Branch(options);

    // If branch with this ID already exists, show error message
    if (existing_data.length > 0) {
        branch_id.setValueState("Error");
        branch_id.setValueStateText("Branch ID already exists");
        sap.m.MessageToast.show(
            `Branch ID already exists. Please use a different ID`,
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
                branch_id: branch_id.getValue().toUpperCase(),
                branch_label: branch_label.getValue(),
                branch_status: branch_status.getSelectedKey(),
            },
        };
        await apiPUT_Branch(options);

        var get_branch_id = inFormBranchCreatebranch_id.getValue().toUpperCase();

        inFormBranchCreatebranch_id.setValue("");
        inFormBranchCreatebranch_label.setValue("");
        inFormBranchCreatebranch_status.setSelectedKey("");

        FormBranchCreate.setVisible(false);
        FormBranchDetails.setVisible(false);

        NavContainer.to(PageBranch);
        await apiGET_Branch();
        sap.m.MessageToast.show(
            `Create Branch: ${get_branch_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function Branch_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormBranchDetails.getData().id,
            branch_id: inFormBranchDetailsbranch_id.getValue().toUpperCase(),
            branch_label: inFormBranchDetailsbranch_label.getValue(),
            branch_status: inFormBranchDetailsbranch_status.getSelectedKey(),
        },
    };
    await apiPOST_Branch(options);

    FormBranchCreate.setVisible(false);
    FormBranchDetails.setVisible(false);

    NavContainer.to(PageBranch);
    await apiGET_Branch();
    sap.m.MessageToast.show(
        `Update Branch: ${inFormBranchDetailsbranch_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function Branch_Delete(){
    // Get entire model
    const data = modelDialogDelete_Branch.getData();
    
    const id = data.id;
    const branch_id = data.branch_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the branch list
    await apiDELETE_Branch(options);
    await apiGET_Branch();
    
    // Show success message
    DialogDelete_Branch.close()
    sap.m.MessageToast.show(
        `Branch: ${branch_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}