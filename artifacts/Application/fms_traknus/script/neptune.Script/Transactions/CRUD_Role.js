async function Role_Create(){
    // Show busy indicator
    sap.ui.core.BusyIndicator.show(0);

    var role_id = inFormRoleCreaterole_id;
    var role_label = inFormRoleCreaterole_label;
    var role_access = inFormRoleCreaterole_access;
    var role_status = inFormRoleCreaterole_status;

    if(role_id.getValue() === ""){
        role_id.setValueState("Error");
        role_id.setValueStateText("Please provide role id");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide role id`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        role_id.setValueState("None");
    }
    if(role_label.getValue() === ""){
        role_label.setValueState("Error");
        role_label.setValueStateText("Please provide role label");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please provide role label`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        role_label.setValueState("None");
    }
    if(role_access.getSelectedKey() === ""){
        role_access.setValueState("Error");
        role_access.setValueStateText("Please select role access");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please select role access`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        role_access.setValueState("None");
    }
    if(role_status.getSelectedKey() === ""){
        role_status.setValueState("Error");
        role_status.setValueStateText("Please select role status");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Please select role status`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        role_status.setValueState("None");
    }

    // First check if role_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"role_id":role_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_Role(options);

    // If role with this ID already exists, show error message
    if (existing_data.length > 0) {
        role_id.setValueState("Error");
        role_id.setValueStateText("Role ID already exists");
        // Hide busy indicator and show message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Role ID already exists. Please use a different ID`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        // If unique, proceed with creation
        var options = {
            data: {
                role_id: role_id.getValue().toUpperCase(),
                role_label: role_label.getValue(),
                role_access: role_access.getSelectedKey(),
                role_status: role_status.getSelectedKey(),
            },
        };
        await apiPUT_Role(options);

        var get_role_id = inFormRoleCreaterole_id.getValue().toUpperCase();

        // Create role access menu untuk role_id dengan value default is true
        let menu = await apiGET_Menu();
        let permission = await apiGET_Permission();
        try {
            menu.forEach(async (menuItem) => {
                permission.forEach(async (permissionItem) => {
                    const options = {
                        data: {
                            role_id: get_role_id,
                            menu_id: menuItem.menu_id,
                            permission_id: permissionItem.permission_id,
                            is_enabled: true,
                            is_allowed: true,
                        },
                    };
                    await apiPUT_RoleAccessMenu(options);
                });
            });
        } catch (error) {
            sap.m.MessageToast.show(
                `Error: ${error.message}`,
                {
                    my: sap.ui.core.Popup.Dock.CenterBottom,
                    at: sap.ui.core.Popup.Dock.CenterBottom
                }
            );
            
        }

        inFormRoleCreaterole_id.setValue("");
        inFormRoleCreaterole_label.setValue("");
        inFormRoleCreaterole_access.setSelectedKey("");
        inFormRoleCreaterole_status.setSelectedKey("");

        BoxFormRoleCreate.setVisible(false);
        BoxFormRoleDetails.setVisible(true);
        // BoxFormRoleDetails.setVisible(false);
        
        var options = {
            parameters: {
                where: JSON.stringify({"role_id":get_role_id})
            }
        };
        let data = await apiGET_RoleRelation(options)

        modelFormRoleDetails.setData(data[0]);

        modelinFormRoleDetailsrole_access.setData(await apiGET_Access());
        modelinFormRoleDetailsrole_status.setData(await apiGET_Status());

        inFormRoleDetailsrole_access.setSelectedKey(data[0].fms_role_role_access);
        inFormRoleDetailsrole_status.setSelectedKey(data[0].fms_role_role_status);

        modelTableAccessMenuDetails.setData(await apiGET_RoleAccessMenuRelationship(
            option = {
                parameters: {
                    where: JSON.stringify({"role_id":get_role_id}),
                }
            }
        ));

        NavContainer.to(PageRoleDetails);
        await apiGET_RoleRelation();

        // NavContainer.to(PageRole);
        // await apiGET_RoleRelation();

        // Hide busy indicator and show success message
        sap.ui.core.BusyIndicator.hide();
        sap.m.MessageToast.show(
            `Create Role: ${get_role_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function Role_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormRoleDetails.getData().fms_role_id,
            role_id: inFormRoleDetailsrole_id.getValue().toUpperCase(),
            role_label: inFormRoleDetailsrole_label.getValue(),
            role_access: inFormRoleDetailsrole_access.getSelectedKey(),
            role_status: inFormRoleDetailsrole_status.getSelectedKey(),
        },
    };
    await apiPOST_Role(options);

    BoxFormRoleCreate.setVisible(false);
    BoxFormRoleDetails.setVisible(false);

    NavContainer.to(PageRole);
    await apiGET_RoleRelation();
    sap.m.MessageToast.show(
        `Update Role: ${inFormRoleDetailsrole_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function Role_Delete(){
    // Show busy indicator
    sap.ui.core.BusyIndicator.show(0);

    // Get entire model
    const data = modelDialogDelete_Role.getData();
    
    const id = data.fms_role_id;
    const role_id = data.fms_role_role_id;

    // Get semua role access menu dengan id role_id
    const optionRAM = {
        parameters: {
            where: JSON.stringify({"role_id":role_id})
        }
    }
    let role_access_menu = await apiGET_RoleAccessMenu(optionRAM);

    // Delete semua role access menu dengan id role_id
    role_access_menu.forEach(async () => {
        await apiDELETE_RoleAccessMenu(optionRAM);
    });
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the Role list
    await apiDELETE_Role(options);
    await apiGET_RoleRelation();
    
    DialogDelete_Role.close()
    // Hide busy indicator and show success message
    sap.ui.core.BusyIndicator.hide();
    sap.m.MessageToast.show(
        `Role: ${role_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}