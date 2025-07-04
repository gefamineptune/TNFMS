// Multiple Filters using OR
const binding = TableCarFuel.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("fuel_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fuel_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);