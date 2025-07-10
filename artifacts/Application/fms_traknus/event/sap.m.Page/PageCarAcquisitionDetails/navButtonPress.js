inFormCarAcquisitionCreateacquisition_id.setValue("");
inFormCarAcquisitionCreateacquisition_id.setValueState("None");

inFormCarAcquisitionCreateacquisition_label.setValue("");
inFormCarAcquisitionCreateacquisition_label.setValueState("None");

FormCarAcquisitionCreate.setVisible(false);
FormCarAcquisitionDetails.setVisible(false);

await apiGET_CarAcquisition();

NavContainer.to(PageCarAcquisition);