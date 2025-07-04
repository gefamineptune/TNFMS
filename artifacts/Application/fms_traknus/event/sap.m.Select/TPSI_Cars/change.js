if (TPSI_Cars.getVisible()) {
    paginationBarCars.pagination.take = parseInt(TPSI_Cars.getSelectedKey());
}

apiGET_CarCount();

paginationBarCars.pagination.index = 0;
paginationBarCars.run(true); 
paginationBarCars.handlePagination();