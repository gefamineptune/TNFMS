// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// value - string
// escPressed - boolean
// previousValue - string
// 

// Get the input value
let value = oEvent.getParameter('value');

this.setValue(formatAngkaDenganTitik(this.getValue()));
// inFormParameterDetailsperiodical_service_1.setValue(formatAngkaDenganTitik(value));