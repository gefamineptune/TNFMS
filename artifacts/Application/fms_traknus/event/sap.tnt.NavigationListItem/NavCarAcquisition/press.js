// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_CarAcquisition();

FormCarAcquisitionCreate.setVisible(false);
FormCarAcquisitionDetails.setVisible(false);

NavContainer.to(PageCarAcquisition);