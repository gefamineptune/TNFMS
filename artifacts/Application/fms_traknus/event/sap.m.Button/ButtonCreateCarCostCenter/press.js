FormCarCostCenterCreate.setVisible(true);

modelinFormCarCostCenterCreatecost_center_status.setData(await apiGET_Status());

var carCostCenter = await apiGET_CarCostCenter(
    options = {
        parameters: {
            select: "cost_center_id"
        }
    }
);
var existingIds = carCostCenter.map(data => data.cost_center_id);
var randomId = generateRandomUniqueId('CRCC', existingIds);

inFormCarCostCenterCreatecost_center_id.setValue(randomId);

NavContainer.to(PageCarCostCenterDetails);