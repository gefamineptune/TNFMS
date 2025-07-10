// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

await apiGET_Branch();

FormBranchCreate.setVisible(false);
FormBranchDetails.setVisible(false);

NavContainer.to(PageBranch);