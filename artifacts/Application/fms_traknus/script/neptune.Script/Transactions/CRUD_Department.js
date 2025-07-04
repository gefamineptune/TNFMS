async function Department_Create(){
    var department_id = inFormDepartmentCreatedepartment_id;
    var department_name = inFormDepartmentCreatedepartment_name;

    if(department_id.getValue() === ""){
        department_id.setValueState("Error");
        department_id.setValueStateText("Please provide department id");
        sap.m.MessageToast.show(
            `Please provide department id`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        department_id.setValueState("None");
    }
    if(department_name.getValue() === ""){
        department_name.setValueState("Error");
        department_name.setValueStateText("Please provide department name");
        sap.m.MessageToast.show(
            `Please provide department name`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        department_name.setValueState("None");
    }

    // First check if department_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"department_id":department_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_Department(options);

    // If department with this ID already exists, show error message
    if (existing_data.length > 0) {
        department_id.setValueState("Error");
        department_id.setValueStateText("Department ID already exists");
        sap.m.MessageToast.show(
            `Department ID already exists. Please use a different ID`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        // If unique, proceed with creation
        options = {
            data: {
                department_id: department_id.getValue().toUpperCase(),
                department_name: department_name.getValue(),
            },
        };
        await apiPUT_Department(options);

        var get_department_id = inFormDepartmentCreatedepartment_id.getValue().toUpperCase();

        inFormDepartmentCreatedepartment_id.setValue("");
        inFormDepartmentCreatedepartment_name.setValue("");

        FormDepartmentCreate.setVisible(false);
        FormDepartmentDetails.setVisible(false);

        NavContainer.to(PageDepartment);
        await apiGET_Department();
        sap.m.MessageToast.show(
            `Create Department: ${get_department_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function Department_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormDepartmentDetails.getData().id,
            department_id: inFormDepartmentDetailsdepartment_id.getValue().toUpperCase(),
            department_name: inFormDepartmentDetailsdepartment_name.getValue(),
        },
    };
    await apiPOST_Department(options);

    FormDepartmentCreate.setVisible(false);
    FormDepartmentDetails.setVisible(false);

    NavContainer.to(PageDepartment);
    await apiGET_Department();
    sap.m.MessageToast.show(
        `Update Department: ${inFormDepartmentDetailsdepartment_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function Department_Delete(){
    // Get entire model
    const data = modelDialogDelete_Department.getData();
    
    const id = data.id;
    const department_id = data.department_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the Department list
    await apiDELETE_Department(options);
    await apiGET_Department();
    
    // Show success message
    DialogDelete_Department.close()
    sap.m.MessageToast.show(
        `Department: ${department_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}