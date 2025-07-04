// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// value - string
// escPressed - boolean
// previousValue - string
// 
let value = oEvent.getParameter('value');
inFormCarsDetailscar_purchase_value.setValue(formatAngkaDenganTitik(value));
inFormCarsDetailscar_fixed_cost.setValue(formatAngkaDenganTitik(Math.round(hapusFormatTitik(value) / 60)));