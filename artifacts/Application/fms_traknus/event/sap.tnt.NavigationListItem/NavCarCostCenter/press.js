// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_CarCostCenter();

FormCarCostCenterCreate.setVisible(false);
FormCarCostCenterDetails.setVisible(false);

NavContainer.to(PageCarCostCenter);