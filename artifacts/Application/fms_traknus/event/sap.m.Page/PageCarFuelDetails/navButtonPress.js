inFormCarFuelCreatefuel_id.setValue("");
inFormCarFuelCreatefuel_id.setValueState("None");

inFormCarFuelCreatefuel_type.setValue("");
inFormCarFuelCreatefuel_type.setValueState("None");

FormCarFuelCreate.setVisible(false);
FormCarFuelDetails.setVisible(false);

await apiGET_CarFuel();

NavContainer.to(PageCarFuel);