// Multiple Filters using OR
const binding = TableBranch.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("branch_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("branch_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);