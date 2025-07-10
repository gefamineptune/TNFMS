async function User_Create(){
    var user_id = inFormUserCreateuser_id;
    var user_name = inFormUserCreateuser_name;
    var user_password = inFormUserCreateuser_password;
    var user_branch = inFormUserCreateuser_branch;
    var user_department = inFormUserCreateuser_department;
    var user_role = inFormUserCreateuser_role;
    var user_status = inFormUserCreateuser_status;

    if(user_id.getValue() === ""){
        user_id.setValueState("Error");
        user_id.setValueStateText("Please provide user id");
        sap.m.MessageToast.show(
            `Please provide user id`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        user_id.setValueState("None");
    }

    if(user_name.getValue() === ""){
        user_name.setValueState("Error");
        user_name.setValueStateText("Please provide user name");
        sap.m.MessageToast.show(
            `Please provide user name`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        user_name.setValueState("None");
    }

    if(user_password.getValue() === ""){
        user_password.setValueState("Error");
        user_password.setValueStateText("Please provide user password");
        sap.m.MessageToast.show(
            `Please provide user password`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        user_password.setValueState("None");
    }

    if(user_branch.getSelectedKey() === ""){
        user_branch.setValueState("Error");
        user_branch.setValueStateText("Please select user branch");
        sap.m.MessageToast.show(
            `Please provide user branch`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        user_branch.setValueState("None");
    }

    if(user_department.getSelectedKey() === ""){
        user_department.setValueState("Error");
        user_department.setValueStateText("Please select user department");
        sap.m.MessageToast.show(
            `Please provide user department`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        user_department.setValueState("None");
    }

    if(user_role.getSelectedKey() === ""){
        user_role.setValueState("Error");
        user_role.setValueStateText("Please select user role");
        sap.m.MessageToast.show(
            `Please provide user role`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        user_role.setValueState("None");
    }

    if(user_status.getSelectedKey() === ""){
        user_status.setValueState("Error");
        user_status.setValueStateText("Please select user status");
        sap.m.MessageToast.show(
            `Please provide user status`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        user_status.setValueState("None");
    }

    // First check if user_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"user_id":user_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_User(options);

    // If user with this ID already exists, show error message
    if (existing_data.length > 0) {
        user_id.setValueState("Error");
        user_id.setValueStateText("User ID already exists");
        sap.m.MessageToast.show(
            `User ID already exists. Please use a different ID`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        // If unique, proceed with creation
        // Generate a salt (10 rounds is a good balance of security and performance)
        const salt = generateSalt(10);
        options = {
            data: {
                user_id: user_id.getValue().toUpperCase(),
                user_name: user_name.getValue(),
                user_password: hashPassword(user_password.getValue(), salt),
                user_branch: user_branch.getSelectedKey(),
                user_department: user_department.getSelectedKey(),
                user_role: user_role.getSelectedKey(),
                user_status: user_status.getSelectedKey(),
            },
        };
        await apiPUT_User(options);

        var get_user_id = inFormUserCreateuser_id.getValue().toUpperCase();

        inFormUserCreateuser_id.setValue("");
        inFormUserCreateuser_name.setValue("");
        inFormUserCreateuser_password.setValue("");
        inFormUserCreateuser_branch.setSelectedKey("");
        inFormUserCreateuser_department.setSelectedKey("");
        inFormUserCreateuser_role.setSelectedKey("");
        inFormUserCreateuser_access.setSelectedKey("");
        inFormUserCreateuser_status.setSelectedKey("");

        FormUserCreate.setVisible(false);
        FormUserDetails.setVisible(false);

        NavContainer.to(PageUser);
        await apiGET_UserRelation();
        sap.m.MessageToast.show(
            `Create User: ${get_user_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function User_Update(){
    // Generate a salt (10 rounds is a good balance of security and performance)
    const salt = generateSalt(10);
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormUserDetails.getData().fms_user_id,
            user_id: inFormUserDetailsuser_id.getValue().toUpperCase(),
            user_name: inFormUserDetailsuser_name.getValue(),
            user_password: hashPassword(inFormUserDetailsuser_password.getValue(), salt),
            user_branch: inFormUserDetailsuser_branch.getSelectedKey(),
            user_department: inFormUserDetailsuser_department.getSelectedKey(),
            user_role: inFormUserDetailsuser_role.getSelectedKey(),
            user_status: inFormUserDetailsuser_status.getSelectedKey(),
        },
    };
    await apiPOST_User(options);

    FormUserCreate.setVisible(false);
    FormUserDetails.setVisible(false);

    NavContainer.to(PageUser);
    await apiGET_UserRelation();
    sap.m.MessageToast.show(
        `Update User: ${inFormUserDetailsuser_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function User_Delete(){
    // Get entire model
    const data = modelDialogDelete_User.getData();
    
    const id = data.fms_user_id;
    const user_id = data.fms_user_user_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the User list
    await apiDELETE_User(options);
    await apiGET_UserRelation();
    
    // Show success message
    DialogDelete_User.close()
    sap.m.MessageToast.show(
        `User: ${user_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}