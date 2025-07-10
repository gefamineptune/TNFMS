inFormCarTypeCreatetype_id.setValue("");
inFormCarTypeCreatetype_id.setValueState("None");

inFormCarTypeCreatetype_name.setValue("");
inFormCarTypeCreatetype_name.setValueState("None");

FormCarTypeCreate.setVisible(false);
FormCarTypeDetails.setVisible(false);

await apiGET_CarType();

NavContainer.to(PageCarType);