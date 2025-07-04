// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

// Load role access data
modelFilter_Role_Access.setData(await apiGET_Access());

// Add empty/null option to Filter_User_Branch select only if it doesn't exist
if (Filter_Role_Access.getItems().length > 0 && Filter_Role_Access.getItems()[0].getKey() !== "") {
    var emptyItem = new sap.ui.core.ListItem({
        key: "",
        text: "All Access Levels"
    });
    // Insert at the beginning of the select
    Filter_Role_Access.insertItem(emptyItem, 0);
}
Filter_Role_Access.setSelectedKey("");

await apiGET_RoleRelation();

BoxFormRoleCreate.setVisible(false);
BoxFormRoleDetails.setVisible(false);

NavContainer.to(PageRole);