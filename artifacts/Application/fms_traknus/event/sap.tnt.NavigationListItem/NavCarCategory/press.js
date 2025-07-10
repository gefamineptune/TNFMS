// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_CarCategory();

FormCarCategoryCreate.setVisible(false);
FormCarCategoryDetails.setVisible(false);

NavContainer.to(PageCarCategory);