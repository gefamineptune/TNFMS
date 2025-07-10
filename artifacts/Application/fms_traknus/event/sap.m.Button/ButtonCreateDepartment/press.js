FormDepartmentCreate.setVisible(true);

modelinFormDepartmentCreatedepartment_status.setData(await apiGET_Status());

var department = await apiGET_Department(
    options = {
        parameters: {
            select: "department_id"
        }
    }
);
var existingIds = department.map(data => data.department_id);
var randomId = generateRandomUniqueId('DPRMT', existingIds);

inFormDepartmentCreatedepartment_id.setValue(randomId);

NavContainer.to(PageDepartmentDetails);