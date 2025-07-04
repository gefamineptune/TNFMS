const data = modelDialog_RAM_Edit.getData();

modelTableAccessMenuDetails.setData(await apiGET_RoleAccessMenuRelationship(
    option = {
        parameters: {
            where: JSON.stringify({"role_id":data.RoleID}),
        }
    }
));

Dialog_RAM_Edit.close();