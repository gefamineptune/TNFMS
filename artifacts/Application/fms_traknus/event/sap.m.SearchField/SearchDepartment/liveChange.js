// Multiple Filters using OR
const binding = TableDepartment.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("department_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("department_name", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);