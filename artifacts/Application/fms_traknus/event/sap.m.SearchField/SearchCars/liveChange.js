// Multiple Filters using OR
const binding = TableCars.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("fms_car_brand_brand_name", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_car_type_type_name", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_car_car_license_plate", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_car_ownership_ownership_label", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_car_status_status_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);