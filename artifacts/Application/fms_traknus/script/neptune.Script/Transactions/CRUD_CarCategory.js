async function CarCategory_Create(){
    var category_id = inFormCarCategoryCreatecategory_id;
    var category_label = inFormCarCategoryCreatecategory_label;

    if(category_id.getValue() === ""){
        category_id.setValueState("Error");
        category_id.setValueStateText("Please provide category id");
        sap.m.MessageToast.show(
            "Please provide category id",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        category_id.setValueState("None");
    }
    if(category_label.getValue() === ""){
        category_label.setValueState("Error");
        category_label.setValueStateText("Please provide category label");
        sap.m.MessageToast.show(
            "Please provide category label",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        category_label.setValueState("None");
    }

    // First check if category_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"category_id":category_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_CarCategory(options);

    // If category with this ID already exists, show error message
    if (existing_data.length > 0) {
        category_id.setValueState("Error");
        category_id.setValueStateText("Category ID already exists");
        sap.m.MessageToast.show(
            "Category ID already exists. Please use a different ID",
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
                category_id: category_id.getValue().toUpperCase(),
                category_label: category_label.getValue(),
            },
        };
        await apiPUT_CarCategory(options);

        var get_category_id = inFormCarCategoryCreatecategory_id.getValue().toUpperCase();

        inFormCarCategoryCreatecategory_id.setValue("");
        inFormCarCategoryCreatecategory_label.setValue("");

        FormCarCategoryCreate.setVisible(false);
        FormCarCategoryDetails.setVisible(false);

        NavContainer.to(PageCarCategory);
        await apiGET_CarCategory();
        sap.m.MessageToast.show(
            `Create Car Category: ${get_category_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function CarCategory_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarCategoryDetails.getData().id,
            category_id: inFormCarCategoryDetailscategory_id.getValue().toUpperCase(),
            category_label: inFormCarCategoryDetailscategory_label.getValue(),
        },
    };
    await apiPOST_CarCategory(options);

    FormCarCategoryCreate.setVisible(false);
    FormCarCategoryDetails.setVisible(false);

    NavContainer.to(PageCarCategory);
    await apiGET_CarCategory();
    sap.m.MessageToast.show(
        `Update Car Category: ${inFormCarCategoryDetailscategory_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarCategory_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarCategory.getData();
    
    const id = data.id;
    const category_id = data.category_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the CarCategory list
    await apiDELETE_CarCategory(options);
    await apiGET_CarCategory();
    
    // Show success message
    DialogDelete_CarCategory.close()
    sap.m.MessageToast.show(
        `Car Category: ${category_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}