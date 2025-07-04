if (TPSI_Status.getVisible()) {
    paginationBarStatus.pagination.take = parseInt(TPSI_Status.getSelectedKey());
}

let result = await apiGET_StatusCount();

paginationBarStatus.pagination.count = result.count;
paginationBarStatus.pagination.index = 0;
paginationBarStatus.run(true); 
paginationBarStatus.handlePagination();