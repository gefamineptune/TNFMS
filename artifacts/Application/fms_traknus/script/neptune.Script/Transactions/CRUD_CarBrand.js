async function CarBrand_Create(){
    var brand_id = inFormCarBrandCreatebrand_id;
    var brand_name = inFormCarBrandCreatebrand_name;
    var brand_status = inFormCarBrandCreatebrand_status;

    if(brand_id.getValue() === ""){
        brand_id.setValueState("Error");
        brand_id.setValueStateText("Please provide brand id");
        sap.m.MessageToast.show(
            "Please provide brand id",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        
        return;
    } else {
        brand_id.setValueState("None");
    }
    if(brand_name.getValue() === ""){
        brand_name.setValueState("Error");
        brand_name.setValueStateText("Please provide brand name");
        sap.m.MessageToast.show(
            "Please provide brand name",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        brand_name.setValueState("None");
    }
    if(brand_status.getSelectedKey() === ""){
        brand_status.setValueState("Error");
        brand_status.setValueStateText("Please select brand status");
        sap.m.MessageToast.show(
            `Please provide brand status`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        brand_status.setValueState("None");
    }

    // First check if brand_id is unique before creating
    var options = {
        parameters: { 
            where: JSON.stringify({"brand_id":brand_id.getValue().toUpperCase()}),
        }
    };
    let existing_data = await apiGET_CarBrand(options);

    // If brand with this ID already exists, show error message
    if (existing_data.length > 0) {
        brand_id.setValueState("Error");
        brand_id.setValueStateText("Brand ID already exists");
        sap.m.MessageToast.show(
            "Brand ID already exists. Please use a different ID",
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
                brand_id: brand_id.getValue().toUpperCase(),
                brand_name: brand_name.getValue(),
                brand_status: brand_status.getSelectedKey(),
            },
        };
        await apiPUT_CarBrand(options);

        var get_brand_id = inFormCarBrandCreatebrand_id.getValue().toUpperCase();

        inFormCarBrandCreatebrand_id.setValue("");
        inFormCarBrandCreatebrand_name.setValue("");
        inFormCarBrandCreatebrand_status.setSelectedKey("");

        FormCarBrandCreate.setVisible(false);
        FormCarBrandDetails.setVisible(false);

        NavContainer.to(PageCarBrand);
        await apiGET_CarBrand();
        sap.m.MessageToast.show(
            `Create Car Brand: ${get_brand_id} was successfull!`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}

async function CarBrand_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarBrandDetails.getData().id,
            brand_id: inFormCarBrandDetailsbrand_id.getValue().toUpperCase(),
            brand_name: inFormCarBrandDetailsbrand_name.getValue(),
            brand_status: inFormCarBrandDetailsbrand_status.getSelectedKey(),
        },
    };
    await apiPOST_CarBrand(options);

    FormCarBrandCreate.setVisible(false);
    FormCarBrandDetails.setVisible(false);

    NavContainer.to(PageCarBrand);
    await apiGET_CarBrand();
    sap.m.MessageToast.show(
        `Update Car Brand: ${inFormCarBrandDetailsbrand_id.getValue()} was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarBrand_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarBrand.getData();
    
    const id = data.id;
    const brand_id = data.brand_id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh the CarBrand list
    await apiDELETE_CarBrand(options);
    await apiGET_CarBrand();
    
    // Show success message
    DialogDelete_CarBrand.close()
    sap.m.MessageToast.show(
        `Car Brand: ${brand_id} was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}