inFormCarBrandCreatebrand_id.setValue("");
inFormCarBrandCreatebrand_id.setValueState("None");

inFormCarBrandCreatebrand_name.setValue("");
inFormCarBrandCreatebrand_name.setValueState("None");

FormCarBrandCreate.setVisible(false);
FormCarBrandDetails.setVisible(false);

await apiGET_CarBrand();

NavContainer.to(PageCarBrand);