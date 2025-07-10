FormUserCreate.setVisible(true);

modelinFormUserCreateuser_branch.setData(await apiGET_Branch());
modelinFormUserCreateuser_department.setData(await apiGET_Department());
modelinFormUserCreateuser_role.setData(await apiGET_Role());
modelinFormUserCreateuser_access.setData(await apiGET_Access());
modelinFormUserCreateuser_status.setData(await apiGET_Status());

var user = await apiGET_User(
    options = {
        parameters: {
            select: "user_id"
        }
    }
);
var existingIds = user.map(data => data.user_id);
var randomId = generateRandomUniqueId('UID', existingIds);

inFormUserCreateuser_id.setValue(randomId);

NavContainer.to(PageUserDetails);