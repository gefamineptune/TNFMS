// Multiple Filters using OR
const binding = TableCarRemarks.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("remarks_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("remarks_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);