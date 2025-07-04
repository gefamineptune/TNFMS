if (TPSI_CarOwnership.getVisible()) {
    paginationBarCarOwnership.pagination.take = parseInt(TPSI_CarOwnership.getSelectedKey());
}

let result = await apiGET_CarOwnershipCount();

paginationBarCarOwnership.pagination.count = result.count;
paginationBarCarOwnership.pagination.index = 0;
paginationBarCarOwnership.run(true); 
paginationBarCarOwnership.handlePagination();