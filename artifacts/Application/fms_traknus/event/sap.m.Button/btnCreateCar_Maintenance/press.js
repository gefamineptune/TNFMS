BoxFormCarsCreate.setVisible(true);
BoxFormCarsDetails.setVisible(false);

modelinFormCarsCreatecar_acquisition_type.setData(await apiGET_CarAcquisition());
modelinFormCarsCreatecar_brand.setData(await apiGET_CarBrand());
modelinFormCarsCreatecar_type.setData(await apiGET_CarType());
modelinFormCarsCreatecar_fuel.setData(await apiGET_CarFuel());
modelinFormCarsCreatecar_category.setData(await apiGET_CarCategory());
modelinFormCarsCreatecar_branch.setData(await apiGET_Branch());
modelinFormCarsCreatecar_ownership.setData(await apiGET_CarOwnership());
modelinFormCarsCreatecar_remarks.setData(await apiGET_CarRemarks());
modelinFormCarsCreatecar_status.setData(await apiGET_CarStatus());

NavContainer.to(PageCarsDetails);