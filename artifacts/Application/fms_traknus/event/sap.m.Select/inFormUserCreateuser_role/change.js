// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// selectedItem - sap.ui.core.Item
// previousSelectedItem - sap.ui.core.Item
// 

try {
    // Get the selected role key from the dropdown
    const selectedRoleKey = oEvent.getParameter("selectedItem").getKey();
    if (selectedRoleKey) {
        // Call the appropriate API based on the selected role
        var options = {
            parameters: {
                where: JSON.stringify({"role_id":selectedRoleKey})
            }
        };
        const result = await apiGET_RoleRelation(options);
        inFormUserCreateuser_access.setSelectedKey(result[0].fms_access_access_id);
        // sap.m.MessageToast.show("Selected Role: " + selectedRoleKey);
    } else {
        sap.m.MessageToast.show("No role selected");
    }
} catch (error) {
    sap.m.MessageToast.show("Error: " + error.message);
}