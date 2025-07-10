async function loginUser(user_id, user_password){
    // Set up options for the API call with user_id filter
    var options = {
        parameters: {
            where: JSON.stringify({"fms_user_user_id": user_id})
        }
    };

    // Call the GET_User API
    const getUser = await apiGET_UserRelation(options);
    // Log the getUser data to console
    // console.log("User data:", getUser[0]);

    if(getUser.length > 0){
        // User found, now check password
        // Verify Password
        const resultPassword = await verifyPassword(user_password, getUser[0].fms_user_user_password);

        if(resultPassword.isValid){
            // Set Session Storage
            sessionStorage.setItem("name", getUser[0].fms_user_user_name)
            sessionStorage.setItem("role", getUser[0].fms_role_role_label)

            User_Name.setText(sessionStorage.getItem("name"))
            User_Role.setText(sessionStorage.getItem("role"))

            sap.m.MessageToast.show(
                "Login Success",
                {
                    my: sap.ui.core.Popup.Dock.CenterBottom,
                    at: sap.ui.core.Popup.Dock.CenterBottom
                }
            );

            Login.setVisible(false);
            ToolPage.setVisible(true);
            
            App.to(ToolPage);

            NavContainer.to(PageDashboard);
            NavigationList.setSelectedItem(NavDashboard);
            
        } else {
            sap.m.MessageToast.show(
                "Invalid Password",
                {
                    my: sap.ui.core.Popup.Dock.CenterBottom,
                    at: sap.ui.core.Popup.Dock.CenterBottom
                }
            );
        }
    } else {
        // No user found with the provided email
        // sap.m.MessageToast.show("Invalid Email");
        sap.m.MessageToast.show(
            "Invalid Email",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}