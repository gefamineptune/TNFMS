async function RAM_Update(){
    // Record the start time
    const startTime = new Date();

    // Show busy indicator
    sap.ui.core.BusyIndicator.show(0);

    const data = modelTableAccessMenuDetails.getData()
    data.forEach(async (item) => {
        // Role Acces: View
        try {
            var optionsView = {
                parameters: {
                    where: JSON.stringify({
                        "role_id" : item.RoleID,
                        "menu_id" : item.MenuID,
                        "permission_id" : item.ViewID,
                    }),
                },
                data: {
                    is_allowed: item.View,
                },
            };
            await apiPOST_RoleAccessMenu(optionsView);
            // console.log(optionsView);
        } catch (error) {
            console.error(error);
        }

        // Role Acces: Create
        try {
            var optionsCreate = {
                parameters: {
                    where: JSON.stringify({
                        "role_id" : item.RoleID,
                        "menu_id" : item.MenuID,
                        "permission_id" : item.CreateID,
                    }),
                },
                data: {
                    is_allowed: item.Create,
                },
            };
            await apiPOST_RoleAccessMenu(optionsCreate);
            // console.log(optionsCreate);
        } catch (error) {
            console.error(error);
        }

        // Role Acces: Edit
        try {
            var optionsEdit = {
                parameters: {
                    where: JSON.stringify({
                        "role_id" : item.RoleID,
                        "menu_id" : item.MenuID,
                        "permission_id" : item.EditID,
                    }),
                },
                data: {
                    is_allowed: item.Edit,
                },
            };
            await apiPOST_RoleAccessMenu(optionsEdit);
            // console.log(optionsEdit);
        } catch (error) {
            console.error(error);
        }

        // Role Acces: Delete
        try {
            var optionsDelete = {
                parameters: {
                    where: JSON.stringify({
                        "role_id" : item.RoleID,
                        "menu_id" : item.MenuID,
                        "permission_id" : item.DeleteID,
                    }),
                },
                data: {
                    is_allowed: item.Delete,
                },
            };
            await apiPOST_RoleAccessMenu(optionsDelete);
            // console.log(optionsDelete);
        } catch (error) {
            console.error(error);
        }
    });

    // Hide busy indicator and show success message
    sap.ui.core.BusyIndicator.hide();
    sap.m.MessageToast.show(
        "Update Role Access Menu was successfull!",
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );

    // Record the end time
    const endTime = new Date();
    // Calculate the duration in milliseconds
    const duration = endTime - startTime;
    // Log the duration to the console
    console.log(`Script execution time: ${duration} milliseconds`);
}

async function RAM_Update_View(){
    // Get entire model
    const data = modelDialog_RAM_View.getData();
    let role_id = modelFormRoleDetails.getData().fms_role_role_id;

    let options = {
        parameters: {
            where: JSON.stringify({
                "role_id" : role_id,
                "menu_id" : data.MenuID,
                "permission_id" : data.ViewID,
            }),
        },
        data: {
            is_allowed: data.View,
        },
    };
    await apiPOST_RoleAccessMenu(options);
    // await apiGET_RoleAccessMenuRelationship();

    Dialog_RAM_View.close();
    sap.m.MessageToast.show(
        "Update Role Access Menu was successfull!",
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function RAM_Update_Create(){
    // Get entire model
    const data = modelDialog_RAM_Create.getData();
    let role_id = modelFormRoleDetails.getData().fms_role_role_id;

    let options = {
        parameters: {
            where: JSON.stringify({
                "role_id" : role_id,
                "menu_id" : data.MenuID,
                "permission_id" : data.CreateID,
            }),
        },
        data: {
            is_allowed: data.Create,
        },
    };
    await apiPOST_RoleAccessMenu(options);

    Dialog_RAM_Create.close();
    sap.m.MessageToast.show(
        "Update Role Access Menu was successfull!",
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function RAM_Update_Edit(){
    // Get entire model
    const data = modelDialog_RAM_Edit.getData();
    let role_id = modelFormRoleDetails.getData().fms_role_role_id;

    let options = {
        parameters: {
            where: JSON.stringify({
                "role_id" : role_id,
                "menu_id" : data.MenuID,
                "permission_id" : data.EditID,
            }),
        },
        data: {
            is_allowed: data.Edit,
        },
    };
    await apiPOST_RoleAccessMenu(options);

    Dialog_RAM_Edit.close();
    sap.m.MessageToast.show(
        "Update Role Access Menu was successfull!",
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function RAM_Update_Delete(){
    // Get entire model
    const data = modelDialog_RAM_Delete.getData();
    let role_id = modelFormRoleDetails.getData().fms_role_role_id;

    let options = {
        parameters: {
            where: JSON.stringify({
                "role_id" : role_id,
                "menu_id" : data.MenuID,
                "permission_id" : data.DeleteID,
            }),
        },
        data: {
            is_allowed: data.Delete,
        },
    };
    await apiPOST_RoleAccessMenu(options);

    Dialog_RAM_Delete.close();
    sap.m.MessageToast.show(
        "Update Role Access Menu was successfull!",
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}