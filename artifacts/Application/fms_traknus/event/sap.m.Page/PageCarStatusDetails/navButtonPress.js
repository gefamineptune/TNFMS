inFormCarStatusCreatestatus_id.setValue("");
inFormCarStatusCreatestatus_id.setValueState("None");

inFormCarStatusCreatestatus_label.setValue("");
inFormCarStatusCreatestatus_label.setValueState("None");

FormCarStatusCreate.setVisible(false);
FormCarStatusDetails.setVisible(false);

await apiGET_CarStatus();

NavContainer.to(PageCarStatus);