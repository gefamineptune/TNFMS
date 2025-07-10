// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_CarStatus();

FormCarStatusCreate.setVisible(false);
FormCarStatusDetails.setVisible(false);

NavContainer.to(PageCarStatus);