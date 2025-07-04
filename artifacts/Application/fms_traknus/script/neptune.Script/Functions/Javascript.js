// function test(){
//     try {
//         // Show busy indicator and initial message
//         sap.ui.core.BusyIndicator.show(0);
//         sap.m.MessageToast.show("Mempersiapkan export...");
        
//         // 1. Get data from table
//         var data = modelTableRole.getData();
        
//         // Check if data exists and is an array
//         if (!data || !Array.isArray(data) || data.length === 0) {
//             throw new Error("No data available to export");
//         }
        
//         // Map data to have more readable column headers in the exported file
//         var mappedData = data.map(function(item) {
//             return {
//                 "Role ID": item.fms_role_role_id,
//                 "Role Name": item.fms_role_role_label,
//                 "Access Level": item.fms_access_access_label,
//                 "Status": item.fms_status_status_label,
//                 "Last Updated": item.fms_role_updatedAt
//             };
//         });
        
//         // 2. Prepare worksheet
//         var ws = XLSX.utils.json_to_sheet(mappedData);
        
//         // 3. Create workbook
//         var wb = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(wb, ws, "Role Access");
        
//         // 4. Generate filename with timestamp
//         var date = new Date();
//         var timestamp = date.getFullYear() + "-" + 
//                     ("0" + (date.getMonth() + 1)).slice(-2) + "-" + 
//                     ("0" + date.getDate()).slice(-2) + "_" + 
//                     ("0" + date.getHours()).slice(-2) + "-" + 
//                     ("0" + date.getMinutes()).slice(-2);
//         var filename = "Role_Access_" + timestamp + ".xlsx";
        
//         // 5. Export to file
//         XLSX.writeFile(wb, filename);
        
//         // Hide busy indicator and show success message
//         sap.ui.core.BusyIndicator.hide();
//         sap.m.MessageToast.show("Export completed successfully");
//     } catch (error) {
//         // Handle errors
//         sap.ui.core.BusyIndicator.hide();
//         sap.m.MessageToast.show("Export failed: " + error.message);
//         console.error("Export error:", error);
//     }
// }