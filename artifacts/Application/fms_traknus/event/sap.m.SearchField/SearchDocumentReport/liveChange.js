// Multiple Filters using OR
const binding = TableDocumentReport.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("fms_car_brand_brand_name", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);