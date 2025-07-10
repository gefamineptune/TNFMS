// Multiple Filters using OR
const binding = TableCarCostCenter.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("cost_center_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("cost_center_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);