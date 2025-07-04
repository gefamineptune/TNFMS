// // Add empty/null option to Filter_Role_Access select
// const emptyItem = new sap.ui.core.ListItem({
//     key: "",
//     text: "All Access Levels"
// });

// // Insert at the beginning of the select
// Filter_Role_Access.insertItem(emptyItem, 0);

// // Update the change event handler to handle empty selection
// Filter_Role_Access.attachChange(function(oEvent) {
//     const binding = TableRole.getBinding("items");
//     const selectedKey = oEvent.getSource().getSelectedKey();
    
//     if (selectedKey === "") {
//         // Clear filter when empty option is selected
//         binding.filter([]);
//     } else {
//         // Apply filter for selected access
//         const filter = new sap.ui.model.Filter({
//             filters: [
//                 new sap.ui.model.Filter("fms_access_access_id", "Contains", selectedKey)
//             ],
//             and: false
//         });
//         binding.filter([filter]);
//     }
// });

// // Set the empty option as default selected
// Filter_Role_Access.setSelectedKey("");