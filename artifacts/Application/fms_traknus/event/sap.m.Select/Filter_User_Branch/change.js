// Multiple Filters using OR
const binding = TableUser.getBinding("items");
const selectedKey = this.getSelectedKey();
if (selectedKey === "") {
    // Clear filter when empty option is selected
    binding.filter([]);
} else {
    // Apply filter for selected access
    const filter = new sap.ui.model.Filter({
        filters: [
            new sap.ui.model.Filter("fms_branch_branch_id", "Contains", selectedKey)
        ],
        and: false
    });
    binding.filter([filter]);
}