if (TPSI_CarStatus.getVisible()) {
    paginationBarCarStatus.pagination.take = parseInt(TPSI_CarStatus.getSelectedKey());
}

let result = await apiGET_CarStatusCount();

paginationBarCarStatus.pagination.count = result.count;
paginationBarCarStatus.pagination.index = 0;
paginationBarCarStatus.run(true); 
paginationBarCarStatus.handlePagination();