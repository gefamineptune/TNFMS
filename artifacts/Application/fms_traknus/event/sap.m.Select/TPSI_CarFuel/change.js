if (TPSI_CarFuel.getVisible()) {
    paginationBarCarFuel.pagination.take = parseInt(TPSI_CarFuel.getSelectedKey());
}

let result = await apiGET_CarFuelCount();

paginationBarCarFuel.pagination.count = result.count;
paginationBarCarFuel.pagination.index = 0;
paginationBarCarFuel.run(true); 
paginationBarCarFuel.handlePagination();