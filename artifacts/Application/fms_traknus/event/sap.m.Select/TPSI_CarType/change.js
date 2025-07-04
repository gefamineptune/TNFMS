if (TPSI_CarType.getVisible()) {
    paginationBarCarType.pagination.take = parseInt(TPSI_CarType.getSelectedKey());
}

let result = await apiGET_CarTypeCount();

paginationBarCarType.pagination.count = result.count;
paginationBarCarType.pagination.index = 0;
paginationBarCarType.run(true); 
paginationBarCarType.handlePagination();