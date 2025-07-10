// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_CarBrand();

FormCarBrandCreate.setVisible(false);
FormCarBrandDetails.setVisible(false);

NavContainer.to(PageCarBrand);