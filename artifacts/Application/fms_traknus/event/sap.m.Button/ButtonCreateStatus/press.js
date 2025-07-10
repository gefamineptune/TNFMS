FormStatusCreate.setVisible(true);

var statuses = await apiGET_Status(
    options = {
        parameters: {
            select: "status_id"
        }
    }
);
var existingIds = statuses.map(data => data.status_id);
var randomId = generateRandomUniqueId('STS', existingIds);

inFormStatusCreatestatus_id.setValue(randomId);

NavContainer.to(PageStatusDetails);