// Multiple Filters using OR
const binding = TableCarOwnership.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("ownership_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("ownership_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);