// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_CarFuel();

FormCarFuelCreate.setVisible(false);
FormCarFuelDetails.setVisible(false);

NavContainer.to(PageCarFuel);