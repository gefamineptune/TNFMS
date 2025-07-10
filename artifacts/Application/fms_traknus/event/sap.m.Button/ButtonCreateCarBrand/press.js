FormCarBrandCreate.setVisible(true);

modelinFormCarBrandCreatebrand_status.setData(await apiGET_Status());

var carBrand = await apiGET_CarBrand(
    options = {
        parameters: {
            select: "brand_id"
        }
    }
);
var existingIds = carBrand.map(data => data.brand_id);
var randomId = generateRandomUniqueId('CRBRND', existingIds);

inFormCarBrandCreatebrand_id.setValue(randomId);

NavContainer.to(PageCarBrandDetails);