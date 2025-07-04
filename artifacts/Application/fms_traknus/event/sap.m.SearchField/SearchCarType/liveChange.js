// Multiple Filters using OR
const binding = TableCarType.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("type_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("type_name", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);