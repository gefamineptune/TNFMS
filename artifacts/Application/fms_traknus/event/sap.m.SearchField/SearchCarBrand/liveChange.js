// Multiple Filters using OR
const binding = TableCarBrand.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("brand_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("brand_name", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);