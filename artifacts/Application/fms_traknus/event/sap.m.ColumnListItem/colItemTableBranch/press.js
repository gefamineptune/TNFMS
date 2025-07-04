// List: get selected row
// Replace yourField with fieldName
const context = oEvent.oSource.getBindingContext();

// Get entire model
const data = context.getObject();

modelFormBranchDetails.setData(data);

FormBranchDetails.setVisible(true);

NavContainer.to(PageBranchDetails);