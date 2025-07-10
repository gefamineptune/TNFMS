async function CarMaintenance_Create(){
    var maintenance_item = inFormCarMaintenanceCreatemaintenance_item;
    var maintenance_date = inFormCarMaintenanceCreatemaintenance_date;
    var maintenance_vehicle_km = inFormCarMaintenanceCreatemaintenance_vehicle_km;
    var maintenance_price = inFormCarMaintenanceCreatemaintenance_price;
    var maintenance_remarks = inFormCarMaintenanceCreatemaintenance_remarks;

    if(maintenance_item.getValue() === ""){
        maintenance_item.setValueState("Error");
        maintenance_item.setValueStateText("Please provide maintenance item");
        sap.m.MessageToast.show(
            "Please provide maintenance item",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        maintenance_item.setValueState("None");
    }
    if(maintenance_date.getValue() === ""){
        maintenance_date.setValueState("Error");
        maintenance_date.setValueStateText("Please provide maintenance date");
        sap.m.MessageToast.show(
            "Please provide maintenance date",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        maintenance_date.setValueState("None");
    }
    if(maintenance_vehicle_km.getValue() === ""){
        maintenance_vehicle_km.setValueState("Error");
        maintenance_vehicle_km.setValueStateText("Please provide maintenance vehicle km");
        sap.m.MessageToast.show(
            "Please provide maintenance vehicle km",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        maintenance_vehicle_km.setValueState("None");
    }
    if(maintenance_price.getValue() === ""){
        maintenance_price.setValueState("Error");
        maintenance_price.setValueStateText("Please provide maintenance price");
        sap.m.MessageToast.show(
            "Please provide maintenance price",
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
        return;
    } else {
        maintenance_price.setValueState("None");
    }

    var options = {
        data: {
            maintenance_item: maintenance_item.getValue(),
            maintenance_date: maintenance_date.getValue(),
            maintenance_vehicle_km: hapusFormatTitik(maintenance_vehicle_km.getValue()),
            maintenance_price: hapusFormatTitik(maintenance_price.getValue()),
            maintenance_remarks: maintenance_remarks.getValue(),
            maintenance_car_id: modelField_CarInformation_Left.getData().fms_car_car_id,
        },
    };
    await apiPUT_MaintenanceReport(options);

    inFormCarMaintenanceCreatemaintenance_item.setValue("");
    inFormCarMaintenanceCreatemaintenance_date.setValue("");
    inFormCarMaintenanceCreatemaintenance_vehicle_km.setValue("");
    inFormCarMaintenanceCreatemaintenance_price.setValue("");
    inFormCarMaintenanceCreatemaintenance_remarks.setValue("");

    var optionsMaintenance = {
        parameters: {
            where: JSON.stringify({"maintenance_car_id": modelField_CarInformation_Left.getData().fms_car_car_id}),
        },
    }
    var MaintenanceReport = await apiGET_MaintenanceReport(optionsMaintenance);
    modelTableCarMaintenance.setData(MaintenanceReport);

    DialogCreate_CarMaintenance.close();
    sap.m.MessageToast.show(
        `Create Car Maintenance was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarMaintenance_Update(){
    var options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormCarMaintenanceDetails.getData().id,
            maintenance_item: inFormCarMaintenanceDetailsmaintenance_item.getValue(),
            maintenance_date: inFormCarMaintenanceDetailsmaintenance_date.getValue(),
            maintenance_vehicle_km: hapusFormatTitik(inFormCarMaintenanceDetailsmaintenance_vehicle_km.getValue()),
            maintenance_price: hapusFormatTitik(inFormCarMaintenanceDetailsmaintenance_price.getValue()),
            maintenance_remarks: inFormCarMaintenanceDetailsmaintenance_remarks.getValue(),
            maintenance_car_id: modelField_CarInformation_Left.getData().fms_car_car_id,
        },
    };
    // console.log(options)
    await apiPOST_MaintenanceReport(options);

    var optionsMaintenance = {
        parameters: {
            where: JSON.stringify({"maintenance_car_id": modelFormCarMaintenanceDetails.getData().maintenance_car_id}),
        },
    }
    var MaintenanceReport = await apiGET_MaintenanceReport(optionsMaintenance);
    modelTableCarMaintenance.setData(MaintenanceReport);

    DialogUpdate_CarMaintenance.close();
    sap.m.MessageToast.show(
        `Update Car Maintenance was successfull!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}

async function CarMaintenance_Delete(){
    // Get entire model
    const data = modelDialogDelete_CarMaintenance.getData();
    const id = data.id;
    
    // Set up API options with the ID to delete
    var options = {
        parameters: {
            where: JSON.stringify({"id": id}),
        },
    };
    
    // Call the delete API and refresh list
    await apiDELETE_MaintenanceReport(options);

    var optionsMaintenance = {
        parameters: {
            where: JSON.stringify({"maintenance_car_id": data.maintenance_car_id}),
        },
    }
    var MaintenanceReport = await apiGET_MaintenanceReport(optionsMaintenance);
    modelTableCarMaintenance.setData(MaintenanceReport);
    
    // Show success message
    DialogDelete_CarMaintenance.close()
    sap.m.MessageToast.show(
        `Car Maintenance was successfully deleted!`,
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}