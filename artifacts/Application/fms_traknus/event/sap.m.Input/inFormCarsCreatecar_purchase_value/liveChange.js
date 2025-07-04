// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// value - string
// escPressed - boolean
// previousValue - string
// 
let value = oEvent.getParameter('value');
inFormCarsCreatecar_purchase_value.setValue(formatAngkaDenganTitik(value));
inFormCarsCreatecar_fixed_cost.setValue(formatAngkaDenganTitik(Math.round(hapusFormatTitik(value) / 60)));


// For rounding down (floor)
// formatAngkaDenganTitik(Math.floor(hapusFormatTitik(value) / 60))

// For rounding up (ceiling)
// formatAngkaDenganTitik(Math.ceil(hapusFormatTitik(value) / 60))

// For standard rounding (to nearest integer)
// formatAngkaDenganTitik(Math.round(hapusFormatTitik(value) / 60))
