async function Parameter_Update(){
    let options = {
        parameters: {
            where: "", // Optional
        },
        data: {
            id: modelFormParameterDetails.getData().id,
            periodical_service_1: hapusFormatTitik(inFormParameterDetailsperiodical_service_1.getValue()),
            reminder_periodical_service_1: hapusFormatTitik(inFormParameterDetailsreminder_periodical_service_1.getValue()),
            periodical_service_2: inFormParameterDetailsperiodical_service_2.getValue(),
            loan_deduction_weekday: hapusFormatTitik(inFormParameterDetailsloan_deduction_weekday.getValue()),
            loan_deduction_weekend: hapusFormatTitik(inFormParameterDetailsloan_deduction_weekend.getValue()),
            loan_deduction_national_holiday: hapusFormatTitik(inFormParameterDetailsloan_deduction_national_holiday.getValue()),
        },
    };
    // console.log(options.data)
    // console.log(modelFormParameterDetails.getData().periodical_service_1)
    await apiPOST_Parameter(options);

    // Get entire model
    const data = await apiGET_Parameter();

    modelFormParameterDetails.setData(data[0]);

    sap.m.MessageToast.show(
        "System Parameter was successfully updated!",
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
}