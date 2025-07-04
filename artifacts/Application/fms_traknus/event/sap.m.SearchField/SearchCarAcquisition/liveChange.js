// Multiple Filters using OR
const binding = TableCarAcquisition.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("acquisition_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("acquisition_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);