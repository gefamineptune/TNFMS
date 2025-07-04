if (TPSI_CarBrand.getVisible()) {
    paginationBarCarBrand.pagination.take = parseInt(TPSI_CarBrand.getSelectedKey());
}

let result = await apiGET_CarBrandCount();

paginationBarCarBrand.pagination.count = result.count;
paginationBarCarBrand.pagination.index = 0;
paginationBarCarBrand.run(true); 
paginationBarCarBrand.handlePagination();