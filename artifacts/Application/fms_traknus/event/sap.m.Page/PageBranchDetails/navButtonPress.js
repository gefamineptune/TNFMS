inFormBranchCreatebranch_id.setValue("");
inFormBranchCreatebranch_id.setValueState("None");

inFormBranchCreatebranch_label.setValue("");
inFormBranchCreatebranch_label.setValueState("None");

FormBranchCreate.setVisible(false);
FormBranchDetails.setVisible(false);

await apiGET_Branch();

NavContainer.to(PageBranch);