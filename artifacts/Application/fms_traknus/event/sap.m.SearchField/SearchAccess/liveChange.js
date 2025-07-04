// Multiple Filters using OR
const binding = TableAccess.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("access_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("access_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);