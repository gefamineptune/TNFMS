async function CarDocument_Create(){
    var document_item = inFormCarDocumentCreatedocument_item;
    var document_name = inFormCarDocumentCreatedocument_name;
    var document_validity_period = inFormCarDocumentCreatedocument_validity_period;
    var document_price = inFormCarDocumentCreatedocument_price;
    var document_license_plate = inFormCarDocumentCreatedocument_license_plate;
    var document_remarks = inFormCarDocumentCreatedocument_remarks;

    if(document_item.getValue() === ""){
        document_item.setValueState("Error");
        document_item.setValueStateText("Please provide document item");
        sap.m.MessageToast.show(
            "Please provide document item",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        document_item.setValueState("None");
    }
    if(document_name.getValue() === ""){
        document_name.setValueState("Error");
        document_name.setValueStateText("Please provide document name");
        sap.m.MessageToast.show(
            "Please provide document name",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        document_name.setValueState("None");
    }
    if(document_validity_period.getValue() === ""){
        document_validity_period.setValueState("Error");
        document_validity_period.setValueStateText("Please provide document validity period");
        sap.m.MessageToast.show(
            "Please provide document validity period",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        document_validity_period.setValueState("None");
    }
    if(document_price.getValue() === ""){
        document_price.setValueState("Error");
        document_price.setValueStateText("Please provide document price");
        sap.m.MessageToast.show(
            "Please provide document price",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        document_price.setValueState("None");
    }

    var options = {
        data: {
            document_item: document_item.getValue(),
            document_name: document_name.getValue(),
            document_validity_period: document_validity_period.getValue(),
            document_price: hapusFormatTitik(document_price.getValue()),
            document_license_plate: document_license_plate.getValue().toUpperCase(),
            document_remarks: document_remarks.getValue(),
            document_car_id: modelField_CarInformation_Left.getData().fms_car_car_id,
        },
    };
    await apiPUT_DocumentReport(options);

    inFormCarDocumentCreatedocument_item.setValue("");
    inFormCarDocumentCreatedocument_name.setValue("");
    inFormCarDocumentCreatedocument_validity_period.setValue("");
    inFormCarDocumentCreatedocument_price.setValue("");
    inFormCarDocumentCreatedocument_license_plate.setValue("");
    inFormCarDocumentCreatedocument_remarks.setValue("");

    var optionsDocument = {
        parameters: {
            where: JSON.stringify({"document_car_id": modelField_CarInformation_Left.getData().fms_car_car_id}),
        },
    }
    var DocumentReport = await apiGET_DocumentReport(optionsDocument);
    modelTableCarDocument.setData(DocumentReport);

    DialogCreate_CarDocument.close();
    sap.m.MessageToast.show(
        `Create Car Document was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarDocument_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarDocumentDetails.getData().id,
            document_item: inFormCarDocumentDetailsdocument_item.getValue(),
            document_name: inFormCarDocumentDetailsdocument_name.getValue(),
            document_validity_period: inFormCarDocumentDetailsdocument_validity_period.getValue(),
            document_price: hapusFormatTitik(inFormCarDocumentDetailsdocument_price.getValue()),
            document_license_plate: inFormCarDocumentDetailsdocument_license_plate.getValue().toUpperCase(),
            document_remarks: inFormCarDocumentDetailsdocument_remarks.getValue(),
            document_car_id: modelFormCarDocumentDetails.getData().document_car_id,
        },
    };
    // console.log(options)
    await apiPOST_DocumentReport(options);

    var optionsDocument = {
        parameters: {
            where: JSON.stringify({"document_car_id": modelFormCarDocumentDetails.getData().document_car_id}),
        },
    }
    var DocumentReport = await apiGET_DocumentReport(optionsDocument);
    modelTableCarDocument.setData(DocumentReport);

    DialogUpdate_CarDocument.close();
    sap.m.MessageToast.show(
        `Update Car Document was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarDocument_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarDocument.getData();
    const id = data.id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh list
    await apiDELETE_DocumentReport(options);

    var optionsDocument = {
        parameters: {
            where: JSON.stringify({"document_car_id": data.document_car_id}),
        },
    }
    var DocumentReport = await apiGET_DocumentReport(optionsDocument);
    modelTableCarDocument.setData(DocumentReport);
    
    // Show success message
    DialogDelete_CarDocument.close()
    sap.m.MessageToast.show(
        `Car Document was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}