// Multiple Filters using OR
const binding = TableRole.getBinding("items");
const selectedKey = oEvent.getSource().getSelectedKey();
if (selectedKey === "") {
    // Clear filter when empty option is selected
    binding.filter([]);
} else {
    // Apply filter for selected access
    const filter = new sap.ui.model.Filter({
        filters: [
            new sap.ui.model.Filter("fms_access_access_id", "Contains", selectedKey)
        ],
        and: false
    });
    binding.filter([filter]);
}