// Multiple Filters using OR
const binding = TableUser.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("fms_user_user_id", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_user_user_name", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_branch_branch_label", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_department_department_name", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_role_role_label", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_access_access_label", "Contains",  this.getValue()),
    new sap.ui.model.Filter("fms_status_status_label", "Contains",  this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);