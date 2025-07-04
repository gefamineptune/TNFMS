// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
//

let countBranch = await apiGET_BranchCount();
let countDepartment = await apiGET_DepartmentCount();
let countAccess = await apiGET_AccessCount();
let countStatus = await apiGET_StatusCount();
let countCarBrand = await apiGET_CarBrandCount();
let countCarType = await apiGET_CarTypeCount();
let countCarAcquisition = await apiGET_CarAcquisitionCount();
let countCarFuel = await apiGET_CarFuelCount();
let countCarCategory = await apiGET_CarCategoryCount();
let countCarOwnership = await apiGET_CarOwnershipCount();
let countCarRemarks = await apiGET_CarRemarksCount();
let countCarStatus = await apiGET_CarStatusCount();

Total_Branch.setSubtitle(countBranch.count)
Total_Department.setSubtitle(countDepartment.count)
Total_Access.setSubtitle(countAccess.count)
Total_Status.setSubtitle(countStatus.count)
Total_CarBrand.setSubtitle(countCarBrand.count)
Total_CarType.setSubtitle(countCarType.count)
Total_CarAcquisition.setSubtitle(countCarAcquisition.count)
Total_CarFuel.setSubtitle(countCarFuel.count)
Total_CarCategory.setSubtitle(countCarCategory.count)
Total_CarOwnership.setSubtitle(countCarOwnership.count)
Total_CarRemarks.setSubtitle(countCarRemarks.count)
Total_CarStatus.setSubtitle(countCarStatus.count)

NavContainer.to(PageMasterData);