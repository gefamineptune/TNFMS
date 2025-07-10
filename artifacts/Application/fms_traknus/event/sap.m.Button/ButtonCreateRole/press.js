BoxFormRoleCreate.setVisible(true);

modelinFormRoleCreaterole_access.setData(await apiGET_Access());
modelinFormRoleCreaterole_status.setData(await apiGET_Status());

var role = await apiGET_Role(
    options = {
        parameters: {
            select: "role_id"
        }
    }
);
var existingIds = role.map(data => data.role_id);
var randomId = generateRandomUniqueId('RID', existingIds);

inFormRoleCreaterole_id.setValue(randomId);

NavContainer.to(PageRoleDetails);