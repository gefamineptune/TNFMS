// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_CarType();

FormCarTypeCreate.setVisible(false);
FormCarTypeDetails.setVisible(false);

NavContainer.to(PageCarType);