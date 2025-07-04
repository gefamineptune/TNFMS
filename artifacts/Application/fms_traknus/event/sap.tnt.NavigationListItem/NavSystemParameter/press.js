// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

// Get entire model
const data = await apiGET_Parameter();

modelFormParameterDetails.setData(data[0]);

NavContainer.to(PageParameter);