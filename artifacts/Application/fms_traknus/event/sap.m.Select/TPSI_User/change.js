if (TPSI_User.getVisible()) {
    paginationBarUser.pagination.take = parseInt(TPSI_User.getSelectedKey());
}

apiGET_UserCount();

paginationBarUser.pagination.index = 0;
paginationBarUser.run(true); 
paginationBarUser.handlePagination();