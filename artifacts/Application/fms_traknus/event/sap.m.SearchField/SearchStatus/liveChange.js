// Multiple Filters using OR
const binding = TableStatus.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("status_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("status_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);