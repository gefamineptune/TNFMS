inFormDepartmentCreatedepartment_id.setValue("");
inFormDepartmentCreatedepartment_id.setValueState("None");

inFormDepartmentCreatedepartment_name.setValue("");
inFormDepartmentCreatedepartment_name.setValueState("None");

FormDepartmentCreate.setVisible(false);
FormDepartmentDetails.setVisible(false);

await apiGET_Department();

NavContainer.to(PageDepartment);