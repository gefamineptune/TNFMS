// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_Access();

FormAccessCreate.setVisible(false);
FormAccessDetails.setVisible(false);

NavContainer.to(PageAccess);