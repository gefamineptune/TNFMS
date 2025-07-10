inFormStatusCreatestatus_id.setValue("");
inFormStatusCreatestatus_id.setValueState("None");

inFormStatusCreatestatus_label.setValue("");
inFormStatusCreatestatus_label.setValueState("None");

FormStatusCreate.setVisible(false);
FormStatusDetails.setVisible(false);

await apiGET_Status();

NavContainer.to(PageStatus);