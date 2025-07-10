FormCarCategoryCreate.setVisible(true);

modelinFormCarCategoryCreatecategory_status.setData(await apiGET_Status());

var carCategory = await apiGET_CarCategory(
    options = {
        parameters: {
            select: "category_id"
        }
    }
);
var existingIds = carCategory.map(data => data.category_id);
var randomId = generateRandomUniqueId('CRCTG', existingIds);

inFormCarCategoryCreatecategory_id.setValue(randomId);

NavContainer.to(PageCarCategoryDetails);