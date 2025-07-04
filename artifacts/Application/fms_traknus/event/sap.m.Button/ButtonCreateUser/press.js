FormUserCreate.setVisible(true);

modelinFormUserCreateuser_branch.setData(await apiGET_Branch());
modelinFormUserCreateuser_department.setData(await apiGET_Department());
modelinFormUserCreateuser_role.setData(await apiGET_Role());
modelinFormUserCreateuser_access.setData(await apiGET_Access());
modelinFormUserCreateuser_status.setData(await apiGET_Status());

NavContainer.to(PageUserDetails);