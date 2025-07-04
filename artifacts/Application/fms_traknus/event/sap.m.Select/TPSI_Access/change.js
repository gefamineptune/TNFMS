if (TPSI_Access.getVisible()) {
    paginationBarAccess.pagination.take = parseInt(TPSI_Access.getSelectedKey());
}

let result = await apiGET_AccessCount();

paginationBarAccess.pagination.count = result.count;
paginationBarAccess.pagination.index = 0;
paginationBarAccess.run(true); 
paginationBarAccess.handlePagination();