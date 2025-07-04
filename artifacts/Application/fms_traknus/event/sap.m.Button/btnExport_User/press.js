try {
    // Show busy indicator
    sap.ui.core.BusyIndicator.show(0);

    // 1. Get data from table
    var data = modelTableUser.getData()

    // Check if data exists and is an array
    if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error("No data available to export");
    }
    
    // Map data to have more readable column headers in the exported file
    var mappedData = data.map(function(item) {
        return {
            "User ID": item.fms_user_user_id,
            "User Name": item.fms_user_user_name,
            "Branch": item.fms_branch_branch_label,
            "Department": item.fms_department_department_name,
            "Role": item.fms_role_role_label,
            "Access Level": item.fms_access_access_label,
            "Status": item.fms_status_status_label,
            "Last Updated": formatTimestamp(item.fms_user_updatedAt)
        };
    });
    
    // 2. Prepare worksheet
    var ws = XLSX.utils.json_to_sheet(mappedData);

    // 3. Create workbook
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "User Management");
    
    // 4. Generate filename with timestamp
    var date = new Date();
    var timestamp = ("0" + date.getDate()).slice(-2) + "-" +
                    ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
                    date.getFullYear() + "_" +
                    ("0" + date.getHours()).slice(-2) + "-" + 
                    ("0" + date.getMinutes()).slice(-2) + "-" +
                    ("0" + date.getSeconds()).slice(-2);
    var filename = "User_Management_" + timestamp + ".xlsx";
    
    // 5. Export to file
    XLSX.writeFile(wb, filename);
    
    // Hide busy indicator and show success message
    sap.ui.core.BusyIndicator.hide();
    sap.m.MessageToast.show(
        "Export completed successfully",
        {
            my: sap.ui.core.Popup.Dock.CenterBottom,
            at: sap.ui.core.Popup.Dock.CenterBottom
        }
    );
} catch (error) {
    // Handle errors
    sap.ui.core.BusyIndicator.hide();
    sap.m.MessageToast.show("Export failed: " + error.message);
    console.error("Export error:", error);
}
