// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 



// Load branch data
modelFilter_User_Branch.setData(await apiGET_Branch());

// Add empty/null option to Filter_User_Branch select only if it doesn't exist
if (Filter_User_Branch.getItems().length > 0 && Filter_User_Branch.getItems()[0].getKey() !== "") {
    var emptyItem = new sap.ui.core.ListItem({
        key: "",
        text: "All Branches"
    });
    // Insert at the beginning of the select
    Filter_User_Branch.insertItem(emptyItem, 0);
}
// Filter_User_Branch.setSelectedKey("");

// Load department data
modelFilter_User_Department.setData(await apiGET_Department());

// Add empty/null option to Filter_User_Department select only if it doesn't exist
if (Filter_User_Department.getItems().length > 0 && Filter_User_Department.getItems()[0].getKey() !== "") {
    var emptyItem = new sap.ui.core.ListItem({
        key: "",
        text: "All Departments"
    });
    // Insert at the beginning of the select
    Filter_User_Department.insertItem(emptyItem, 0);
}
// Filter_User_Department.setSelectedKey("");

modelTableUser.setData(await apiGET_UserRelation());

FormUserCreate.setVisible(false);
FormUserDetails.setVisible(false);

NavContainer.to(PageUser);