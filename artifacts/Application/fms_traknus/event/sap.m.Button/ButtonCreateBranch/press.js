FormBranchCreate.setVisible(true);

modelinFormBranchCreatebranch_status.setData(await apiGET_Status());

var branch = await apiGET_Branch(
    options = {
        parameters: {
            select: "branch_id"
        }
    }
);
var existingIds = branch.map(data => data.branch_id);
var randomId = generateRandomUniqueId('BRNCH', existingIds);

inFormBranchCreatebranch_id.setValue(randomId);

NavContainer.to(PageBranchDetails);