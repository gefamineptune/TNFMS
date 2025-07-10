// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_Department();

FormDepartmentCreate.setVisible(false);
FormDepartmentDetails.setVisible(false);

NavContainer.to(PageDepartment);