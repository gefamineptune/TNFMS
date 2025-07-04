if (TPSI_CarRemarks.getVisible()) {
    paginationBarCarRemarks.pagination.take = parseInt(TPSI_CarRemarks.getSelectedKey());
}

let result = await apiGET_CarRemarksCount();

paginationBarCarRemarks.pagination.count = result.count;
paginationBarCarRemarks.pagination.index = 0;
paginationBarCarRemarks.run(true); 
paginationBarCarRemarks.handlePagination();