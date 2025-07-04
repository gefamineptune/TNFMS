if (TPSI_Role.getVisible()) {
    paginationBarRole.pagination.take = parseInt(TPSI_Role.getSelectedKey());
}

apiGET_RoleRelationCount();

paginationBarRole.pagination.index = 0;
paginationBarRole.run(true); 
paginationBarRole.handlePagination();