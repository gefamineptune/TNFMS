FormAccessCreate.setVisible(true);

modelinFormAccessCreateaccess_status.setData(await apiGET_Status());

var access = await apiGET_Access(
    options = {
        parameters: {
            select: "access_id"
        }
    }
);
var existingIds = access.map(data => data.access_id);
var randomId = generateRandomUniqueId('ACS', existingIds);

inFormAccessCreateaccess_id.setValue(randomId);

NavContainer.to(PageAccessDetails);