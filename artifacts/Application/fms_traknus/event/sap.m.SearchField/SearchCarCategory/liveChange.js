// Multiple Filters using OR
const binding = TableCarCategory.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("category_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("category_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);