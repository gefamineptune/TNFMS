inFormCarCategoryCreatecategory_id.setValue("");
inFormCarCategoryCreatecategory_id.setValueState("None");

inFormCarCategoryCreatecategory_label.setValue("");
inFormCarCategoryCreatecategory_label.setValueState("None");

FormCarCategoryCreate.setVisible(false);
FormCarCategoryDetails.setVisible(false);

await apiGET_CarCategory();

NavContainer.to(PageCarCategory);