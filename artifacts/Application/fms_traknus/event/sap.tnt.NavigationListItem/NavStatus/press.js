// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_Status();

FormStatusCreate.setVisible(false);
FormStatusDetails.setVisible(false);

NavContainer.to(PageStatus);