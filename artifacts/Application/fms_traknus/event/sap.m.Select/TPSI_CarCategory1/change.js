if (TPSI_CarCategory.getVisible()) {
    paginationBarCarCategory.pagination.take = parseInt(TPSI_CarCategory.getSelectedKey());
}

let result = await apiGET_CarCategoryCount();

paginationBarCarCategory.pagination.count = result.count;
paginationBarCarCategory.pagination.index = 0;
paginationBarCarCategory.run(true); 
paginationBarCarCategory.handlePagination();