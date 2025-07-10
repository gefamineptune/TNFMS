// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// value - string
// escPressed - boolean
// previousValue - string
// 

let value = oEvent.getParameter('value');
inFormCarMaintenanceCreatemaintenance_vehicle_km.setValue(formatAngkaDenganTitik(value));