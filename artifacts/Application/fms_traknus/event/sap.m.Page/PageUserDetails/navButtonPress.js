inFormUserCreateuser_id.setValue("");
inFormUserCreateuser_id.setValueState("None");
inFormUserCreateuser_name.setValue("");
inFormUserCreateuser_name.setValueState("None");
inFormUserCreateuser_password.setValue("");
inFormUserCreateuser_password.setValueState("None");

inFormUserCreateuser_branch.setSelectedKey("");
inFormUserCreateuser_department.setSelectedKey("");
inFormUserCreateuser_role.setSelectedKey("");
inFormUserCreateuser_access.setSelectedKey("");
inFormUserCreateuser_status.setSelectedKey("");

FormUserCreate.setVisible(false);
FormUserDetails.setVisible(false);

await apiGET_UserRelation();

NavContainer.to(PageUser);