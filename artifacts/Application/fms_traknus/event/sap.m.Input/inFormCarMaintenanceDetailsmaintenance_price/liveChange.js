// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// value - string
// escPressed - boolean
// previousValue - string
// 

let value = oEvent.getParameter('value');
inFormCarMaintenanceDetailsmaintenance_price.setValue(formatAngkaDenganTitik(value));